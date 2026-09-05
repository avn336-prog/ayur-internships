import { getAuthUserId } from "@convex-dev/auth/server";
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// List all open internships
export const listOpen = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("internships")
      .withIndex("by_status", (q) => q.eq("status", "open"))
      .collect();
  },
});

// Get internship by ID
export const get = query({
  args: { internshipId: v.id("internships") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.internshipId);
  },
});

// Get internships matching a student's skills (simple keyword matching).
// Ownership guard: matches may only be computed for the caller's OWN profile,
// so one student can never probe another student's skills or match data.
export const getMatches = query({
  args: { profileId: v.id("profiles") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const profile = await ctx.db.get(args.profileId);
    if (!profile || profile.userId !== userId) return [];

    const openInternships = await ctx.db
      .query("internships")
      .withIndex("by_status", (q) => q.eq("status", "open"))
      .collect();

    // Calculate match scores
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

      const requiredScore = (requiredMatches / totalRequired) * 70;
      const preferredScore = (preferredMatches / totalPreferred) * 30;
      const score = Math.round(requiredScore + preferredScore);

      return { ...internship, matchScore: score };
    });

    // Sort by match score descending
    scored.sort((a, b) => b.matchScore - a.matchScore);
    return scored;
  },
});

// Seed internships data
export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if already seeded
    const existing = await ctx.db.query("internships").first();
    if (existing) return "already_seeded";

    const internships = [
      {
        title: "Clinical Research Intern - Ayurvedic Pharmacology",
        organization: "CCRAS (Central Council for Research in Ayurvedic Sciences)",
        description:
          "Join CCRAS to assist in clinical trials evaluating the efficacy of classical Ayurvedic formulations. You will support data collection, patient recruitment, literature reviews, and help prepare research manuscripts. This is an excellent opportunity to gain hands-on clinical research experience in the Ayurvedic domain.",
        requiredSkills: [
          "Clinical Research",
          "Ayurvedic Medicine",
          "Literature Review",
        ],
        preferredSkills: ["Data Analysis", "Medical Writing", "SPSS", "R"],
        location: "New Delhi",
        duration: "6 months",
        stipend: "₹18,000/month",
        type: "Research",
        status: "open" as const,
        deadline: Date.now() + 90 * 24 * 60 * 60 * 1000,
        contactEmail: "recruitment@ccras.res.in",
        postedAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Herbal Medicine Formulation Intern",
        organization: "Himalaya Wellness",
        description:
          "Work with the R&D team at Himalaya to assist in the development and standardization of herbal medicine formulations. Responsibilities include raw material evaluation, formulation trials, stability testing, and documentation. Learn from industry leaders in Ayurvedic product development.",
        requiredSkills: ["Herbal Medicine", "Pharmacognosy", "Quality Control"],
        preferredSkills: [
          "HPLC",
          "Herbal Extraction",
          "Product Development",
          "GMP",
        ],
        location: "Bengaluru",
        duration: "3 months",
        stipend: "₹15,000/month",
        type: "Industry",
        status: "open" as const,
        deadline: Date.now() + 60 * 24 * 60 * 60 * 1000,
        contactEmail: "careers@himalayawellness.com",
        postedAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Panchakarma Therapy Assistant",
        organization: "Kottakkal Arya Vaidya Sala",
        description:
          "Assist senior practitioners in administering Panchakarma therapies at our clinical facility. You will learn therapeutic procedures including Abhyanga, Shirodhara, Basti, and Vamana under expert supervision. Ideal for BAMS students seeking clinical exposure in classical Ayurvedic treatments.",
        requiredSkills: ["Panchakarma", "Ayurvedic Medicine", "Patient Care"],
        preferredSkills: ["Massage Therapy", "Herbal Preparation", "Yoga"],
        location: "Kottakkal, Kerala",
        duration: "6 months",
        stipend: "₹12,000/month",
        type: "Clinical",
        status: "open" as const,
        deadline: Date.now() + 45 * 24 * 60 * 60 * 1000,
        contactEmail: "academy@aryavaidyasala.com",
        postedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
      },
      {
        title: "AYUSH Ministry - Digital Health Data Intern",
        organization: "Ministry of AYUSH, Government of India",
        description:
          "Support the Ministry of AYUSH in digitizing traditional Ayurvedic knowledge and mapping health data. Work on the National AYUSH Mission's data management systems, help build dashboards for tracking AYUSH infrastructure across states, and contribute to policy research documents.",
        requiredSkills: [
          "Data Entry",
          "MS Excel",
          "Report Writing",
          "Ayurvedic Medicine",
        ],
        preferredSkills: [
          "Python",
          "Data Visualization",
          "Tableau",
          "Power BI",
          "GIS Mapping",
        ],
        location: "New Delhi",
        duration: "3 months",
        stipend: "₹20,000/month",
        type: "Government",
        status: "open" as const,
        deadline: Date.now() + 30 * 24 * 60 * 60 * 1000,
        contactEmail: "ayush-intern@gov.in",
        postedAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Ayurvedic Product Quality Assurance Intern",
        organization: "Dabur India Ltd.",
        description:
          "Join Dabur's Quality Assurance team to learn about GMP compliance, raw material testing, in-process quality checks, and finished product testing for Ayurvedic products. Gain exposure to HPTLC, HPLC, and GC analysis techniques used in Ayurvedic drug testing.",
        requiredSkills: ["Quality Control", "Pharmacognosy", "Analytical Chemistry"],
        preferredSkills: ["HPLC", "HPTLC", "GMP", "Microbiology"],
        location: "Ghaziabad, UP",
        duration: "6 months",
        stipend: "₹16,000/month",
        type: "Industry",
        status: "open" as const,
        deadline: Date.now() + 75 * 24 * 60 * 60 * 1000,
        contactEmail: "internships@dabur.com",
        postedAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Yoga & Naturopathy Research Intern",
        organization: "MDNIY (Morarji Desai National Institute of Yoga)",
        description:
          "Conduct research on the therapeutic applications of Yoga and Naturopathy. Assist in organizing national-level yoga camps, collect health outcome data, and contribute to evidence-based research papers. Perfect for students passionate about integrative medicine.",
        requiredSkills: [
          "Yoga",
          "Naturopathy",
          "Research Methodology",
          "Data Collection",
        ],
        preferredSkills: [
          "SPSS",
          "Academic Writing",
          "Community Health",
          "Statistics",
        ],
        location: "New Delhi",
        duration: "3 months",
        stipend: "₹14,000/month",
        type: "Research",
        status: "open" as const,
        deadline: Date.now() + 55 * 24 * 60 * 60 * 1000,
        contactEmail: "research@mdniy.gov.in",
        postedAt: Date.now() - 8 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Ayurveda AI & NLP Research Intern",
        organization: "IIT Hyderabad - Department of AI",
        description:
          "Collaborate on an interdisciplinary project applying NLP and machine learning to ancient Ayurvedic texts. Help build a knowledge graph from classical Sanskrit manuscripts, develop semantic search for Ayurvedic formulations, and contribute to making traditional knowledge accessible through AI.",
        requiredSkills: ["Python", "Machine Learning", "Data Processing"],
        preferredSkills: [
          "NLP",
          "Sanskrit",
          "Knowledge Graphs",
          "PyTorch",
          "Ayurvedic Medicine",
        ],
        location: "Hyderabad (Hybrid)",
        duration: "6 months",
        stipend: "₹25,000/month",
        type: "Research",
        status: "open" as const,
        deadline: Date.now() + 40 * 24 * 60 * 60 * 1000,
        contactEmail: "ayurveda-ai@iith.ac.in",
        postedAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Wellness Tourism Coordinator Intern",
        organization: "Kairali - The Ayurvedic Village",
        description:
          "Assist in managing wellness tourism operations at our luxury Ayurvedic resort. Learn about guest wellness consultations, treatment scheduling, marketing of Ayurvedic packages, and customer experience management in the growing wellness tourism sector.",
        requiredSkills: [
          "Communication",
          "Event Management",
          "Ayurvedic Medicine",
          "Customer Service",
        ],
        preferredSkills: [
          "Digital Marketing",
          "Social Media",
          "Hotel Management",
          "Content Writing",
        ],
        location: "Palakkad, Kerala",
        duration: "3 months",
        stipend: "₹10,000/month + Accommodation",
        type: "Industry",
        status: "open" as const,
        deadline: Date.now() + 65 * 24 * 60 * 60 * 1000,
        contactEmail: "careers@kairalitheayurvedicvillage.com",
        postedAt: Date.now() - 6 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Ayurvedic Drug Discovery Intern",
        organization: "CSIR-National Botanical Research Institute",
        description:
          "Join ongoing ethnobotanical surveys and phytochemical screening projects. Assist in identifying potential drug leads from traditional Ayurvedic plants using modern analytical techniques. Publish findings in collaboration with senior scientists.",
        requiredSkills: [
          "Botany",
          "Phytochemistry",
          "Herbal Medicine",
          "Laboratory Skills",
        ],
        preferredSkills: [
          "Mass Spectrometry",
          "Cell Biology",
          "Ethnobotany",
          "Statistics",
        ],
        location: "Lucknow",
        duration: "6 months",
        stipend: "₹22,000/month",
        type: "Research",
        status: "open" as const,
        deadline: Date.now() + 50 * 24 * 60 * 60 * 1000,
        contactEmail: "recruitment@nbri.res.in",
        postedAt: Date.now() - 9 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Public Health Outreach Intern - AYUSH",
        organization: "AYUSH Ministry - National Health Mission",
        description:
          "Support community-level AYUSH outreach programs including village health camps, school wellness programs, and AYUSH wellness centers. Help document health outcomes, coordinate with local health workers, and create educational materials for public awareness.",
        requiredSkills: [
          "Community Health",
          "Public Health",
          "Ayurvedic Medicine",
          "Communication",
        ],
        preferredSkills: [
          "Hindi",
          "Data Collection",
          "Report Writing",
          "Social Work",
        ],
        location: "Multiple Locations (Pan India)",
        duration: "3 months",
        stipend: "₹16,000/month",
        type: "Government",
        status: "open" as const,
        deadline: Date.now() + 35 * 24 * 60 * 60 * 1000,
        contactEmail: "outreach@ayush.gov.in",
        postedAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
      },
    ];

    for (const internship of internships) {
      await ctx.db.insert("internships", internship);
    }

    // Seed skills
    const skillsData = [
      // Ayurveda Core
      { name: "Ayurvedic Medicine", category: "Ayurveda" },
      { name: "Panchakarma", category: "Ayurveda" },
      { name: "Herbal Medicine", category: "Ayurveda" },
      { name: "Rasashastra", category: "Ayurveda" },
      { name: "Dravyaguna", category: "Ayurveda" },
      { name: "Kayachikitsa", category: "Ayurveda" },
      { name: "Shalya Tantra", category: "Ayurveda" },
      { name: "Shalakya Tantra", category: "Ayurveda" },
      { name: "Prasuti Tantra", category: "Ayurveda" },
      { name: "Kaumarabhritya", category: "Ayurveda" },
      { name: "Ayurvedic Surgery", category: "Ayurveda" },
      { name: "Yoga", category: "Ayurveda" },
      { name: "Naturopathy", category: "Ayurveda" },
      { name: "Siddha Medicine", category: "Ayurveda" },
      // Research & Science
      { name: "Clinical Research", category: "Research" },
      { name: "Research Methodology", category: "Research" },
      { name: "Pharmacognosy", category: "Research" },
      { name: "Phytochemistry", category: "Research" },
      { name: "Botany", category: "Research" },
      { name: "Analytical Chemistry", category: "Research" },
      { name: "Literature Review", category: "Research" },
      { name: "Medical Writing", category: "Research" },
      { name: "Academic Writing", category: "Research" },
      // Technology
      { name: "Python", category: "Technology" },
      { name: "R", category: "Technology" },
      { name: "Machine Learning", category: "Technology" },
      { name: "NLP", category: "Technology" },
      { name: "Data Analysis", category: "Technology" },
      { name: "Data Visualization", category: "Technology" },
      { name: "Tableau", category: "Technology" },
      { name: "Power BI", category: "Technology" },
      // Lab & Quality
      { name: "HPLC", category: "Quality" },
      { name: "HPTLC", category: "Quality" },
      { name: "Quality Control", category: "Quality" },
      { name: "GMP", category: "Quality" },
      { name: "Laboratory Skills", category: "Quality" },
      { name: "Herbal Extraction", category: "Quality" },
      // Professional
      { name: "Communication", category: "Professional" },
      { name: "Patient Care", category: "Professional" },
      { name: "Event Management", category: "Professional" },
      { name: "Data Entry", category: "Professional" },
      { name: "Report Writing", category: "Professional" },
      { name: "Community Health", category: "Professional" },
      { name: "Public Health", category: "Professional" },
      { name: "Social Work", category: "Professional" },
      { name: "Content Writing", category: "Professional" },
      { name: "Digital Marketing", category: "Professional" },
      { name: "SPSS", category: "Technology" },
      { name: "Statistics", category: "Technology" },
      { name: "MS Excel", category: "Technology" },
      { name: "Customer Service", category: "Professional" },
    ];

    // Remove duplicates by name
    const uniqueSkills = skillsData.filter(
      (skill, index, self) =>
        index === self.findIndex((s) => s.name === skill.name),
    );

    for (const skill of uniqueSkills) {
      await ctx.db.insert("skills", skill);
    }

    return "seeded";
  },
});
