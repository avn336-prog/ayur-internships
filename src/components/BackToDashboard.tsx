import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft, Leaf } from "lucide-react";

interface BackToDashboardProps {
  /** Optional custom label instead of "Back to Dashboard" */
  label?: string;
  /** Optional custom destination (defaults to /dashboard) */
  to?: string;
}

export default function BackToDashboard({
  label = "Back to Dashboard",
  to = "/dashboard",
}: BackToDashboardProps) {
  return (
    <Link to={to} className="inline-block mb-5">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -3 }}
        transition={{ duration: 0.3 }}
        className="group inline-flex items-center gap-2.5 clay-card-sm px-4 py-2.5 hover:shadow-lg transition-all duration-300"
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/10"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 text-primary group-hover:-translate-x-0.5 transition-transform" />
          </div>
        </div>
        <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
          {label}
        </span>
        <Leaf className="w-3 h-3 text-primary/40 group-hover:text-primary/70 group-hover:rotate-12 transition-all" />
      </motion.div>
    </Link>
  );
}
