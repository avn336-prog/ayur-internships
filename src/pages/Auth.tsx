import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import AyurvedaScene from "@/components/AyurvedaScene";

import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useMutation } from "convex/react";
import {
  Leaf,
  ArrowRight,
  Loader2,
  Mail,
  UserX,
  Sparkles,
  Sprout,
} from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router";

interface AuthProps {
  redirectAfterAuth?: string;
}

function resolveRedirectAfterAuth(
  returnTo: string | null,
  fallback = "/dashboard",
) {
  if (returnTo?.startsWith("/") && !returnTo.startsWith("//")) {
    return returnTo;
  }
  return fallback;
}

function Auth({ redirectAfterAuth }: AuthProps = {}) {
  const { isLoading: authLoading, isAuthenticated, signIn } = useAuth();
  const checkOtpSend = useMutation(api.rateLimits.checkOtpSend);
  const checkOtpVerify = useMutation(api.rateLimits.checkOtpVerify);
  const navigate = useNavigate();

  usePageMeta({
    title: "Sign In or Sign Up",
    description:
      "Sign in or create your AyurSetu account to find matched Ayurveda and AYUSH internships, plan your learning roadmap and keep an internship diary.",
    path: "/auth",
  });
  const [searchParams] = useSearchParams();
  const redirect = resolveRedirectAfterAuth(
    searchParams.get("returnTo"),
    redirectAfterAuth,
  );
  const [mode, setMode] = useState<"signIn" | "signUp">("signIn");
  const [step, setStep] = useState<"email" | { email: string }>("email");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      navigate(redirect);
    }
  }, [authLoading, isAuthenticated, navigate, redirect]);

  const switchMode = (next: "signIn" | "signUp") => {
    if (next === mode) return;
    setMode(next);
    setStep("email");
    setError(null);
    setOtp("");
  };

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      const email = (formData.get("email") as string) ?? "";

      // Server-side rate gate: consume one OTP-send allowance per address
      // before the email is ever dispatched (the send itself runs inside
      // the Convex Auth library, which we cannot intercept).
      const gate = await checkOtpSend({ email });
      if (!gate.ok) {
        const minutes = Math.max(1, Math.ceil(gate.retryAfterMs / 60_000));
        throw new Error(
          `Too many sign-in codes requested for this email. Please wait ${minutes} minute${minutes === 1 ? "" : "s"} and try again.`,
        );
      }

      await signIn("email-otp", formData);
      setStep({ email });
      setIsLoading(false);
    } catch (error) {
      console.error("Email sign-in error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      const email = (formData.get("email") as string) ?? "";

      // Limit verification attempts per address as well.
      const gate = await checkOtpVerify({ email });
      if (!gate.ok) {
        const minutes = Math.max(1, Math.ceil(gate.retryAfterMs / 60_000));
        throw new Error(
          `Too many verification attempts for this email. Please wait ${minutes} minute${minutes === 1 ? "" : "s"} and try again.`,
        );
      }

      await signIn("email-otp", formData);
      navigate(redirect);
    } catch (error) {
      console.error("OTP verification error:", error);
      setError(
        error instanceof Error && error.message.startsWith("Too many")
          ? error.message
          : "The verification code you entered is incorrect.",
      );
      setIsLoading(false);
      setOtp("");
    }
  };

  const handleGuestLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signIn("anonymous");
      navigate(redirect);
    } catch (error) {
      console.error("Guest login error:", error);
      setError(
        `Failed to sign in as guest: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      setIsLoading(false);
    }
  };

  const isSignUp = mode === "signUp";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[oklch(0.99_0.005_100)] via-[oklch(0.96_0.02_100)] to-[oklch(0.90_0.05_155)]">
      {/* Interactive 3D Ayurveda background */}
      <div className="absolute inset-0">
        <AyurvedaScene />
        {/* Soft gradient veils so the card stays readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.97_0.01_100/0.55)_68%,oklch(0.97_0.01_100/0.85)_100%)]" />
        <div className="absolute top-0 left-0 w-[45vw] h-[45vw] min-w-[320px] min-h-[320px] rounded-full bg-leaf-light/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] rounded-full bg-saffron-light/40 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 py-10">
        <Link to="/home" className="flex items-center gap-2.5 mb-5">
          <div className="w-11 h-11 rounded-2xl clay-card-sm flex items-center justify-center bg-primary/10">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Ayur<span className="text-primary">Setu</span>
          </span>
        </Link>

        <p className="text-sm text-muted-foreground mb-7 text-center max-w-sm flex items-center gap-2 justify-center">
          <Sprout className="w-4 h-4 text-primary shrink-0" />
          Ayurveda internships, learning roadmaps & a daily diary — all in one
          place
        </p>

        <Card
          className="clay-card w-full max-w-[420px] border-0 relative z-10"
          style={{
            background:
              "color-mix(in oklab, var(--clay) 80%, transparent)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          {step === "email" ? (
            <>
              <CardHeader className="text-center pt-7">
                {/* Sign in / Sign up switcher */}
                <div className="clay-inset p-1 rounded-2xl grid grid-cols-2 gap-1 mb-5">
                  <button
                    type="button"
                    onClick={() => switchMode("signIn")}
                    className={`rounded-xl h-10 text-sm font-semibold transition-all ${
                      !isSignUp
                        ? "clay-button shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => switchMode("signUp")}
                    className={`rounded-xl h-10 text-sm font-semibold transition-all ${
                      isSignUp
                        ? "clay-button shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <CardTitle className="text-xl flex items-center justify-center gap-2">
                  {isSignUp ? "Create your account" : "Welcome back"}
                  {isSignUp && (
                    <Sparkles className="w-5 h-5 text-saffron" />
                  )}
                </CardTitle>
                <CardDescription>
                  {isSignUp
                    ? "Enter your email and we'll send a code to get you started"
                    : "Enter your email and we'll send a sign-in code"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleEmailSubmit}>
                <CardContent>
                  <div className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="email"
                        placeholder="name@example.com"
                        type="email"
                        className="clay-inset border-0 pl-9 h-11 rounded-xl"
                        disabled={isLoading}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="outline"
                      size="icon"
                      className="clay-inset border-0 h-11 w-11 rounded-xl shrink-0"
                      disabled={isLoading}
                      title={isSignUp ? "Create account" : "Continue"}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-destructive">{error}</p>
                  )}

                  <div className="mt-5">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border/50" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="clay-inset border-0 w-full mt-4 rounded-xl h-11 font-medium"
                      onClick={handleGuestLogin}
                      disabled={isLoading}
                    >
                      <UserX className="mr-2 h-4 w-4" />
                      Continue as Guest
                    </Button>
                  </div>
                </CardContent>
              </form>
              <CardFooter className="justify-center pb-6">
                <p className="text-xs text-muted-foreground text-center">
                  {isSignUp
                    ? "First time here? Your profile setup comes right after."
                    : "New to AyurSetu?"}{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs"
                    onClick={() =>
                      switchMode(isSignUp ? "signIn" : "signUp")
                    }
                  >
                    {isSignUp ? "Sign in instead" : "Create an account"}
                  </Button>
                </p>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader className="text-center">
                <CardTitle>Check your email</CardTitle>
                <CardDescription>
                  We&apos;ve sent a code to{" "}
                  <span className="font-medium text-foreground">
                    {step.email}
                  </span>
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleOtpSubmit}>
                <CardContent className="pb-4">
                  <input type="hidden" name="email" value={step.email} />
                  <input type="hidden" name="code" value={otp} />

                  <div className="flex justify-center">
                    <InputOTP
                      value={otp}
                      onChange={setOtp}
                      maxLength={6}
                      disabled={isLoading}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && otp.length === 6 && !isLoading) {
                          const form = (e.target as HTMLElement).closest(
                            "form",
                          );
                          if (form) {
                            form.requestSubmit();
                          }
                        }
                      }}
                    >
                      <InputOTPGroup>
                        {Array.from({ length: 6 }).map((_, index) => (
                          <InputOTPSlot key={index} index={index} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-destructive text-center">
                      {error}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Didn&apos;t receive a code?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto"
                      onClick={() => setStep("email")}
                    >
                      Try again
                    </Button>
                  </p>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button
                    type="submit"
                    className="clay-button w-full rounded-xl h-11 font-semibold"
                    disabled={isLoading || otp.length !== 6}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        {isSignUp ? "Create account & continue" : "Verify & continue"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep("email")}
                    disabled={isLoading}
                    className="w-full rounded-xl"
                  >
                    Use different email
                  </Button>
                </CardFooter>
              </form>
            </>
          )}
        </Card>

        {/* Small feature strip under the card */}
        <div className="mt-7 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5 text-primary" />
            Matched internships
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            Skill roadmap
          </span>
          <span className="flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5 text-leaf" />
            Daily diary & planner
          </span>
        </div>

        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground/80">
          <Link to="/home" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-border">•</span>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <span className="text-border">•</span>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <span className="text-border">•</span>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage(props: AuthProps) {
  return (
    <Suspense>
      <Auth {...props} />
    </Suspense>
  );
}