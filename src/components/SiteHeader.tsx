import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

/** Lightweight header for public info pages (contact, legal, thank-you). */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl clay-card-sm flex items-center justify-center bg-primary/10">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Ayur<span className="text-primary">Setu</span>
            </span>
          </Link>
          <Link to="/auth">
            <Button
              size="sm"
              className="clay-button rounded-xl text-sm font-medium"
            >
              Get Started
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
