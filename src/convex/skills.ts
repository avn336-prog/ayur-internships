import { query } from "./_generated/server";
import { v } from "convex/values";

// List all available skills
export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  },
});

// Get skills by category
export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("skills")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

// Get unique categories
export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const allSkills = await ctx.db.query("skills").collect();
    const categories = [...new Set(allSkills.map((s) => s.category))];
    return categories.sort();
  },
});
