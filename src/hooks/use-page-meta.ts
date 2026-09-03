import { useEffect } from "react";
import { absoluteUrl, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

interface MetaSpec {
  /** CSS selector identifying an existing tag to update, if any. */
  selector: string;
  /** Which attribute carries the key: "name" or "property". */
  attribute: "name" | "property";
  /** Value of that key attribute, e.g. "og:title". */
  attributeValue: string;
  content: string | null;
}

function upsertMeta({ selector, attribute, attributeValue, content }: MetaSpec) {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  if (content === null) {
    existing?.remove();
    return;
  }
  if (existing) {
    existing.setAttribute("content", content);
    return;
  }
  const el = document.createElement("meta");
  el.setAttribute(attribute, attributeValue);
  el.setAttribute("content", content);
  document.head.appendChild(el);
}

interface PageMeta {
  /** Page title (brand suffix is added automatically). */
  title: string;
  description?: string;
  /** Path used for og:url/canonical, e.g. "/internships". */
  path?: string;
  /** Optional override og:image path (defaults to /og-image.png). */
  imagePath?: string;
}

/**
 * Sets the document title, meta description, Open Graph / Twitter tags and
 * canonical URL for the current page. Call at the top of every page
 * component; values are overwritten on each navigation.
 */
export function usePageMeta({ title, description, path, imagePath }: PageMeta) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const desc = description || SITE_DESCRIPTION;
    const url = absoluteUrl(path || "/");
    const image = absoluteUrl(imagePath || "/og-image.png");

    const write = (spec: Omit<MetaSpec, "content"> & { content: string }) =>
      upsertMeta(spec);
    write({
      selector: 'meta[name="description"]',
      attribute: "name",
      attributeValue: "description",
      content: desc,
    });
    write({
      selector: 'meta[property="og:title"]',
      attribute: "property",
      attributeValue: "og:title",
      content: fullTitle,
    });
    write({
      selector: 'meta[property="og:description"]',
      attribute: "property",
      attributeValue: "og:description",
      content: desc,
    });
    write({
      selector: 'meta[property="og:type"]',
      attribute: "property",
      attributeValue: "og:type",
      content: "website",
    });
    write({
      selector: 'meta[property="og:url"]',
      attribute: "property",
      attributeValue: "og:url",
      content: url,
    });
    write({
      selector: 'meta[property="og:image"]',
      attribute: "property",
      attributeValue: "og:image",
      content: image,
    });
    write({
      selector: 'meta[property="og:site_name"]',
      attribute: "property",
      attributeValue: "og:site_name",
      content: SITE_NAME,
    });
    write({
      selector: 'meta[name="twitter:card"]',
      attribute: "name",
      attributeValue: "twitter:card",
      content: "summary_large_image",
    });
    write({
      selector: 'meta[name="twitter:title"]',
      attribute: "name",
      attributeValue: "twitter:title",
      content: fullTitle,
    });
    write({
      selector: 'meta[name="twitter:description"]',
      attribute: "name",
      attributeValue: "twitter:description",
      content: desc,
    });
    write({
      selector: 'meta[name="twitter:image"]',
      attribute: "name",
      attributeValue: "twitter:image",
      content: image,
    });

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, imagePath]);
}
