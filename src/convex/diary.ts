import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { consumeRateLimit, minutesUntil } from "./rateLimits";

// Get diary entries for current user (optionally filtered by date range)
export const list = query({
  args: {
    startDate: v.optional(v.string()),
    endDate: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const q = ctx.db
      .query("diaryEntries")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc");

    const entries = await q.collect();

    if (args.startDate) {
      return entries.filter((e) => e.date >= args.startDate!);
    }
    if (args.endDate) {
      return entries.filter((e) => e.date <= args.endDate!);
    }
    return entries;
  },
});

// Get diary entries for a specific date
export const listByDate = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return await ctx.db
      .query("diaryEntries")
      .withIndex("by_user_date", (q) =>
        q.eq("userId", userId).eq("date", args.date),
      )
      .order("desc")
      .collect();
  },
});

// Create a diary entry
export const create = mutation({
  args: {
    date: v.string(),
    title: v.string(),
    content: v.string(),
    mood: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const rate = await consumeRateLimit(ctx, "diaryCreate", userId);
    if (!rate.ok) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: `Please wait ${minutesUntil(rate.retryAfterMs)} minute${minutesUntil(rate.retryAfterMs) === 1 ? "" : "s"} before creating another entry.`,
      });
    }

    return await ctx.db.insert("diaryEntries", {
      userId,
      date: args.date,
      title: args.title,
      content: args.content,
      mood: args.mood,
      tags: args.tags,
      createdAt: Date.now(),
    });
  },
});

// Update a diary entry
export const update = mutation({
  args: {
    entryId: v.id("diaryEntries"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    mood: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const entry = await ctx.db.get(args.entryId);
    if (!entry) throw new Error("Entry not found");
    if (entry.userId !== userId) throw new Error("Not your entry");

    const updates: Record<string, unknown> = {};
    if (args.title !== undefined) updates.title = args.title;
    if (args.content !== undefined) updates.content = args.content;
    if (args.mood !== undefined) updates.mood = args.mood;
    if (args.tags !== undefined) updates.tags = args.tags;

    await ctx.db.patch(args.entryId, updates);
  },
});

// Delete a diary entry
export const remove = mutation({
  args: { entryId: v.id("diaryEntries") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const entry = await ctx.db.get(args.entryId);
    if (!entry) throw new Error("Entry not found");
    if (entry.userId !== userId) throw new Error("Not your entry");

    await ctx.db.delete(args.entryId);
  },
});
