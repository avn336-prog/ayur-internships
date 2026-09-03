/**
 * Analytics bootstrap (Microsoft Clarity).
 *
 * Clarity only loads when BOTH conditions hold:
 *  1. The visitor explicitly accepted non-essential cookies in the cookie
 *     banner (stored under the `ayursetu-consent` key in localStorage).
 *  2. A project ID exists in the `VITE_CLARITY_ID` environment variable
 *     (paste it in the project's Keys/API keys tab).
 *
 * Until both are true this module is a no-op, so the app never sends data
 * without consent and never throws when the key is missing.
 */

export type ConsentChoice = "accepted" | "declined";

export const CONSENT_KEY = "ayursetu-consent";

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function setConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, choice);
  if (choice === "accepted") {
    loadClarity();
  }
}

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

let clarityLoaded = false;

export function loadClarity(): void {
  if (clarityLoaded || typeof window === "undefined") return;
  const clarityId = import.meta.env.VITE_CLARITY_ID as string | undefined;
  if (!clarityId) return;
  clarityLoaded = true;

  try {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`;
    script.onerror = () => {
      clarityLoaded = false; // allow retry on next visit
    };
    document.head.appendChild(script);
  } catch (error) {
    console.error("[analytics] Failed to load Clarity:", error);
    clarityLoaded = false;
  }
}

/** Called once on app boot: respects an earlier consent decision. */
export function initAnalyticsFromStoredConsent(): void {
  if (getConsent() === "accepted") {
    loadClarity();
  }
}
