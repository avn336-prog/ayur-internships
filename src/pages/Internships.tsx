import { useState, useMemo } from "react";
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
import { useQuery, useMutation } from "convex/react";
import {
  Search,
  MapPin,
  Clock,
  IndianRupee,
  Building2,
  Filter,
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const typeColors: Record<string, string> = {
  Research: "bg-sky-light text-sky",
  Clinical: "bg-leaf-light text-primary",
  Industry: "bg-saffron-light text-saffron",
  Government: "bg-purple-100 text-purple-700",
};

export default function Internships() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const profile = useQuery(api.profiles.getMyProfile);
  const applications = useQuery(
    api.applications.getMyApplications,
    profile ? {} : "skip",
  );
  const applyToInternship = useMutation(api.applications.apply);

  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [applyingId, setApplyingId] = useState<string | null>(null);

  // If no profile, redirect to profile setup
  if (profile === null) {
    navigate("/profile");
    return null;
  }

  // Use matched internships if profile exists, otherwise list all open
  const matchedInternships = useQuery(
    api.internships.getMatches,
    profile ? { profileId: profile._id } : "skip",
  );

  const internships = matchedInternships ?? [];

  // Applied internship IDs
  const appliedIds = useMemo(
    () => new Set(applications?.map((a: any) => a.internshipId) ?? []),
    [applications],
  );

  // Filter
  const filtered = useMemo(() => {
    return internships.filter((i: any) => {
      const matchesSearch =
        searchQuery === "" ||
        i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.description.toLowerCase().includes(searchQuery.toLowerCase()) ||          i.requiredSkills.some((s: string) =>
            s.toLowerCase().includes(searchQuery.toLowerCase()),
          );

      const matchesType = typeFilter === "All" || i.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [internships, searchQuery, typeFilter]);

  const handleApply = async (internshipId: string) => {
    setApplyingId(internshipId);
    try {
      await applyToInternship({ internshipId: internshipId as any });
      toast.success("Application submitted!", {
        description: "You can track your applications from the dashboard.",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to apply",
      );
    } finally {
      setApplyingId(null);
    }
  };

  const types = ["All", "Research", "Clinical", "Industry", "Government"];

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
            Browse Internships
          </h1>
          <p className="mt-2 text-muted-foreground">
            {filtered.length} internship{filtered.length !== 1 ? "s" : ""}{" "}
            matched to your profile
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="clay-card p-4 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, organization, or skill..."
                className="clay-inset border-0 rounded-xl h-11 w-full pl-9 pr-4 text-sm bg-transparent"
              />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Type:</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  typeFilter === type
                    ? "clay-card bg-primary text-primary-foreground"
                    : "clay-inset text-muted-foreground hover:text-foreground"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Internship Cards */}
        <div className="space-y-5">
          {filtered.length === 0 && (
            <div className="clay-card p-12 text-center">
              <Briefcase className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-muted-foreground">
                No internships found
              </h3>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Try adjusting your search or filters.
              </p>
            </div>
          )}

          {filtered.map((internship: any, i: number) => {
            const isApplied = appliedIds.has(internship._id);
            const isApplying = applyingId === internship._id;

            return (
              <motion.div
                key={internship._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card className="clay-card border-0 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <CardHeader className="flex-1 pb-0">
                      <div className="flex flex-wrap items-start gap-3 mb-2">
                        <Badge
                          className={`rounded-xl text-xs font-medium px-3 py-1 ${
                            typeColors[internship.type] || "bg-muted text-muted-foreground"
                          }`}
                        >
                          {internship.type}
                        </Badge>
                        {internship.matchScore > 0 && (
                          <Badge
                            variant="secondary"
                            className={`rounded-xl text-xs font-bold px-3 py-1 ${
                              internship.matchScore >= 70
                                ? "bg-primary/10 text-primary"
                                : internship.matchScore >= 40
                                  ? "bg-saffron-light text-foreground"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {internship.matchScore}% Match
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {internship.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1.5 mt-1">
                        <Building2 className="w-4 h-4" />
                        {internship.organization}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 pt-4 lg:pt-6 lg:pl-0">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {internship.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-sm">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm">
                          <IndianRupee className="w-4 h-4 text-primary shrink-0" />
                          <span>{internship.stipend}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm">
                          <Briefcase className="w-4 h-4 text-primary shrink-0" />
                          <span>
                            {new Date(internship.deadline).toLocaleDateString(
                              "en-IN",
                              { day: "numeric", month: "short" },
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2 mb-4">
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Required
                          </span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {internship.requiredSkills.map((skill: string) => {
                              const isMatched =
                                profile?.skills
                                  .map((s: string) => s.toLowerCase())
                                  .includes(skill.toLowerCase()) ||
                                profile?.interests
                                  .map((s: string) => s.toLowerCase())
                                  .includes(skill.toLowerCase());
                              return (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className={`rounded-lg text-xs ${
                                    isMatched
                                      ? "border-primary/50 bg-primary/5 text-primary"
                                      : ""
                                  }`}
                                >
                                  {isMatched && (
                                    <CheckCircle2 className="w-3 h-3 mr-1" />
                                  )}
                                  {skill}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                        {internship.preferredSkills.length > 0 && (
                          <div>
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              Preferred
                            </span>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {internship.preferredSkills.map((skill: string) => {
                                const isMatched =
                                  profile?.skills
                                    .map((s: string) => s.toLowerCase())
                                    .includes(skill.toLowerCase()) ||
                                  profile?.interests
                                    .map((s: string) => s.toLowerCase())
                                    .includes(skill.toLowerCase());
                                return (
                                  <Badge
                                    key={skill}
                                    variant="secondary"
                                    className={`rounded-lg text-xs ${
                                      isMatched
                                        ? "bg-primary/10 text-primary"
                                        : ""
                                    }`}
                                  >
                                    {isMatched && (
                                      <CheckCircle2 className="w-3 h-3 mr-1" />
                                    )}
                                    {skill}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Apply Button */}
                      <div className="flex items-center gap-3">
                        {isApplied ? (
                          <Badge className="clay-inset rounded-xl px-4 py-2 bg-primary/10 text-primary border-0">
                            <CheckCircle2 className="w-4 h-4 mr-1.5" />
                            Applied
                          </Badge>
                        ) : (
                          <Button
                            className="clay-button rounded-xl px-6 h-10 font-semibold"
                            onClick={() => handleApply(internship._id)}
                            disabled={isApplying}
                          >
                            {isApplying ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                Applying...
                              </>
                            ) : (
                              <>
                                Apply Now
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        )}
                        <span className="text-xs text-muted-foreground">
                          Contact: {internship.contactEmail}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
