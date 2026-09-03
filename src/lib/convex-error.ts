/**
 * Extracts a user-friendly message from errors thrown by Convex mutations
 * (ConvexError carries a `data` payload) and plain JS errors alike.
 */
export function getErrorMessage(error: unknown, fallback: string): string {
  if (error && typeof error === "object") {
    const candidate = error as { data?: unknown; message?: unknown };
    if (candidate.data && typeof candidate.data === "object") {
      const data = candidate.data as { message?: unknown; code?: unknown };
      if (typeof data.message === "string" && data.message.trim()) {
        return data.message;
      }
      if (data.code === "RATE_LIMITED") {
        return "Too many attempts — please wait a few minutes and try again.";
      }
    }
    if (typeof candidate.message === "string" && candidate.message.trim()) {
      return candidate.message;
    }
  }
  return fallback;
}
