import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";
import { consumeRateLimit, minutesUntil } from "./rateLimits";

// Public contact/partnership enquiries (institutes that want to post
// internships, press, feedback). No auth required, so it is rate-limited
// per email address to keep the inbox clean.
export const createEnquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    organization: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ConvexError({ code: "INVALID_INPUT", message: "Please enter a valid email address." });
    }
    if (args.name.trim().length < 2) {
      throw new ConvexError({ code: "INVALID_INPUT", message: "Please enter your name." });
    }
    if (args.message.trim().length < 10) {
      throw new ConvexError({ code: "INVALID_INPUT", message: "Please write a message of at least 10 characters." });
    }

    const result = await consumeRateLimit(ctx, "enquiry", email);
    if (!result.ok) {
      throw new ConvexError({
        code: "RATE_LIMITED",
        message: `Too many messages from this address. Please try again in ${minutesUntil(result.retryAfterMs)} minute${minutesUntil(result.retryAfterMs) === 1 ? "" : "s"}.`,
      });
    }

    return await ctx.db.insert("enquiries", {
      name: args.name.trim(),
      email,
      organization: args.organization?.trim() || undefined,
      message: args.message.trim(),
      createdAt: Date.now(),
    });
  },
});
