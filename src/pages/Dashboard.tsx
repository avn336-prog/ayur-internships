import { useEffect, useMemo } from "react";
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
import { useAuth } from "@/hooks/use-auth";
import { usePageMeta } from "@/hooks/use-page-meta";
import { currentStreak, todayStr } from "@/lib/progress";
import { useQuery, useMutation } from "convex/react";
import { useNavigate, Link } from "react-router";
import {
  Leaf,
  LogOut,
  Search,
  User,
  Briefcase,
  CheckCircle2,
  Clock,
  ArrowRight,
  MapPin,
  IndianRupee,
  Building2,
  TrendingUp,
  Sparkles,
  Map,
  NotebookPen,
  ClipboardList,
  Flame,
} from "lucide-react";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  usePageMeta({
    title: "Dashboard",
    description:
      "Your AyurSetu dashboard — matched internships, application stats and profile summary.",
    path: "/dashboard",
  });
  const profile = useQuery(api.profiles.getMyProfile);
  const applications = useQuery(
    api.applications.getMyApplications,
    profile ? {} : "skip",
  );
  const matchedInternships = useQuery(
    api.internships.getMatches,
    profile ? { profileId: profile._id } : "skip",
  );
  const seedInternships = useMutation(api.internships.seed);
  const seedMoreInternships = useMutation(api.seedMore.seedMore);
  const diaryEntries = useQuery(api.diary.list, {});
  const tasksToday = useQuery(api.dailyTasks.listByDate, {
    date: todayStr(),
  });

  // Seed the base list, then append the extended 50-internship catalogue
  useEffect(() => {
    void (async () => {
      await seedInternships();
      await seedMoreInternships();
    })();
  }, [seedInternships, seedMoreInternships]);

  // Redirect to profile setup if no profile
  useEffect(() => {
    if (profile === null && user) {
      navigate("/profile");
    }
  }, [profile, user, navigate]);

  const topMatches = useMemo(
    () => (matchedInternships ?? []).slice(0, 5),
    [matchedInternships],
  );

  const diaryStreak = diaryEntries
    ? currentStreak(diaryEntries.map((e) => e.date))
    : null;
  const todayTasks = tasksToday ?? [];
  const doneToday = todayTasks.filter((t) => t.completed).length;

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (profile === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!profile) return null;

  const totalApplied = applications?.length ?? 0;
  const acceptedCount =
    applications?.filter((a) => a.status === "accepted").length ?? 0;
  const avgMatchScore =
    topMatches.length > 0
      ? Math.round(
          topMatches.reduce((sum, m) => sum + m.matchScore, 0) /
            topMatches.length,
        )
      : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
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
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {user?.name || user?.email}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold tracking-tight">
            Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}
            👋
          </h1>
          <p className="mt-2 text-muted-foreground">
            Here&apos;s your AyurSetu internship dashboard
          </p>
        </motion.div>

        {/* Growth toolkit — roadmap, diary & planner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <Link
            to="/roadmap"
            className="clay-card p-5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                <Map className="w-5 h-5 text-saffron" />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="font-bold text-base">Learning Roadmap</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Skill-gap analysis with a curated 12-week plan built from your
              profile and top internship matches.
            </p>
          </Link>

          <Link
            to="/diary"
            className="clay-card p-5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                <NotebookPen className="w-5 h-5 text-primary" />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="font-bold text-base">Internship Diary</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {diaryEntries === undefined ? (
                <span className="inline-flex items-center gap-1">
                  <Flame className="w-3 h-3 text-terracotta" />
                  <span className="inline-block w-16 h-3 bg-muted rounded animate-pulse" />
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-terracotta" />
                  <span className="font-semibold text-foreground">
                    {diaryStreak}-day streak
                  </span>
                  · {diaryEntries.length} entr
                  {diaryEntries.length === 1 ? "y" : "ies"}
                </span>
              )}{" "}
              Journal your daily learnings and keep the momentum.
            </p>
          </Link>

          <Link
            to="/planner"
            className="clay-card p-5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl clay-inset flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-sky" />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="font-bold text-base">Daily Planner</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {tasksToday === undefined ? (
                <span className="inline-block w-20 h-3 bg-muted rounded animate-pulse" />
              ) : todayTasks.length > 0 ? (
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span className="font-semibold text-foreground">
                    {doneToday}/{todayTasks.length}
                  </span>
                  done today
                </span>
              ) : null}{" "}
              Curated to-dos generated from your roadmap — plan each day.
            </p>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              icon: TrendingUp,
              label: "Avg Match Score",
              value: `${avgMatchScore}%`,
              color: "text-primary",
            },
            {
              icon: Briefcase,
              label: "Total Matches",
              value: matchedInternships?.length ?? 0,
              color: "text-saffron",
            },
            {
              icon: CheckCircle2,
              label: "Applied",
              value: totalApplied,
              color: "text-sky",
            },
            {
              icon: Sparkles,
              label: "Accepted",
              value: acceptedCount,
              color: "text-terracotta",
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
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="clay-card border-0 h-fit">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-2">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{profile.fullName}</CardTitle>
                <CardDescription>{profile.university}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="clay-inset rounded-xl p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Degree</span>
                    <span className="font-medium">{profile.degree}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">{profile.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{profile.location}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Skills
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {profile.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-lg text-xs"
                      >
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
                    className="clay-inset border-0 rounded-xl w-full mt-2"
                  >
                    Edit Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Matches */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="clay-card border-0">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Top Matches</CardTitle>
                    <CardDescription>
                      Internships best suited for your skills
                    </CardDescription>
                  </div>
                  <Link to="/internships">
                    <Button
                      variant="outline"
                      className="clay-inset border-0 rounded-xl text-sm"
                    >
                      View All
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topMatches.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
                      <p className="text-sm">
                        Complete your profile to see matched internships.
                      </p>
                    </div>
                  )}
                  {topMatches.map((match, i) => (
                    <motion.div
                      key={match._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="clay-card-sm p-5 hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <h3 className="font-bold text-base truncate">
                              {match.title}
                            </h3>
                            {match.matchScore >= 70 && (
                              <Badge className="clay-pill bg-primary/10 text-primary border-0 text-xs shrink-0">
                                Top Match
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                            <Building2 className="w-3.5 h-3.5" />
                            {match.organization}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {match.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {match.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <IndianRupee className="w-3.5 h-3.5" />
                              {match.stipend}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {match.requiredSkills.slice(0, 4).map((skill: string) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="rounded-lg text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="clay-inset px-4 py-2.5 text-center shrink-0">
                          <div className="text-2xl font-extrabold text-primary">
                            {match.matchScore}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Match
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Applications */}
            {applications && applications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="clay-card border-0">
                  <CardHeader>
                    <CardTitle>Your Applications</CardTitle>
                    <CardDescription>
                      Track your internship applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {applications.map((app) => (
                      <div
                        key={app._id}
                        className="clay-card-sm p-4 flex items-center justify-between"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">
                            {app.internship?.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {app.internship?.organization}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-3">
                          <span className="text-sm font-bold text-primary">
                            {app.matchScore}%
                          </span>
                          <Badge
                            className={`rounded-xl text-xs ${
                              app.status === "accepted"
                                ? "bg-primary/10 text-primary"
                                : app.status === "rejected"
                                  ? "bg-destructive/10 text-destructive"
                                  : app.status === "withdrawn"
                                    ? "bg-muted text-muted-foreground"
                                    : "bg-saffron-light text-foreground"
                            }`}
                          >
                            {app.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
