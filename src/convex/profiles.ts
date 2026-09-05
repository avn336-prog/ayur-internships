import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { consumeRateLimit, minutesUntil } from "./rateLimits";

// Get current user's profile
export const getMyProfile = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    return profile;
  },
});

// Create or update profile
export const upsertProfile = mutation({
  args: {
    fullName: v.string(),
    university: v.string(),
    degree: v.string(),
    year: v.string(),
    skills: v.array(v.string()),
    interests: v.array(v.string()),
    experience: v.string(),
    location: v.string(),
    bio: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const rate = await consumeRateLimit(ctx, "profileSave", userId);
    if (!rate.ok) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: `Profile updates are rate-limited — please wait ${minutesUntil(rate.retryAfterMs)} minute${minutesUntil(rate.retryAfterMs) === 1 ? "" : "s"}.`,
      });
    }

    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        completedProfile: true,
      });
      return existing._id;
    }

    return await ctx.db.insert("profiles", {
      userId,
      ...args,
      completedProfile: true,
    });
  },
});


