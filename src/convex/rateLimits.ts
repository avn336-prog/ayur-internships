import { mutation, MutationCtx } from "./_generated/server";
import { v } from "convex/values";

/**
 * Lightweight fixed-window rate limiting backed by the `rateLimits` table.
 *
 * The bucket key embeds the current window (`Math.floor(now / windowMs)`), so
 * every window gets its own document and old buckets naturally fall out of
 * use. Reads/writes are per-key (indexed), keeping the hot path cheap; an
 * opportunistic probabilistic sweep bounds table growth.
 */

export const RATE_LIMITS = {
  /** Email OTP codes sent to one address (Freebuff OTP service is paid per email). */
  otpSend: { limit: 5, windowMs: 10 * 60 * 1000 },
  /** OTP verification attempts for one address. */
  otpVerify: { limit: 15, windowMs: 15 * 60 * 1000 },
  /** Internship applications per user. */
  apply: { limit: 20, windowMs: 60 * 60 * 1000 },
  /** Profile saves per user. */
  profileSave: { limit: 10, windowMs: 60 * 60 * 1000 },
  /** Public contact form submissions per email address. */
  enquiry: { limit: 3, windowMs: 60 * 60 * 1000 },
  /** Diary entry creation per user. */
  diaryCreate: { limit: 20, windowMs: 60 * 60 * 1000 },
  /** Daily task creation per user. */
  taskCreate: { limit: 30, windowMs: 60 * 60 * 1000 },
} as const;

export type RateLimitName = keyof typeof RATE_LIMITS;

const CLEANUP_CHANCE = 0.05;

async function sweepExpired(
  ctx: MutationCtx,
  now: number,
  windowMs: number,
): Promise<void> {
  if (Math.random() > CLEANUP_CHANCE) return;
  const stale = await ctx.db
    .query("rateLimits")
    .filter((q) => q.lt(q.field("windowStart"), now - windowMs))
    .collect();
  for (const row of stale) {
    await ctx.db.delete(row._id);
  }
}

/**
 * Consume one unit of the given rate limit bucket. Returns `ok: false` with a
 * retry hint when the caller has exhausted the limit.
 */
export async function consumeRateLimit(
  ctx: MutationCtx,
  name: RateLimitName,
  subject: string,
): Promise<{ ok: boolean; retryAfterMs: number }> {
  const { limit, windowMs } = RATE_LIMITS[name];
  const now = Date.now();
  const bucket = Math.floor(now / windowMs);
  const key = `${name}:${subject}:${bucket}`;

  const doc = await ctx.db
    .query("rateLimits")
    .withIndex("by_key", (q) => q.eq("key", key))
    .unique();

  if (doc) {
    if (doc.count >= limit) {
      const retryAfterMs = (bucket + 1) * windowMs - now;
      return { ok: false, retryAfterMs };
    }
    await ctx.db.patch(doc._id, { count: doc.count + 1 });
    return { ok: true, retryAfterMs: 0 };
  }

  await ctx.db.insert("rateLimits", {
    key,
    windowStart: bucket * windowMs,
    count: 1,
  });
  await sweepExpired(ctx, now, windowMs);
  return { ok: true, retryAfterMs: 0 };
}

export function minutesUntil(retryAfterMs: number): number {
  return Math.max(1, Math.ceil(retryAfterMs / 60_000));
}

/**
 * Client-facing guard used by the auth page BEFORE the OTP email is sent /
 * verified (the send itself runs inside the Convex Auth library, which we
 * can't intercept). The allowance is consumed up-front here so a flooded
 * address can never reach the email provider at all.
 */
export const checkOtpSend = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return consumeRateLimit(ctx, "otpSend", email.trim().toLowerCase());
  },
});

export const checkOtpVerify = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return consumeRateLimit(ctx, "otpVerify", email.trim().toLowerCase());
  },
});
