import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

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
    icon: Heart,
    title: "Complete Profile",
    description:
      "Build your Ayurveda-specific profile highlighting clinical skills, research interests, and career goals.",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description:
      "Opportunities across Delhi, Kerala, Bengaluru, Hyderabad, and beyond — including remote options.",
  },
  {
    icon: Briefcase,
    title: "All Career Paths",
    description:
      "Clinical practice, research, industry R&D, government roles, and wellness tourism — find your path.",
  },
];

const stats = [
  { value: "50+", label: "Partner Organizations" },
  { value: "200+", label: "Active Internships" },
  { value: "5,000+", label: "Students Registered" },
  { value: "92%", label: "Match Success Rate" },
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "BAMS, JSS Ayurveda College",
    text: "AyurSetu helped me find a clinical research internship at CCRAS that perfectly aligned with my interest in pharmacology. The skill matching was spot-on!",
  },
  {
    name: "Arjun Nair",
    role: "MD Ayurveda, Gujarat Ayurveda University",
    text: "I was looking for an AI + Ayurveda intersection. AyurSetu matched me with the IIT Hyderabad project — a dream opportunity I never knew existed.",
  },
  {
    name: "Kavya Reddy",
    role: "M.Sc Botany, University of Hyderabad",
    text: "As a non-clinical Ayurveda student, I struggled to find relevant internships. This platform understands the diverse AYUSH ecosystem perfectly.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl clay-card-sm flex items-center justify-center bg-primary/10">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Ayur<span className="text-primary">Setu</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/auth">
                <Button
                  variant="ghost"
                  className="rounded-xl text-sm font-medium"
                >
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
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-leaf-light/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-saffron-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-light/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 clay-pill bg-leaf-light/50 text-primary px-4 py-2 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Ministry of AYUSH Initiative
              </div>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Bridging Ayurveda
              <br />
              <span className="text-primary">Talent with</span>{" "}
              <span className="bg-gradient-to-r from-primary via-saffron to-terracotta bg-clip-text text-transparent">
                Opportunity
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              AyurSetu connects Ayurveda, Yoga, and AYUSH students with
              curated internships at India&apos;s top research labs, clinical
              centers, and wellness organizations.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/auth">
                <Button
                  size="lg"
                  className="clay-button text-base px-8 py-6 rounded-2xl font-semibold"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
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
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "🌿",
                  title: "Panchakarma",
                  org: "Kottakkal Arya Vaidya Sala",
                  match: 94,
                },
                {
                  icon: "🔬",
                  title: "Drug Discovery",
                  org: "CSIR-NBRI Lucknow",
                  match: 87,
                },
                {
                  icon: "🤖",
                  title: "AI + Ayurveda",
                  org: "IIT Hyderabad",
                  match: 82,
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  className="clay-card p-5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-leaf-light/20 rounded-bl-full" />
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h3 className="font-bold text-base">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {card.org}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="clay-inset px-3 py-1.5 text-xs font-semibold text-primary">
                      {card.match}% Match
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="clay-card p-8 sm:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
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
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="clay-card p-7 group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to your dream Ayurveda internship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Build Your Profile",
                desc: "Add your Ayurveda degree, clinical skills, research interests, and career goals.",
              },
              {
                step: "02",
                title: "Discover Matches",
                desc: "Our smart algorithm scores and ranks internships based on your skill profile.",
              },
              {
                step: "03",
                title: "Apply & Connect",
                desc: "Apply directly to matched internships and connect with organizations.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-3xl clay-card flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-extrabold text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                )}
              </motion.div>
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
                className="clay-card p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
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
            className="clay-card p-10 sm:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-leaf-light/20 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-saffron-light/15 rounded-tl-full" />
            <div className="relative">
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
                  className="clay-button text-base px-10 py-6 rounded-2xl font-semibold"
                >
                  Create Your Profile
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl clay-card-sm flex items-center justify-center bg-primary/10">
              <Leaf className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold">
              Ayur<span className="text-primary">Setu</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            An initiative under the Ministry of AYUSH, Government of India
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
