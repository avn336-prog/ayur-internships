import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const ROLES = {
  ADMIN: "admin",
  STUDENT: "student",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.STUDENT),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    // Student profiles
    profiles: defineTable({
      userId: v.id("users"),
      fullName: v.string(),
      university: v.string(),
      degree: v.string(), // e.g. "BAMS", "MD Ayurveda", "M.Sc Botany"
      year: v.string(), // e.g. "3rd Year", "Final Year", "Postgraduate"
      skills: v.array(v.string()), // e.g. ["Panchakarma", "Herbal Medicine"]
      interests: v.array(v.string()), // e.g. ["Drug Development", "Clinical Research"]
      experience: v.string(), // brief experience description
      location: v.string(), // preferred location
      bio: v.optional(v.string()),
      completedProfile: v.boolean(),
    }).index("by_user", ["userId"]),

    // Available skills that students can select
    skills: defineTable({
      name: v.string(),
      category: v.string(), // e.g. "Ayurveda", "Research", "Technology", "Wellness"
    }).index("by_category", ["category"]),

    // Internship listings from organizations
    internships: defineTable({
      title: v.string(),
      organization: v.string(),
      description: v.string(),
      requiredSkills: v.array(v.string()),
      preferredSkills: v.array(v.string()),
      location: v.string(),
      duration: v.string(), // e.g. "3 months", "6 months"
      stipend: v.string(), // e.g. "₹15,000/month", "Unpaid"
      type: v.string(), // "Research", "Clinical", "Industry", "Government"
      status: v.union(v.literal("open"), v.literal("closed")),
      deadline: v.number(), // timestamp
      contactEmail: v.string(),
      postedAt: v.number(),
    }).index("by_status", ["status"])
      .index("by_type", ["type"]),

    // Student applications to internships
    applications: defineTable({
      studentId: v.id("profiles"),
      internshipId: v.id("internships"),
      matchScore: v.number(), // 0-100 score
      appliedAt: v.number(),
      status: v.union(
        v.literal("pending"),
        v.literal("accepted"),
        v.literal("rejected"),
        v.literal("withdrawn"),
      ),
    }).index("by_student", ["studentId"])
      .index("by_internship", ["internshipId"])
      .index("by_student_internship", ["studentId", "internshipId"]),

    // Fixed-window rate limiting counters (bucket key embeds the window,
    // so stale buckets self-expire; cleanup is opportunistic)
    rateLimits: defineTable({
      key: v.string(), // e.g. "otpSend:user@example.com:12345"
      windowStart: v.number(),
      count: v.number(),
    }).index("by_key", ["key"]),

    // Contact/partnership enquiries from the public contact form
    enquiries: defineTable({
      name: v.string(),
      email: v.string(),
      organization: v.optional(v.string()),
      message: v.string(),
      createdAt: v.number(),
    }).index("by_email", ["email"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
