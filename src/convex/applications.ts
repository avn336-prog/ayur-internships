import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Apply to an internship
export const apply = mutation({
  args: { internshipId: v.id("internships") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) throw new Error("Complete your profile first");

    // Check if already applied
    const existing = await ctx.db
      .query("applications")
      .withIndex("by_student_internship", (q) =>
        q.eq("studentId", profile._id).eq("internshipId", args.internshipId),
      )
      .unique();
    if (existing) throw new Error("Already applied to this internship");

    const internship = await ctx.db.get(args.internshipId);
    if (!internship) throw new Error("Internship not found");
    if (internship.status !== "open") throw new Error("Internship is closed");

    // Calculate match score
    const studentSkills = [
      ...profile.skills.map((s) => s.toLowerCase()),
      ...profile.interests.map((s) => s.toLowerCase()),
    ];
    const requiredMatches = internship.requiredSkills.filter((s) =>
      studentSkills.includes(s.toLowerCase()),
    ).length;
    const preferredMatches = internship.preferredSkills.filter((s) =>
      studentSkills.includes(s.toLowerCase()),
    ).length;
    const totalRequired = internship.requiredSkills.length || 1;
    const totalPreferred = internship.preferredSkills.length || 1;
    const score = Math.round(
      (requiredMatches / totalRequired) * 70 +
        (preferredMatches / totalPreferred) * 30,
    );

    return await ctx.db.insert("applications", {
      studentId: profile._id,
      internshipId: args.internshipId,
      matchScore: score,
      appliedAt: Date.now(),
      status: "pending",
    });
  },
});

// Get my applications
export const getMyApplications = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) return [];

    const applications = await ctx.db
      .query("applications")
      .withIndex("by_student", (q) => q.eq("studentId", profile._id))
      .collect();

    // Enrich with internship details
    const enriched = await Promise.all(
      applications.map(async (app) => {
        const internship = await ctx.db.get(app.internshipId);
        return { ...app, internship };
      }),
    );

    return enriched;
  },
});

// Withdraw application
export const withdraw = mutation({
  args: { applicationId: v.id("applications") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) throw new Error("Profile not found");

    const application = await ctx.db.get(args.applicationId);
    if (!application) throw new Error("Application not found");
    if (application.studentId !== profile._id)
      throw new Error("Not your application");

    await ctx.db.patch(args.applicationId, { status: "withdrawn" });
  },
});
