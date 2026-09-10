import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// ── Save chat messages ───────────────────────────────────────────────────────

export const save = mutation({
  args: {
    userId: v.id("users"),
    userMessage: v.string(),
    assistantReply: v.string(),
    actions: v.optional(
      v.array(
        v.object({
          type: v.string(),
          status: v.string(),
          detail: v.string(),
        }),
      ),
    ),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    await ctx.db.insert("chatMessages", {
      userId: args.userId,
      role: "user",
      content: args.userMessage,
      createdAt: now,
    });
    await ctx.db.insert("chatMessages", {
      userId: args.userId,
      role: "assistant",
      content: args.assistantReply,
      actions: args.actions,
      createdAt: now + 1,
    });
  },
});

// ── Get recent chat history ───────────────────────────────────────────────────

export const getHistory = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const messages = await ctx.db
      .query("chatMessages")
      .withIndex("by_user_created", (q) => q.eq("userId", userId))
      .order("desc")
      .take(20);

    return messages.reverse();
  },
});

// ── Clear chat history ────────────────────────────────────────────────────────

export const clearHistory = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return;

    const messages = await ctx.db
      .query("chatMessages")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    for (const msg of messages) {
      await ctx.db.delete(msg._id);
    }
  },
});
