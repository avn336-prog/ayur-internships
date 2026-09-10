import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { useAuth } from "@/hooks/use-auth";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  Leaf,
  Search,
  GraduationCap,
  Building2,
  ArrowRight,
  Heart,
  Sparkles,
  Users,
  MapPin,
  TrendingUp,
  Bot,
  BookOpen,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

/* ── Animated counter hook ─────────────────────────────────────────────────── */

function useCountUp(end: number, duration = 2000, enabled = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, enabled]);
  return value;
}

/* ── Floating botanical particles ──────────────────────────────────────────── */

function FloatingBotanicals() {
  const leaves = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    delay: i * 0.8,
    duration: 12 + (i % 5) * 3,
    size: 12 + (i % 4) * 6,
    opacity: 0.15 + (i % 3) * 0.08,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-primary/20 animate-float-leaf"
          style={{
            left: leaf.left,
            top: "-20px",
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
          }}
        >
          🌿
        </div>
      ))}
      {/* Pulsing rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] rounded-full border border-primary/5 animate-pulse-ring" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[700px] h-[700px] rounded-full border border-saffron/5 animate-pulse-ring-delayed" />
      </div>
    </div>
  );
}

/* ── Feature card glow effect ──────────────────────────────────────────────── */

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const colors = [
    "from-leaf/10 to-leaf-light/5",
    "from-saffron/10 to-saffron-light/5",
    "from-terracotta/10 to-terracotta/5",
    "from-sky/10 to-sky-light/5",
    "from-primary/10 to-leaf-light/5",
    "from-saffron/10 to-terracotta/5",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="clay-card p-7 group relative overflow-hidden cursor-default"
    >
      {/* Glow backdrop on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-2xl transition-all duration-700 group-hover:scale-150" />

      <div className="relative">
        <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <feature.icon className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Animated stat block ───────────────────────────────────────────────────── */

function StatBlock({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10);
  const count = useCountUp(numericValue, 1800, isInView);
  const suffix = stat.value.replace(/[0-9,]/g, "");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5, type: "spring" }}
      className="text-center relative group"
    >
      <div className="absolute inset-0 bg-primary/5 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500" />
      <div className="relative py-4">
        <div className="text-3xl sm:text-4xl font-extrabold text-primary tabular-nums">
          {stat.value.includes(",") ? count.toLocaleString() : count}
          {suffix}
        </div>
        <div className="text-sm text-muted-foreground mt-1 font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Floating internship card ──────────────────────────────────────────────── */

function FloatingCard({
  card,
  index,
}: {
  card: { icon: string; title: string; org: string; match: number; color: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        delay: 0.7 + index * 0.18,
        duration: 0.7,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="clay-card p-5 relative overflow-hidden group cursor-default"
      style={{ perspective: "800px" }}
    >
      {/* Gradient shimmer accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
      <div className="absolute top-0 right-0 w-24 h-24 bg-leaf-light/20 rounded-bl-full group-hover:w-32 group-hover:h-32 transition-all duration-500" />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {card.icon}
          </div>
          <div className="clay-inset px-3 py-1.5 text-xs font-bold text-primary group-hover:shadow-md transition-shadow">
            {card.match}% Match
          </div>
        </div>
        <h3 className="font-bold text-base">{card.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{card.org}</p>

        {/* Animated progress bar */}
        <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${card.match}%` }}
            transition={{ delay: 1 + index * 0.2, duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary via-saffron to-primary rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Step card with animated connector ─────────────────────────────────────── */

function StepCard({
  item,
  index,
}: {
  item: { step: string; title: string; desc: string; icon: typeof Search };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      className="text-center relative"
    >
      {/* Step badge with pulse */}
      <div className="relative mx-auto mb-6 w-fit">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          className="absolute inset-0 rounded-3xl bg-primary/10"
        />
        <div className="relative w-16 h-16 rounded-3xl clay-card flex items-center justify-center">
          <item.icon className="w-7 h-7 text-primary" />
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
        {item.desc}
      </p>

      {/* Connector line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
            className="h-full bg-gradient-to-r from-primary/30 via-saffron/30 to-transparent origin-left"
          />
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.8 }}
            className="absolute top-0 left-0 w-4 h-[2px] bg-primary rounded-full"
          />
        </div>
      )}
    </motion.div>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: Search,
    title: "Smart Skill Matching",
    description:
      "Our algorithm matches your unique Ayurvedic skills with the perfect internship opportunities across India.",
  },
  {
    icon: GraduationCap,
    title: "Curated for Ayurveda",
    description:
      "Every internship is hand-picked for BAMS, MD, M.Sc, and related Ayurveda & AYUSH students.",
  },
  {
    icon: Building2,
    title: "Top Organizations",
    description:
      "From CCRAS and Ministry of AYUSH to Himalaya, Dabur, and leading research institutes.",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistant",
    description:
      "Vaidya, your AI guide, helps you apply, plan your day, write diary entries, and navigate your journey.",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description:
      "Opportunities across Delhi, Kerala, Bengaluru, Hyderabad, and beyond — including remote options.",
  },
  {
    icon: BookOpen,
    title: "Learning Roadmap",
    description:
      "Personalized skill-gap analysis with a 12-week curated learning plan built from your profile.",
  },
];

const stats = [
  { value: "110+", label: "Active Internships" },
  { value: "50+", label: "Partner Organizations" },
  { value: "5000+", label: "Students Registered" },
  { value: "92%", label: "Match Success Rate" },
];

const heroCards = [
  {
    icon: "🌿",
    title: "Panchakarma",
    org: "Kottakkal Arya Vaidya Sala",
    match: 94,
    color: "from-leaf via-leaf-light to-leaf",
  },
  {
    icon: "🔬",
    title: "Drug Discovery",
    org: "CSIR-NBRI Lucknow",
    match: 87,
    color: "from-saffron via-saffron-light to-saffron",
  },
  {
    icon: "🤖",
    title: "AI + Ayurveda",
    org: "IIT Hyderabad",
    match: 82,
    color: "from-sky via-sky-light to-sky",
  },
];

const steps = [
  {
    step: "01",
    title: "Build Your Profile",
    desc: "Add your Ayurveda degree, clinical skills, research interests, and career goals.",
    icon: Heart,
  },
  {
    step: "02",
    title: "Discover Matches",
    desc: "Our smart algorithm scores and ranks internships based on your skill profile.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Apply & Connect",
    desc: "Apply directly to matched internships and connect with organizations.",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "BAMS, JSS Ayurveda College",
    text: "AyurSetu helped me find a clinical research internship at CCRAS that perfectly aligned with my interest in pharmacology. The skill matching was spot-on!",
    color: "bg-leaf/10",
  },
  {
    name: "Arjun Nair",
    role: "MD Ayurveda, Gujarat Ayurveda University",
    text: "I was looking for an AI + Ayurveda intersection. AyurSetu matched me with the IIT Hyderabad project — a dream opportunity I never knew existed.",
    color: "bg-saffron/10",
  },
  {
    name: "Kavya Reddy",
    role: "M.Sc Botany, University of Hyderabad",
    text: "As a non-clinical Ayurveda student, I struggled to find relevant internships. This platform understands the diverse AYUSH ecosystem perfectly.",
    color: "bg-sky/10",
  },
];

/* ── Main Landing Page ─────────────────────────────────────────────────────── */

export default function Landing() {
  const { isAuthenticated } = useAuth();
  usePageMeta({
    title: "AyurSetu",
    description:
      "AyurSetu connects Ayurveda, Yoga and AYUSH students with curated internships at India's top research labs, clinical centers and wellness organizations.",
    path: "/home",
  });

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-9 h-9 rounded-2xl clay-card-sm flex items-center justify-center bg-primary/10"
              >
                <Leaf className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-xl font-bold tracking-tight">
                Ayur<span className="text-primary">Setu</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/auth">
                <Button variant="ghost" className="rounded-xl text-sm font-medium">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="clay-button rounded-xl text-sm font-medium px-5">
                  Get Started
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <FloatingBotanicals />

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-leaf-light/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-saffron-light/20 rounded-full blur-3xl animate-blob-delayed" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-light/20 rounded-full blur-3xl animate-blob" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 clay-pill bg-leaf-light/50 text-primary px-4 py-2 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Ministry of AYUSH Initiative
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Bridging Ayurveda
              <br />
              <span className="text-primary">Talent with</span>{" "}
              <span className="bg-gradient-to-r from-primary via-saffron to-terracotta bg-clip-text text-transparent animate-gradient-x">
                Opportunity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              AyurSetu connects Ayurveda, Yoga, and AYUSH students with
              curated internships at India&apos;s top research labs, clinical
              centers, and wellness organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/auth">
                <Button
                  size="lg"
                  className="clay-button text-base px-8 py-6 rounded-2xl font-semibold group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6 rounded-2xl font-semibold border-2"
                >
                  Explore Features
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Hero Visual - Floating Cards */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {heroCards.map((card, i) => (
                <FloatingCard key={card.title} card={card} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="clay-card p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-saffron/3" />
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <StatBlock key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 clay-pill bg-saffron-light/50 text-foreground px-4 py-2 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-saffron" />
              Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why AyurSetu?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for the AYUSH ecosystem, connecting traditional
              knowledge holders with modern opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 clay-pill bg-primary/10 text-primary px-4 py-2 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to your dream Ayurveda internship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((item, i) => (
              <StepCard key={item.step} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 clay-pill bg-terracotta/10 text-foreground px-4 py-2 text-sm font-medium mb-6">
              <Users className="w-4 h-4 text-terracotta" />
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Student Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from students who found their perfect match.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="clay-card p-7 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${t.color} group-hover:h-1.5 transition-all`} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="clay-card p-10 sm:p-14 text-center relative overflow-hidden group"
          >
            {/* Animated glow orbs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-leaf-light/20 rounded-br-full group-hover:w-56 group-hover:h-56 transition-all duration-700" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-saffron-light/15 rounded-tl-full group-hover:w-64 group-hover:h-64 transition-all duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 mb-6"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Find Your
                <br />
                <span className="text-primary">Perfect Internship?</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto">
                Join thousands of Ayurveda students already building their
                careers through AyurSetu.
              </p>
              <Link to="/auth" className="inline-block mt-8">
                <Button
                  size="lg"
                  className="clay-button text-base px-10 py-6 rounded-2xl font-semibold group/btn"
                >
                  Create Your Profile
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />

      {/* Sticky mobile CTA */}
      {!isAuthenticated && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4">
          <div className="clay-card p-3 flex items-center justify-between gap-3 shadow-xl">
            <p className="text-sm font-semibold leading-snug">
              Find your <span className="text-primary">Ayurveda internship</span>
            </p>
            <Link to="/auth" aria-label="Get started with AyurSetu">
              <Button size="sm" className="clay-button rounded-xl shrink-0 h-10 px-4">
                Get Started
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  );
}
