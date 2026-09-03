import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useQuery } from "convex/react";
import { Navigate, Link } from "react-router";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  BookOpen,
  Lightbulb,
  ExternalLink,
  Loader2,
  Map,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const typeColors: Record<string, string> = {
  course: "bg-sky-light text-sky",
  book: "bg-saffron-light text-saffron",
  document: "bg-primary/10 text-primary",
  tool: "bg-purple-100 text-purple-700",
};

export default function Roadmap() {
  usePageMeta({
    title: "Learning Roadmap",
    description:
      "Your personalized Ayurveda learning roadmap — discover skill gaps and get curated resources to land your dream internship.",
    path: "/roadmap",
  });

  const roadmap = useQuery(api.roadmap.generate);

  if (roadmap === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (roadmap === null) {
    return <Navigate to="/profile" replace />;
  }

  const { profile, topInternships, skillGaps, phases, summary } = roadmap;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Your Learning Roadmap
          </h1>
          <p className="mt-2 text-muted-foreground">
            Personalized skill gap analysis and curated learning plan based on
            your profile and top matched internships.
          </p>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              icon: Target,
              label: "Open Internships",
              value: summary.totalOpen,
              color: "text-primary",
            },
            {
              icon: TrendingUp,
              label: "Matched",
              value: summary.matchedCount,
              color: "text-saffron",
            },
            {
              icon: AlertCircle,
              label: "Skill Gaps",
              value: summary.gapCount,
              color: "text-terracotta",
            },
            {
              icon: Sparkles,
              label: "Avg Score",
              value: `${summary.averageScore}%`,
              color: "text-sky",
            },
          ].map((stat) => (
            <div key={stat.label} className="clay-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Phases — Main Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="clay-card border-0">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                      <Map className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Your 12-Week Plan</CardTitle>
                      <CardDescription>
                        Structured learning phases to close your skill gaps
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {phases.map((phase, i) => (
                    <motion.div
                      key={phase.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm ${
                              i === 0
                                ? "clay-card bg-primary text-primary-foreground"
                                : i === 1
                                  ? "clay-card bg-saffron text-foreground"
                                  : "clay-card bg-sky-light text-sky"
                            }`}
                          >
                            {i + 1}
                          </div>
                          {i < phases.length - 1 && (
                            <div className="w-0.5 h-full min-h-[40px] bg-border mt-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <h3 className="font-bold text-base">
                            {phase.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {phase.description}
                          </p>
                          {phase.skills.length > 0 ? (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {phase.skills.map((skill) => {
                                const gapInfo = skillGaps.find(
                                  (g) => g.skill === skill,
                                );
                                return (
                                  <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="rounded-lg text-xs"
                                  >
                                    {gapInfo?.type === "required" && (
                                      <AlertCircle className="w-3 h-3 mr-1 text-terracotta" />
                                    )}
                                    {skill}
                                  </Badge>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-xs text-muted-foreground/60 mt-2 italic">
                              No critical gaps — focus on strengthening existing
                              skills
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Matched Internships */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="clay-card border-0">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Top Matched Internships</CardTitle>
                      <CardDescription>
                        Internships ranked by skill alignment with your profile
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topInternships.map((internship, i) => (
                    <div
                      key={`${internship.title}-${i}`}
                      className="clay-card-sm p-4 flex items-center justify-between"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {internship.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {internship.organization}
                        </p>
                      </div>
                      <div className="clay-inset px-3 py-1.5 text-center shrink-0 ml-3">
                        <div className="text-lg font-extrabold text-primary">
                          {internship.matchScore}%
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skill Gaps Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="clay-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-saffron" />
                    Skill Gaps
                  </CardTitle>
                  <CardDescription>
                    Skills you need to develop, ranked by importance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillGaps.length === 0 ? (
                    <div className="text-center py-6">
                      <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-primary/40" />
                      <p className="text-sm text-muted-foreground">
                        No major skill gaps — you&apos;re well-positioned!
                      </p>
                    </div>
                  ) : (
                    skillGaps.map((gap, i) => (
                      <motion.div
                        key={gap.skill}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="clay-card-sm p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-sm">{gap.skill}</h4>
                          <Badge
                            variant="outline"
                            className={`rounded-lg text-xs ${
                              gap.type === "required"
                                ? "border-terracotta/50 text-terracotta"
                                : "border-sky/50 text-sky"
                            }`}
                          >
                            {gap.type}
                          </Badge>
                        </div>

                        {gap.resources.length > 0 && (
                          <div className="space-y-1.5 mt-2">
                            {gap.resources.map((res) => (
                              <div
                                key={res.title}
                                className="flex items-center gap-2 text-xs"
                              >
                                <Badge
                                  className={`rounded-md text-[10px] px-1.5 py-0 ${typeColors[res.type] || "bg-muted text-muted-foreground"}`}
                                >
                                  {res.type}
                                </Badge>
                                <span className="text-muted-foreground truncate">
                                  {res.title}
                                </span>
                                {res.resource && (
                                  <a
                                    href={res.resource}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 shrink-0"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Your Current Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="clay-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Your Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Current Skills
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {profile.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="rounded-lg text-xs bg-primary/10 text-primary"
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {profile.interests.length > 0 && (
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Interests
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {profile.interests.map((interest) => (
                          <Badge
                            key={interest}
                            variant="outline"
                            className="rounded-lg text-xs"
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link to="/profile">
                    <Button
                      variant="outline"
                      className="clay-inset border-0 rounded-xl w-full mt-2 text-sm"
                    >
                      Update Skills
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
