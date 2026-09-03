import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

// Roadmap resource suggestions mapped to skills
const learningResources: Record<string, { title: string; type: string; resource: string }[]> = {
  "Python": [
    { title: "Python for Everybody (Coursera)", type: "course", resource: "https://www.coursera.org/specializations/python" },
    { title: "Automate the Boring Stuff with Python", type: "book", resource: "https://automatetheboringstuff.com" },
  ],
  "Machine Learning": [
    { title: "Andrew Ng's ML Course (Coursera)", type: "course", resource: "https://www.coursera.org/learn/machine-learning" },
    { title: "Hands-On ML with Scikit-Learn", type: "book", resource: "" },
  ],
  "NLP": [
    { title: "NLP Specialization (Coursera)", type: "course", resource: "https://www.coursera.org/specializations/natural-language-processing" },
  ],
  "Data Analysis": [
    { title: "Google Data Analytics Certificate", type: "course", resource: "https://www.coursera.org/professional-certificates/google-data-analytics" },
    { title: "Khan Academy Statistics", type: "course", resource: "https://www.khanacademy.org/math/statistics-probability" },
  ],
  "Data Visualization": [
    { title: "Data Visualization with Tableau (Coursera)", type: "course", resource: "https://www.coursera.org/specializations/data-visualization" },
  ],
  "Statistics": [
    { title: "Statistics with R (Coursera)", type: "course", resource: "https://www.coursera.org/specializations/statistics" },
  ],
  "SPSS": [
    { title: "IBM SPSS Statistics Essential Training", type: "course", resource: "https://www.linkedin.com/learning/ibm-spss-statistics-essential-training" },
  ],
  "HPLC": [
    { title: "HPLC Method Development (Analytical Chemistry)", type: "course", resource: "" },
    { title: "Practical HPLC — textbook", type: "book", resource: "" },
  ],
  "HPTLC": [
    { title: "HPTLC Workshop — IPC Guidelines", type: "course", resource: "" },
  ],
  "GMP": [
    { title: "GMP for Ayurvedic Pharmaceuticals — CDSCO guidelines", type: "document", resource: "" },
  ],
  "Medical Writing": [
    { title: "Medical Writing Certification (AMWA)", type: "course", resource: "https://www.amwa.org/writing-courses" },
    { title: "ICH-GCP Guidelines", type: "document", resource: "" },
  ],
  "Clinical Research": [
    { title: "GCP Certification — NCBI Bookshelf", type: "course", resource: "https://www.ncbi.nlm.nih.gov/books/NBK560755/" },
    { title: "Introduction to Clinical Research (Coursera)", type: "course", resource: "" },
  ],
  "Research Methodology": [
    { title: "Research Methods (Coursera)", type: "course", resource: "https://www.coursera.org/learn/research-methods" },
  ],
  "Literature Review": [
    { title: "Writing Narrative Literature Reviews (APA)", type: "book", resource: "" },
  ],
  "Academic Writing": [
    { title: "Academic Writing Specialization (Coursera)", type: "course", resource: "https://www.coursera.org/specializations/academic-english" },
  ],
  "Digital Marketing": [
    { title: "Google Digital Garage — Fundamentals", type: "course", resource: "https://learndigital.withgoogle.com/digitalgarage" },
  ],
  "Content Writing": [
    { title: "Content Marketing Certification (HubSpot)", type: "course", resource: "https://academy.hubspot.com/courses/content-marketing" },
  ],
  "Communication": [
    { title: "Effective Communication (Coursera)", type: "course", resource: "" },
  ],
  "Patient Care": [
    { title: "Clinical Patient Interaction Workshop", type: "course", resource: "" },
  ],
  "Botany": [
    { title: "Introduction to Plant Biology (MIT OCW)", type: "course", resource: "https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/" },
  ],
  "Pharmacognosy": [
    { title: "Pharmacognosy Textbook (Trease & Evans)", type: "book", resource: "" },
  ],
  "Phytochemistry": [
    { title: "Natural Products Chemistry (NPTEL)", type: "course", resource: "" },
  ],
  "Analytical Chemistry": [
    { title: "Analytical Chemistry (MIT OCW)", type: "course", resource: "https://ocw.mit.edu/courses/5-310-laboratory-chemistry-in-fall-2012/" },
  ],
  "Laboratory Skills": [
    { title: "Basic Lab Skills for Biosciences (Coursera)", type: "course", resource: "" },
  ],
  "R": [
    { title: "R Programming (Coursera — JHU)", type: "course", resource: "https://www.coursera.org/learn/r-programming" },
  ],
  "Tableau": [
    { title: "Tableau for Beginners (Coursera)", type: "course", resource: "https://www.coursera.org/learn/tableau-business-intelligence" },
  ],
  "Power BI": [
    { title: "Microsoft Power BI Data Analyst (Coursera)", type: "course", resource: "https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst" },
  ],
  "Social Work": [
    { title: "Social Work Practice (Coursera)", type: "course", resource: "" },
  ],
  "Community Health": [
    { title: "Global Health (Coursera)", type: "course", resource: "" },
  ],
  "Public Health": [
    { title: "Public Health Specialization (Coursera — JHU)", type: "course", resource: "https://www.coursera.org/specializations/public-health" },
  ],
  "Report Writing": [
    { title: "Business Writing (Coursera — Colorado)", type: "course", resource: "" },
  ],
  "Event Management": [
    { title: "Event Planning & Management (Coursera)", type: "course", resource: "" },
  ],
  "Customer Service": [
    { title: "Customer Service Foundations (LinkedIn Learning)", type: "course", resource: "" },
  ],
  "Data Entry": [
    { title: "Typing Practice — Keybr.com", type: "tool", resource: "https://www.keybr.com" },
  ],
  "MS Excel": [
    { title: "Excel Skills for Business (Coursera — Macquarie)", type: "course", resource: "https://www.coursera.org/specializations/excel" },
  ],
  "Yoga": [
    { title: "Yoga Teacher Training (S-VYASA Online)", type: "course", resource: "" },
  ],
  "Naturopathy": [
    { title: "Naturopathy Basics — AYUSH Course", type: "course", resource: "" },
  ],
  "Herbal Medicine": [
    { title: "Herbal Medicine (Coursera — Taiwan)", type: "course", resource: "" },
  ],
  "Herbal Extraction": [
    { title: "Phytochemical Extraction Techniques Workshop", type: "course", resource: "" },
  ],
  "Quality Control": [
    { title: "Quality Management for Pharma (Coursera)", type: "course", resource: "" },
  ],
};

