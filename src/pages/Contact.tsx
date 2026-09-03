import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getErrorMessage } from "@/lib/convex-error";
import { CONTACT } from "@/lib/site";
import { useMutation } from "convex/react";
import {
  AlertCircle,
  Building2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", organization: "", message: "" };

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "Please write a short message (at least 10 characters).";
  }
  return errors;
}

export default function Contact() {
  usePageMeta({
    title: "Contact Us & Partner With AyurSetu",
    description:
      "Get in touch with the AyurSetu team — post internships for your organization, ask questions, or visit us in Bengaluru.",
    path: "/contact",
  });

  const navigate = useNavigate();
  const createEnquiry = useMutation(api.enquiries.createEnquiry);

  const [form, setForm] = useState<FormState>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear the field error as the user fixes the value
    setFieldErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    const errors = validate(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    try {
      await createEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim() || undefined,
        message: form.message.trim(),
      });
      navigate("/thank-you", { replace: true });
    } catch (error) {
      setFormError(
        getErrorMessage(
          error,
          "We couldn't send your message. Please try again in a moment.",
        ),
      );
      setIsSubmitting(false);
    }
  };

  const mapQuery = encodeURIComponent(CONTACT.addressLines.join(", "));

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-light/10 rounded-full blur-3xl pointer-events-none" />

      <SiteHeader />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Talk to the AyurSetu Team
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Represent an institute or wellness organization? Post your
            internships with us. A student? We&apos;ll help you get started.
            We reply within two working days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="clay-card border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-2">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Registered Office</CardTitle>
                <CardDescription>AyurSetu Foundation, Bengaluru</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <address className="not-italic leading-relaxed text-muted-foreground">
                    {CONTACT.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="hover:text-primary transition-colors font-medium"
                    >
                      {CONTACT.email}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      General &amp; partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition-colors font-medium"
                    >
                      {CONTACT.phone}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Mon–Fri, 9:30 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-muted-foreground">{CONTACT.hours}</p>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="clay-inset border-0 rounded-xl"
                  >
                    <MapPin className="mr-1.5 w-4 h-4" />
                    Open in Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <Card className="clay-card border-0">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fields marked * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {formError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-xl bg-destructive/10 text-destructive px-4 py-3 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-sm font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        placeholder="Dr. Meera Iyer"
                        aria-invalid={Boolean(fieldErrors.name)}
                        className="clay-inset border-0 rounded-xl h-11"
                      />
                      {fieldErrors.name && (
                        <p role="alert" className="text-xs text-destructive">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-sm font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        placeholder="you@organization.edu"
                        aria-invalid={Boolean(fieldErrors.email)}
                        className="clay-inset border-0 rounded-xl h-11"
                      />
                      {fieldErrors.email && (
                        <p role="alert" className="text-xs text-destructive">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-org" className="text-sm font-semibold">
                      Organization / College
                    </Label>
                    <Input
                      id="contact-org"
                      name="organization"
                      value={form.organization}
                      onChange={(e) => set("organization")(e.target.value)}
                      placeholder="e.g. Arya Vaidya Sala (optional)"
                      className="clay-inset border-0 rounded-xl h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-sm font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
                      placeholder="Tell us about your internship openings, partnership idea, or question..."
                      aria-invalid={Boolean(fieldErrors.message)}
                      className="clay-inset border-0 rounded-xl min-h-[140px] resize-none"
                    />
                    {fieldErrors.message && (
                      <p role="alert" className="text-xs text-destructive">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="clay-button w-full rounded-xl h-12 font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By sending this message you agree to our{" "}
                    <Link
                      to="/privacy"
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                    . Messages are rate-limited to keep our inbox spam-free.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
