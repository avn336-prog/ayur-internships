import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Link } from "react-router";
import {
  getConsent,
  initAnalyticsFromStoredConsent,
  setConsent,
} from "@/lib/analytics";

/**
 * Cookie banner + analytics bootstrap. Rendered once at the app root:
 *  - On first load with no stored choice it asks the visitor.
 *  - "Accept all" loads optional analytics (Microsoft Clarity) once.
 *  - "Essential only" stores the refusal and never loads analytics.
 * A previously stored choice is respected on every subsequent visit.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initAnalyticsFromStoredConsent();
    if (getConsent() === null) {
      // slight delay so it never competes with first paint
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[70]"
        >
          <div className="clay-card p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center shrink-0 bg-primary/10">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-sm">Your privacy matters</h2>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  We use strictly necessary storage to keep you signed in.
                  With your permission we also use Microsoft Clarity to
                  understand how visitors use the site. You can decline —
                  analytics will never run without your consent. See our{" "}
                  <Link
                    to="/privacy"
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/terms"
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    Terms
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <Button
                onClick={() => decide("accepted")}
                className="clay-button flex-1 rounded-xl text-sm h-10 font-semibold"
              >
                Accept All
              </Button>
              <Button
                onClick={() => decide("declined")}
                variant="outline"
                className="clay-inset border-0 flex-1 rounded-xl text-sm h-10 font-medium"
              >
                Essential Only
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
