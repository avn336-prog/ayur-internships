import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { consumeRateLimit, minutesUntil } from "./rateLimits";
import { learningResources } from "./roadmap";

// Get tasks for a specific date
export const listByDate = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("dailyTasks")
      .withIndex("by_user_date", (q) =>
        q.eq("userId", userId).eq("date", args.date),
      )
      .order("asc")
      .collect();
  },
});

// Get tasks for a date range (for weekly view)
export const listByRange = query({
  args: { startDate: v.string(), endDate: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const tasks = await ctx.db
      .query("dailyTasks")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return tasks
      .filter((t) => t.date >= args.startDate && t.date <= args.endDate)
      .sort((a, b) => a.date.localeCompare(b.date));
  },
});

// Create a task
export const create = mutation({
  args: {
    date: v.string(),
    title: v.string(),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const rate = await consumeRateLimit(ctx, "taskCreate", userId);
    if (!rate.ok) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: `Please wait ${minutesUntil(rate.retryAfterMs)} minute${minutesUntil(rate.retryAfterMs) === 1 ? "" : "s"} before adding more tasks.`,
      });
    }

    return await ctx.db.insert("dailyTasks", {
      userId,
      date: args.date,
      title: args.title,
      completed: false,
      category: args.category,
      createdAt: Date.now(),
    });
  },
});

// Toggle task completion
export const toggle = mutation({
  args: { taskId: v.id("dailyTasks") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const task = await ctx.db.get(args.taskId);
    if (!task) throw new Error("Task not found");
    if (task.userId !== userId) throw new Error("Not your task");

    await ctx.db.patch(args.taskId, { completed: !task.completed });
  },
});

// Delete a task
export const remove = mutation({
  args: { taskId: v.id("dailyTasks") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const task = await ctx.db.get(args.taskId);
    if (!task) throw new Error("Task not found");
    if (task.userId !== userId) throw new Error("Not your task");

    await ctx.db.delete(args.taskId);
  },
});

// Batch create tasks (for auto-generating daily plan)
export const batchCreate = mutation({
  args: {
    tasks: v.array(
      v.object({
        date: v.string(),
        title: v.string(),
        category: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const rate = await consumeRateLimit(ctx, "taskCreate", userId);
    if (!rate.ok) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: `Please wait ${minutesUntil(rate.retryAfterMs)} minute${minutesUntil(rate.retryAfterMs) === 1 ? "" : "s"} before creating tasks.`,
      });
    }

    const ids = [];
    for (const task of args.tasks) {
      const id = await ctx.db.insert("dailyTasks", {
        userId,
        date: task.date,
        title: task.title,
        completed: false,
        category: task.category,
        createdAt: Date.now(),
      });
      ids.push(id);
    }
    return ids;
  },
});

// Build a curated daily to-do list from the student's skill-gap roadmap.
// Pulls the top missing skills from the best-matching internships, pairs each
// with a concrete learning resource, and tops it off with practice tasks.
// Never duplicates tasks that already exist for the date.
export const planDay = mutation({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const rate = await consumeRateLimit(ctx, "taskCreate", userId);
    if (!rate.ok) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: `Please wait ${minutesUntil(rate.retryAfterMs)} minute${minutesUntil(rate.retryAfterMs) === 1 ? "" : "s"} before planning your day again.`,
      });
    }

    const existing = await ctx.db
      .query("dailyTasks")
      .withIndex("by_user_date", (q) =>
        q.eq("userId", userId).eq("date", args.date),
      )
      .collect();
    const existingTitles = new Set(
      existing.map((t) => t.title.trim().toLowerCase()),
    );

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    // 1) Find the most valuable missing skills (gap analysis, same logic as
    //    the roadmap page): skills demanded by top-matching internships.
    const gapTasks: Array<{ title: string; category: string }> = [];
    if (profile) {
      const own = new Set(
        [...profile.skills, ...profile.interests].map((s) => s.toLowerCase()),
      );
      const openInternships = await ctx.db
        .query("internships")
        .withIndex("by_status", (q) => q.eq("status", "open"))
        .collect();

      const requiredCount = new Map<string, number>();
      const preferredCount = new Map<string, number>();
      for (const internship of openInternships) {
        const alreadyMatched = internship.requiredSkills.some((s) =>
          own.has(s.toLowerCase()),
        );
        for (const skill of internship.requiredSkills) {
          if (!own.has(skill.toLowerCase())) {
            requiredCount.set(
              skill,
              (requiredCount.get(skill) || 0) + (alreadyMatched ? 1 : 2),
            );
          }
        }
        for (const skill of internship.preferredSkills) {
          if (!own.has(skill.toLowerCase()) && !requiredCount.has(skill)) {
            preferredCount.set(
              skill,
              (preferredCount.get(skill) || 0) + 1,
            );
          }
        }
      }

      const ranked = [
        ...[...requiredCount.entries()].map(([skill, weight]) => ({
          skill,
          weight,
        })),
        ...[...preferredCount.entries()].map(([skill, weight]) => ({
          skill,
          weight: weight * 0.5,
        })),
      ].sort((a, b) => b.weight - a.weight);

      for (const { skill } of ranked.slice(0, 3)) {
        const title = `Learn ${skill}`;
        if (!existingTitles.has(title.toLowerCase())) {
          gapTasks.push({ title, category: "learning" });
          existingTitles.add(title.toLowerCase());
        }
        const bestResource = learningResources[skill]?.[0];
        if (bestResource) {
          const readTitle = `Read: ${bestResource.title}`;
          if (!existingTitles.has(readTitle.toLowerCase())) {
            gapTasks.push({ title: readTitle, category: "reading" });
            existingTitles.add(readTitle.toLowerCase());
          }
        }
        if (gapTasks.length >= 4) break;
      }
    }

    // 2) Anchor tasks that keep the student moving every day.
    const anchors: Array<{ title: string; category: string }> = [
      profile
        ? { title: "Apply to one shortlisted internship", category: "application" }
        : { title: "Complete your profile & add skills", category: "practice" },
      { title: "Write today's diary entry", category: "reflection" },
    ];

    // 3) Fallback when the profile has no gaps to close yet.
    const fallback: Array<{ title: string; category: string }> = [
      { title: "Browse internships & shortlist three", category: "application" },
      { title: "Read one Ayurveda research article", category: "reading" },
      { title: "Practice one clinical skill", category: "practice" },
      { title: "Write today's diary entry", category: "reflection" },
    ];

    const pick = gapTasks.length > 0 ? gapTasks : fallback;
    const finalTasks = [...pick, ...anchors].slice(0, 5);

    const created = [];
    for (const task of finalTasks) {
      if (existingTitles.has(task.title.toLowerCase())) continue;
      created.push(
        await ctx.db.insert("dailyTasks", {
          userId,
          date: args.date,
          title: task.title,
          completed: false,
          category: task.category,
          createdAt: Date.now(),
        }),
      );
      existingTitles.add(task.title.toLowerCase());
    }

    return created.length;
  },
});
