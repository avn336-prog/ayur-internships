/** Lightweight local-time date helpers (avoid UTC off-by-one from ISO parsing). */

function parseLocal(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function dateToStr(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function todayStr(): string {
  return dateToStr(new Date());
}

/** Returns "yyyy-MM-dd" shifted by `days` (negative = past). */
export function shiftDate(date: string, days: number): string {
  const d = parseLocal(date);
  d.setDate(d.getDate() + days);
  return dateToStr(d);
}

export function strToDisplay(date: string): string {
  return parseLocal(date).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Convenience display without year for the current year. */
export function strToShortDisplay(date: string): string {
  return parseLocal(date).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

/** Last `count` days ending today, ascending, as "yyyy-MM-dd". */
export function lastNDates(count: number): string[] {
  const out: string[] = [];
  for (let i = count - 1; i >= 0; i--) {
    out.push(shiftDate(todayStr(), -i));
  }
  return out;
}

/** Consecutive-day streak ending today (or yesterday if today has no entry yet). */
export function currentStreak(dateStrs: string[]): number {
  const present = new Set(dateStrs);
  let cursor = todayStr();
  if (!present.has(cursor)) cursor = shiftDate(cursor, -1);
  let streak = 0;
  while (present.has(cursor)) {
    streak += 1;
    cursor = shiftDate(cursor, -1);
  }
  return streak;
}
