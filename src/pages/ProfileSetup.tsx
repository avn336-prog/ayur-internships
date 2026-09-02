import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { useMutation, useQuery } from "convex/react";
import { useNavigate } from "react-router";
import {
  Loader2,
  ArrowRight,
  User,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const degrees = [
  "BAMS",
  "MD Ayurveda",
  "MS Ayurveda",
  "PhD Ayurveda",
  "M.Sc Botany",
  "M.Sc Chemistry",
  "M.Sc Pharmacology",
  "M.Sc Yoga",
  "B.Sc Nursing",
  "Diploma in Ayurveda",
  "Other",
];

const years = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Final Year",
  "Intern",
  "Postgraduate",
  "PhD Scholar",
  "Graduated",
];

export default function ProfileSetup() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const existingProfile = useQuery(api.profiles.getMyProfile);
  const upsertProfile = useMutation(api.profiles.upsertProfile);
  const seedInternships = useMutation(api.internships.seed);
  const skillsData = useQuery(api.skills.listAll);

  const [fullName, setFullName] = useState(user?.name || "");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  // Pre-fill from existing profile
  useEffect(() => {
    if (existingProfile) {
      setFullName(existingProfile.fullName);
      setUniversity(existingProfile.university);
      setDegree(existingProfile.degree);
      setYear(existingProfile.year);
      setLocation(existingProfile.location);
      setExperience(existingProfile.experience);
      setBio(existingProfile.bio || "");
      setSelectedSkills(existingProfile.skills);
      setSelectedInterests(existingProfile.interests);
    }
  }, [existingProfile]);

  // Seed data on first load
  useEffect(() => {
    seedInternships();
  }, [seedInternships]);

  // Redirect if profile is complete
  useEffect(() => {
    if (existingProfile?.completedProfile) {
      navigate("/dashboard");
    }
  }, [existingProfile, navigate]);

  const skillCategories = skillsData
    ? [...new Set(skillsData.map((s) => s.category))]
    : [];

  const getSkillsByCategory = (category: string) =>
    skillsData?.filter((s) => s.category === category) || [];

  const toggleSkill = (skill: string, type: "skill" | "interest") => {
    if (type === "skill") {
      setSelectedSkills((prev) =>
        prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
      );
    } else {
      setSelectedInterests((prev) =>
        prev.includes(skill)
          ? prev.filter((s) => s !== skill)
          : [...prev, skill],
      );
    }
  };

  const canProceed = (s: number) => {
    if (s === 1) return fullName && university && degree && year;
    if (s === 2) return selectedSkills.length > 0;
    return true;
  };

  const handleSubmit = async () => {
    if (!fullName || !university || !degree || !year || !location) return;
    setIsSubmitting(true);
    try {
      await upsertProfile({
        fullName,
        university,
        degree,
        year,
        location,
        experience,
        bio,
        skills: selectedSkills,
        interests: selectedInterests,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Profile save error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-light/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 py-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Set Up Your Profile
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Help us find the best Ayurveda internships for you by sharing your
            skills and interests.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step === s
                    ? "clay-card bg-primary text-primary-foreground"
                    : step > s
                      ? "clay-inset bg-primary/10 text-primary"
                      : "clay-inset text-muted-foreground"
                }`}
              >
                {step > s ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    step > s ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="clay-card border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-3">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Personal & Academic Details</CardTitle>
                <CardDescription>
                  Tell us about your education and background
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Full Name</Label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Dr. Arjun Sharma"
                    className="clay-inset border-0 rounded-xl h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold">
                    University / College
                  </Label>
                  <Input
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="Gujarat Ayurveda University"
                    className="clay-inset border-0 rounded-xl h-11"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Degree</Label>
                    <select
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      className="clay-inset border-0 rounded-xl h-11 w-full px-3 text-sm bg-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select degree</option>
                      {degrees.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Year</Label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="clay-inset border-0 rounded-xl h-11 w-full px-3 text-sm bg-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold">
                    Preferred Location
                  </Label>
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="New Delhi, Kerala, Bengaluru..."
                    className="clay-inset border-0 rounded-xl h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold">
                    Brief Experience
                  </Label>
                  <Textarea
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Describe any relevant experience, clinical rotations, research work..."
                    className="clay-inset border-0 rounded-xl min-h-[80px] resize-none"
                  />
                </div>

                <Button
                  className="clay-button w-full rounded-xl h-12 font-semibold"
                  onClick={() => canProceed(1) && setStep(2)}
                  disabled={!canProceed(1)}
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 2: Skills */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="clay-card border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Your Skills</CardTitle>
                <CardDescription>
                  Select the skills you have (at least one)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {getSkillsByCategory(category).map((skill) => {
                        const isSelected = selectedSkills.includes(skill.name);
                        return (
                          <button
                            key={skill._id}
                            type="button"
                            onClick={() => toggleSkill(skill.name, "skill")}
                            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                              isSelected
                                ? "clay-card bg-primary text-primary-foreground"
                                : "clay-inset text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {skill.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {selectedSkills.length > 0 && (
                  <p className="text-sm text-primary font-medium">
                    {selectedSkills.length} skill
                    {selectedSkills.length !== 1 ? "s" : ""} selected
                  </p>
                )}

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="clay-inset border-0 rounded-xl h-12 font-medium"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="clay-button flex-1 rounded-xl h-12 font-semibold"
                    onClick={() => canProceed(2) && setStep(3)}
                    disabled={!canProceed(2)}
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Step 3: Interests & Review */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="clay-card border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl clay-inset flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Interests & Review</CardTitle>
                <CardDescription>
                  Select your career interests and review your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-sm font-semibold">
                    Career Interests (optional)
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Clinical Research",
                      "Drug Development",
                      "Herbal Product Manufacturing",
                      "Panchakarma Practice",
                      "Yoga & Wellness",
                      "AI in Ayurveda",
                      "Public Health",
                      "Academic Research",
                      "Wellness Tourism",
                      "Government Policy",
                      "Pharmacovigilance",
                      "Medical Writing",
                    ].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleSkill(interest, "interest")}
                        className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedInterests.includes(interest)
                            ? "clay-card bg-saffron text-foreground"
                            : "clay-inset text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold">
                    Short Bio (optional)
                  </Label>
                  <Textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell organizations a bit about yourself..."
                    className="clay-inset border-0 rounded-xl min-h-[80px] resize-none"
                  />
                </div>

                {/* Review Summary */}
                <div className="clay-inset rounded-2xl p-5 space-y-3">
                  <h4 className="font-bold text-sm">Profile Summary</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name:</span>{" "}
                      <span className="font-medium">{fullName || "—"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Degree:</span>{" "}
                      <span className="font-medium">
                        {degree || "—"} {year && `(${year})`}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">University:</span>{" "}
                      <span className="font-medium">{university || "—"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Location:</span>{" "}
                      <span className="font-medium">{location || "—"}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Skills:{" "}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedSkills.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="rounded-lg text-xs"
                        >
                          {s}
                        </Badge>
                      ))}
                      {selectedSkills.length === 0 && (
                        <span className="text-sm text-destructive">
                          None selected
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="clay-inset border-0 rounded-xl h-12 font-medium"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="clay-button flex-1 rounded-xl h-12 font-semibold"
                    onClick={handleSubmit}
                    disabled={isSubmitting || selectedSkills.length === 0}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 w-4 h-4" />
                        Complete Profile
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
