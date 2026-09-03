import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";
import { CheckCircle2, Home, Mail, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ThankYou() {
  usePageMeta({
    title: "Thank You",
    description:
      "Your message has been sent to the AyurSetu team. We'll get back to you shortly.",
    path: "/thank-you",
  });

  const location = useLocation();
  const source =
    (location.state as { from?: string } | null)?.from ??
    new URLSearchParams(location.search).get("source") ??
    "contact";

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-light/10 rounded-full blur-3xl pointer-events-none" />

      <SiteHeader />

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="clay-card p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-leaf-light/20 rounded-br-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-saffron-light/15 rounded-tl-full pointer-events-none" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-3xl clay-inset flex items-center justify-center mx-auto mb-6 bg-primary/10"
            >
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Thank You!
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md mx-auto">
              {source === "contact" ? (
                <>
                  Your message is with our team. We typically reply within two
                  working days at the email address you provided. If your
                  enquiry is urgent, you can reach us directly at{" "}
                  <a
                    href="mailto:hello@ayursetu.in"
                    className="text-primary font-medium hover:underline"
                  >
                    hello@ayursetu.in
                  </a>
                  .
                </>
              ) : (
                <>We&apos;ve received your submission. Check your email for next steps.</>
              )}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/auth">
                <Button className="clay-button rounded-xl px-6 h-11 font-semibold">
                  <Sparkles className="mr-2 w-4 h-4" />
                  Start Your Internship Search
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="clay-inset border-0 rounded-xl px-6 h-11 font-medium"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Send Another Message
                </Button>
              </Link>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>

      <SiteFooter />
    </div>
  );
}
