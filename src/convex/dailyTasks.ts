import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { consumeRateLimit, minutesUntil } from "./rateLimits";

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
