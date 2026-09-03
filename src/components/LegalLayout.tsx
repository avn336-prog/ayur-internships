import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

interface LegalLayoutProps {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

/** Shared shell for long-form public pages (privacy, terms, etc.). */
export function LegalLayout({ title, eyebrow, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-light/10 rounded-full blur-3xl pointer-events-none" />

      <SiteHeader />

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          {title}
        </h1>
        <div className="mt-10 space-y-10">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}

/** Styled section inside legal pages. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="clay-card p-6 sm:p-8">
      <h2 className="text-lg font-bold tracking-tight mb-3">{heading}</h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
