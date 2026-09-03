import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";
import { ArrowRight, Home, Leaf, Search } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found",
    description:
      "The page you are looking for doesn't exist. Head back to the AyurSetu homepage.",
    path: "/404",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background flex flex-col relative overflow-x-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 left-16 w-72 h-72 bg-leaf-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-16 w-96 h-96 bg-saffron-light/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
            className="clay-card w-24 h-24 mx-auto flex items-center justify-center mb-8"
          >
            <Leaf className="w-10 h-10 text-primary" />
          </motion.div>

          <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight text-primary">
            404
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
            This page has gone to seed
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back to fertile ground.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/">
              <Button className="clay-button rounded-xl px-6 h-11 font-semibold">
                <Home className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                variant="outline"
                className="clay-inset border-0 rounded-xl px-6 h-11 font-medium"
              >
                Find Internships
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 mt-7 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Search className="w-4 h-4" />
            Can&apos;t find what you need? Contact us
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