// Generate a roadmap based on profile skills vs matched internship requirements
export const generate = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) return null;

    const openInternships = await ctx.db
      .query("internships")
      .withIndex("by_status", (q) => q.eq("status", "open"))
      .collect();

    // Calculate match scores and find top internships
    const studentSkills = [
      ...profile.skills.map((s) => s.toLowerCase()),
      ...profile.interests.map((s) => s.toLowerCase()),
    ];

    const scored = openInternships.map((internship) => {
      const requiredMatches = internship.requiredSkills.filter((s) =>
        studentSkills.includes(s.toLowerCase()),
      ).length;
      const preferredMatches = internship.preferredSkills.filter((s) =>
        studentSkills.includes(s.toLowerCase()),
      ).length;
      const totalRequired = internship.requiredSkills.length || 1;
      const totalPreferred = internship.preferredSkills.length || 1;
      const score = Math.round(
        (requiredMatches / totalRequired) * 70 + (preferredMatches / totalPreferred) * 30,
      );
      return { ...internship, matchScore: score };
    });

    scored.sort((a, b) => b.matchScore - a.matchScore);
    const topInternships = scored.slice(0, 10);

    // Collect all required and preferred skills from top internships
    const requiredSkillSet = new Map<string, number>();
    const preferredSkillSet = new Map<string, number>();

    for (const internship of topInternships) {
      for (const skill of internship.requiredSkills) {
        requiredSkillSet.set(skill, (requiredSkillSet.get(skill) || 0) + 1);
      }
      for (const skill of internship.preferredSkills) {
        preferredSkillSet.set(skill, (preferredSkillSet.get(skill) || 0) + 1);
      }
    }

    // Find skill gaps (required by many internships but student doesn't have)
    const gapSkills: Array<{
      skill: string;
      importance: number;
      type: "required" | "preferred";
      resources: Array<{ title: string; type: string; resource: string }>;
    }> = [];

    for (const [skill, count] of requiredSkillSet) {
      if (!studentSkills.includes(skill.toLowerCase())) {
        gapSkills.push({
          skill,
          importance: count,
          type: "required",
          resources: learningResources[skill] || [],
        });
      }
    }

    for (const [skill, count] of preferredSkillSet) {
      if (!studentSkills.includes(skill.toLowerCase()) && !requiredSkillSet.has(skill)) {
        gapSkills.push({
          skill,
          importance: count * 0.5,
          type: "preferred",
          resources: learningResources[skill] || [],
        });
      }
    }

    // Sort by importance
    gapSkills.sort((a, b) => b.importance - a.importance);

    // Generate weekly plan phases
    const phases = [
      {
        name: "Foundation (Weeks 1-4)",
        description: "Build core competencies that most internships require",
        skills: gapSkills
          .filter((g) => g.importance >= 2)
          .slice(0, 5)
          .map((g) => g.skill),
      },
      {
        name: "Specialization (Weeks 5-8)",
        description: "Deepen knowledge in your target area",
        skills: gapSkills
          .filter((g) => g.importance >= 1 && g.importance < 2)
          .slice(0, 4)
          .map((g) => g.skill),
      },
      {
        name: "Advanced (Weeks 9-12)",
        description: "Master preferred skills that set you apart",
        skills: gapSkills
          .filter((g) => g.type === "preferred")
          .slice(0, 3)
          .map((g) => g.skill),
      },
    ];

    return {
      profile: {
        name: profile.fullName,
        degree: profile.degree,
        skills: profile.skills,
        interests: profile.interests,
      },
      topInternships: topInternships.map((i) => ({
        title: i.title,
        organization: i.organization,
        matchScore: i.matchScore,
      })),
      skillGaps: gapSkills,
      phases,
      summary: {
        totalOpen: openInternships.length,
        matchedCount: scored.filter((s) => s.matchScore > 0).length,
        averageScore:
          topInternships.length > 0
            ? Math.round(
                topInternships.reduce((s, i) => s + i.matchScore, 0) /
                  topInternships.length,
              )
            : 0,
        gapCount: gapSkills.length,
        topGap: gapSkills[0]?.skill || "None",
      },
    };
  },
});
