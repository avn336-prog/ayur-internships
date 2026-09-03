/**
 * Central site metadata. When the project is deployed to its own custom
 * domain, update SITE_URL here (and in index.html / public/robots.txt /
 * public/sitemap.xml) so crawlers and social previews point at the real
 * origin.
 */
export const SITE_NAME = "AyurSetu";
export const SITE_TAGLINE =
  "Ayurveda & AYUSH internship matching for Indian students";
export const SITE_DESCRIPTION =
  "AyurSetu connects Ayurveda, Yoga and AYUSH students with curated internships at India's top research labs, clinical centers and wellness organizations.";
export const SITE_URL = "https://www.ayursetu.in";

export const CONTACT = {
  email: "hello@ayursetu.in",
  partnershipsEmail: "partners@ayursetu.in",
  addressLines: [
    "AyurSetu Foundation",
    "No. 45, 12th Main Road, Indiranagar",
    "Bengaluru, Karnataka 560038, India",
  ],
  phone: "+91 80 4718 2200",
  hours: "Mon–Fri, 9:30 AM – 6:00 PM IST",
};

/** Human-readable origin for runtime-generated og:url / og:image values. */
export function absoluteUrl(path = "/"): string {
  if (typeof window === "undefined") return `${SITE_URL}${path}`;
  return `${window.location.origin}${path}`;
}
