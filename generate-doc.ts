import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  PageBreak,
  TableOfContents,
  Tab,
  TabStopType,
  TabStopPosition,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  convertInchesToTwip,
  LevelFormat,
  ImageRun,
  HorizontalPositionAlign,
  VerticalPositionAlign,
  PageOrientation,
} from "docx";
import { writeFileSync } from "fs";

// ──────────────────────────────────────────────
// Helper functions for document generation
// ──────────────────────────────────────────────

function title(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: 56,
        font: "Calibri",
        color: "1B5E20",
      }),
    ],
    heading: HeadingLevel.TITLE,
    spacing: { after: 400 },
    alignment: AlignmentType.CENTER,
  });
}

function subtitle(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        size: 28,
        font: "Calibri",
        color: "4E342E",
        italics: true,
      }),
    ],
    spacing: { after: 200 },
    alignment: AlignmentType.CENTER,
  });
}

function heading1(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: 36,
        font: "Calibri",
        color: "1B5E20",
      }),
    ],
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "4CAF50" },
    },
  });
}

function heading2(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: 30,
        font: "Calibri",
        color: "2E7D32",
      }),
    ],
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
  });
}

function heading3(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: 26,
        font: "Calibri",
        color: "388E3C",
      }),
    ],
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
  });
}

function para(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        size: 22,
        font: "Calibri",
      }),
    ],
    spacing: { after: 120, line: 312 },
    alignment: AlignmentType.JUSTIFIED,
  });
}

function boldPara(label: string, text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({ text: label, bold: true, size: 22, font: "Calibri" }),
      new TextRun({ text, size: 22, font: "Calibri" }),
    ],
    spacing: { after: 120, line: 312 },
    alignment: AlignmentType.JUSTIFIED,
  });
}

function bullet(text: string, level: number = 0): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({ text, size: 22, font: "Calibri" }),
    ],
    bullet: { level },
    spacing: { after: 80, line: 276 },
  });
}

function bulletBold(label: string, value: string, level: number = 0): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({ text: label, bold: true, size: 22, font: "Calibri" }),
      new TextRun({ text: value, size: 22, font: "Calibri" }),
    ],
    bullet: { level },
    spacing: { after: 80, line: 276 },
  });
}

function code(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        size: 20,
        font: "Consolas",
        color: "37474F",
      }),
    ],
    spacing: { after: 80, line: 276 },
    indent: { left: convertInchesToTwip(0.5) },
    shading: { type: ShadingType.SOLID, color: "F5F5F5", fill: "F5F5F5" },
  });
}

function emptyLine(): Paragraph {
  return new Paragraph({ children: [], spacing: { after: 200 } });
}

function pageBreak(): Paragraph {
  return new Paragraph({
    children: [new PageBreak()],
  });
}

// Table helpers
function tableHeaderCell(text: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({ text, bold: true, size: 20, font: "Calibri", color: "FFFFFF" }),
        ],
        alignment: AlignmentType.CENTER,
      }),
    ],
    shading: { type: ShadingType.SOLID, color: "2E7D32", fill: "2E7D32" },
    width: { size: 0, type: WidthType.AUTO },
  });
}

function tableCell(text: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({ text, size: 20, font: "Calibri" }),
        ],
      }),
    ],
    width: { size: 0, type: WidthType.AUTO },
  });
}

function simpleTable(headers: string[], rows: string[][]): Table {
  return new Table({
    rows: [
      new TableRow({
        children: headers.map((h) => tableHeaderCell(h)),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map((cell) => tableCell(cell)),
          })
      ),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
  });
}

// ──────────────────────────────────────────────
// DOCUMENT CONTENT
// ──────────────────────────────────────────────

const children: Paragraph[] = [];

// ════════════════════════════════════════════════
// COVER PAGE
// ════════════════════════════════════════════════

children.push(emptyLine());
children.push(emptyLine());
children.push(emptyLine());
children.push(emptyLine());
children.push(emptyLine());

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "AYURSETU",
        bold: true,
        size: 80,
        font: "Calibri",
        color: "1B5E20",
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
  })
);

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "Bridging Ayurveda Talent with Opportunity",
        size: 32,
        font: "Calibri",
        color: "4E342E",
        italics: true,
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 600 },
  })
);

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "Comprehensive Technical Documentation",
        size: 28,
        font: "Calibri",
        color: "616161",
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  })
);

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "Version 1.0 — September 2026",
        size: 24,
        font: "Calibri",
        color: "9E9E9E",
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 },
  })
);

children.push(emptyLine());
children.push(emptyLine());
children.push(emptyLine());

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "Full-Stack Web Application",
        size: 24,
        font: "Calibri",
        color: "616161",
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  })
);

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "React 19 · TypeScript · Vite 7 · Convex · Tailwind CSS · shadcn/ui",
        size: 22,
        font: "Calibri",
        color: "9E9E9E",
      }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
  })
);

children.push(
  new Paragraph({
    children: [
      new TextRun({
        text: "Hosted & Developed on Freebuff",
        size: 22,
        font: "Calibri",
        color: "9E9E9E",
      }),
    ],
    alignment: AlignmentType.CENTER,
  })
);

children.push(pageBreak());

// ════════════════════════════════════════════════
// TABLE OF CONTENTS
// ════════════════════════════════════════════════

children.push(heading1("Table of Contents"));
children.push(emptyLine());

const tocEntries = [
  "1. Executive Summary",
  "2. Problem Statement & Domain Context",
  "   2.1 The AYUSH Ecosystem",
  "   2.2 The Gap in Ayurvedic Internship Discovery",
  "   2.3 AyurSetu's Solution",
  "3. Product Vision & Core Features",
  "   3.1 Landing Page",
  "   3.2 Authentication System",
  "   3.3 Profile Setup Wizard",
  "   3.4 Personalized Dashboard",
  "   3.5 Internship Browser",
  "4. System Architecture Overview",
  "   4.1 High-Level Architecture Diagram",
  "   4.2 Client-Server Communication",
  "   4.3 Data Flow Patterns",
  "5. Technology Stack Deep Dive",
  "   5.1 React 19 & TypeScript 5.9",
  "   5.2 Vite 7 Build System",
  "   5.3 Tailwind CSS v4 & Styling",
  "   5.4 shadcn/ui Component Library",
  "   5.5 Convex Backend & Database",
  "   5.6 Convex Auth",
  "   5.7 Framer Motion Animations",
  "   5.8 Supporting Libraries",
  "6. Database Schema & Data Model",
  "   6.1 Schema Overview",
  "   6.2 Table: users",
  "   6.3 Table: profiles",
  "   6.4 Table: skills",
  "   6.5 Table: internships",
  "   6.6 Table: applications",
  "   6.7 Entity Relationships",
  "7. Backend: Convex Server Functions",
  "   7.1 Profiles Module",
  "   7.2 Internships Module",
  "   7.3 Applications Module",
  "   7.4 Skills Module",
  "   7.5 Users Module",
  "   7.6 Seed Data Function",
  "8. Authentication System",
  "   8.1 Email OTP Flow",
  "   8.2 Anonymous/Guest Login",
  "   8.3 Auth Configuration",
  "   8.4 JWT Validation",
  "   8.5 Frontend Auth Hook",
  "   8.6 Protected Routes",
  "9. Frontend: Pages & Routing",
  "   9.1 Route Table",
  "   9.2 Router Configuration",
  "   9.3 Code Splitting Strategy",
  "   9.4 Route Synchronization",
  "   9.5 Auth Redirect Logic",
  "10. Frontend: Components & UI Patterns",
  "   10.1 Custom Components",
  "   10.2 shadcn/ui Usage Patterns",
  "   10.3 Loading States",
  "   10.4 Error Boundaries",
  "11. Design System: Claymorphism",
  "   11.1 Design Philosophy",
  "   11.2 Color Palette & OKLCH",
  "   11.3 CSS Utility Classes",
  "   11.4 Dark Mode Implementation",
  "   11.5 Decorative Elements",
  "12. The Skill-Matching Algorithm",
  "   12.1 Algorithm Description",
  "   12.2 Weight Distribution",
  "   12.3 Worked Example",
  "   12.4 Implementation Details",
  "   12.5 Limitations & Design Choices",
  "13. User Flows & State Management",
  "   13.1 Complete User Journey",
  "   13.2 Convex Reactive State Management",
  "   13.3 Local UI State Patterns",
  "   13.4 Conditional Query Skipping",
  "14. Security & Authorization",
  "   14.1 Backend Auth Checks",
  "   14.2 Ownership Validation",
  "   14.3 Business Rule Enforcement",
  "   14.4 Frontend Route Protection",
  "   14.5 Redirect Safety",
  "15. Performance & Code Splitting",
  "   15.1 Lazy Loading",
  "   15.2 Convex Reactivity Efficiency",
  "   15.3 Idempotent Data Seeding",
  "16. Error Handling & Monitoring",
  "   16.1 Three-Layer Error Boundary System",
  "   16.2 Toast Notifications",
  "   16.3 Backend Error Propagation",
  "17. Seed Data & Domain Vocabulary",
  "   17.1 Seeded Internships",
  "   17.2 Seeded Skills Taxonomy",
  "   17.3 Ayurvedic Degree Types",
  "18. Project File Structure",
  "   18.1 Root-Level Files",
  "   18.2 Source Directory",
  "   18.3 Convex Directory",
  "19. Deployment & Environment",
  "   19.1 Freebuff Platform",
  "   19.2 Environment Variables",
  "   19.3 Build & Development Scripts",
  "20. Future Roadmap & Extensibility",
  "   20.1 Short-Term Enhancements",
  "   20.2 Medium-Term Features",
  "   20.3 Long-Term Vision",
  "   20.4 Architecture Extensibility",
  "Appendix A: Complete Dependency List",
  "Appendix B: All Convex Schema Validators",
  "Appendix C: Complete Seed Data Catalog",
];

for (const entry of tocEntries) {
  const isSubEntry = entry.startsWith("   ");
  const isAppendix = entry.startsWith("Appendix");
  const indent = isSubEntry ? convertInchesToTwip(0.4) : isAppendix ? convertInchesToTwip(0) : 0;
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: entry.trim(),
          size: isSubEntry ? 20 : isAppendix ? 22 : 22,
          font: "Calibri",
          bold: !isSubEntry && !isAppendix,
          color: isSubEntry ? "616161" : "1B5E20",
        }),
      ],
      indent: { left: indent },
      spacing: { after: isSubEntry ? 40 : 80 },
    })
  );
}

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 1: EXECUTIVE SUMMARY
// ════════════════════════════════════════════════

children.push(heading1("1. Executive Summary"));

children.push(para(
  "AyurSetu is a full-stack web application designed as a specialized internship-matching platform for India's AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) education ecosystem. The name \"AyurSetu\" is a portmanteau combining \"Ayurveda\" (the ancient Indian system of medicine) with \"Setu\" (the Sanskrit word for \"bridge\"), reflecting the platform's core mission: bridging Ayurvedic talent with professional opportunity."
));

children.push(para(
  "The platform connects students of Ayurveda and allied disciplines—including BAMS (Bachelor of Ayurvedic Medicine and Surgery), MD Ayurveda, M.Sc Botany, M.Sc Pharmacology, and related programs—with curated internship opportunities at India's premier research laboratories, clinical centers, government bodies, and wellness organizations."
));

children.push(para(
  "At its core, AyurSetu features a skill-matching algorithm that scores every open internship against a student's declared profile of skills and interests. The algorithm uses a weighted composite score: 70% weight on required skill overlap and 30% weight on preferred skill overlap, producing a match percentage from 0 to 100. This ensures students see the most relevant opportunities first."
));

children.push(para(
  "The application consists of five primary user-facing sections: a visually rich marketing landing page; an email OTP authentication system; a multi-step profile setup wizard; a personalized dashboard displaying match statistics and top opportunities; and a browsable, searchable, filterable internship catalog with one-click application."
));

children.push(para(
  "The technology stack comprises React 19 with TypeScript 5.9 for the frontend, Vite 7 as the build tool, Tailwind CSS v4 with a custom \"Claymorphism\" design system for styling, 55+ shadcn/ui components for the UI library, Framer Motion for animations, and Convex as the reactive serverless backend with Convex Auth for authentication. The entire application runs on the Freebuff platform."
));

children.push(emptyLine());
children.push(boldPara("Key Technical Highlights: ", ""));
children.push(bullet("Serverless reactive backend with real-time query subscriptions"));
children.push(bullet("Zero-configuration authentication with email OTP and anonymous access"));
children.push(bullet("Custom Claymorphism design system with OKLCH color space and full dark mode"));
children.push(bullet("Weighted skill-matching algorithm with 70/30 required/preferred split"));
children.push(bullet("Idempotent seed data system with 10 real-world internships and 47 domain-specific skills"));
children.push(bullet("Three-layer error boundary system with remote monitoring integration"));
children.push(bullet("Lazy-loaded routes with React.lazy and Suspense for optimal code splitting"));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 2: PROBLEM STATEMENT
// ════════════════════════════════════════════════

children.push(heading1("2. Problem Statement & Domain Context"));

children.push(heading2("2.1 The AYUSH Ecosystem"));

children.push(para(
  "India's Ministry of AYUSH oversees one of the world's largest traditional medicine education systems. The acronym AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy—six traditional systems of medicine that have been practiced in India for thousands of years. The ministry was established as a separate department in 2014 and elevated to a full ministry in 2016, reflecting the Indian government's commitment to integrative healthcare."
));

children.push(para(
  "The educational infrastructure for AYUSH disciplines is vast. Hundreds of thousands of students are enrolled in programs across India, including:"
));

children.push(bulletBold("BAMS (Bachelor of Ayurvedic Medicine and Surgery): ", "A 5.5-year undergraduate program combining classroom education with clinical internship, the primary degree for Ayurvedic practitioners."));
children.push(bulletBold("MD/MS Ayurveda: ", "Postgraduate specialization programs in branches like Kayachikitsa (internal medicine), Shalya Tantra (surgery), Shalakya Tantra (ENT & ophthalmology), Prasuti Tantra (obstetrics), and Kaumarabhritya (pediatrics)."));
children.push(bulletBold("M.Sc Programs: ", "Master of Science degrees in Botany, Chemistry, Pharmacology, and Yoga, often with Ayurvedic research focus areas."));
children.push(bulletBold("PhD in Ayurveda: ", "Doctoral research programs at institutions like Gujarat Ayurveda University, Jamnagar, and Banaras Hindu University."));
children.push(bulletBold("Diploma Programs: ", "Shorter specialized training in Ayurvedic medicine, pharmacy, and therapy."));

children.push(para(
  "Key institutions in this ecosystem include the Central Council for Research in Ayurvedic Sciences (CCRAS), the Ministry of AYUSH itself, the Morarji Desai National Institute of Yoga (MDNIY), the CSIR-National Botanical Research Institute (CSIR-NBRI), and hundreds of Ayurvedic colleges and universities across India. Additionally, the private sector has major players like Himalaya Wellness, Dabur India, Patanjali, and numerous wellness tourism operators."
));

children.push(heading2("2.2 The Gap in Ayurvedic Internship Discovery"));

children.push(para(
  "Despite the massive scale of AYUSH education, students face significant challenges when seeking internships and early-career opportunities:"
));

children.push(bulletBold("Fragmented Opportunity Landscape: ", "Internships are posted across individual college notice boards, government portals, company websites, and local job boards. There is no central aggregation point where a BAMS student in Kerala can discover a clinical research opportunity at CCRAS in Delhi alongside a formulation internship at Himalaya in Bengaluru."));
children.push(bulletBold("No Domain-Aware Matching: ", "Generic job boards treat all \"internships\" the same. A Panchakarma therapy assistant role has fundamentally different skill requirements than an Ayurvedic pharmacology research position, yet both appear identically on platforms like LinkedIn or Internshala. Students waste time sifting through irrelevant listings."));
children.push(bulletBold("Skill-Oblivious Filtering: ", "Existing platforms allow filtering by location, stipend, and duration—but not by Ayurvedic specialization. A student skilled in Dravyaguna (pharmacognosy) has no way to find internships that specifically value that expertise."));
children.push(bulletBold("Geographic Dispersion: ", "AYUSH opportunities span the entire country—from government health outreach programs in rural areas to AI research at IIT Hyderabad to luxury wellness tourism in Kerala. Students need location-aware tools to find opportunities that match their mobility and preferences."));
children.push(bulletBold("Visibility Gap for Niche Skills: ", "Skills like HPTLC (High-Performance Thin-Layer Chromatography), Rasashastra (Ayurvedic pharmaceutics), or NLP applied to Sanskrit texts are highly specialized but don't appear as standard filters on any job platform."));

children.push(heading2("2.3 AyurSetu's Solution"));

children.push(para(
  "AyurSetu addresses each of these challenges with a purpose-built platform designed specifically for the AYUSH ecosystem:"
));

children.push(bulletBold("Centralized Platform: ", "All AYUSH-related internships from government bodies, research institutes, private companies, and wellness organizations are aggregated in one place, organized by type (Research, Clinical, Industry, Government)."));
children.push(bulletBold("Skill-Matching Algorithm: ", "A weighted algorithm compares the student's declared skills and interests against each internship's required and preferred skills, producing a 0-100% match score. Required skills carry 70% weight, preferred skills carry 30%."));
children.push(bulletBold("Domain-Specific Skill Taxonomy: ", "47 pre-defined skills across 5 categories (Ayurveda, Research, Technology, Quality, Professional) capture the unique competency landscape of AYUSH students."));
children.push(bulletBold("Complete Student Profiles: ", "Students build rich profiles with their degree, university, year, skills, interests, experience, and preferred location—enabling precise matching."));
children.push(bulletBold("Application Tracking: ", "Students can apply to internships with one click and track their application status (pending, accepted, rejected, withdrawn) from their dashboard."));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 3: PRODUCT VISION & FEATURES
// ════════════════════════════════════════════════

children.push(heading1("3. Product Vision & Core Features"));

children.push(heading2("3.1 Landing Page (/)"));

children.push(para(
  "The landing page is the public-facing marketing page and the first point of contact for new users. It is implemented in src/pages/Landing.tsx and features a visually striking design with the Ayurveda-inspired Claymorphism aesthetic."
));

children.push(heading3("Navigation Bar"));
children.push(para(
  "A fixed navigation bar at the top of the page with a frosted glass effect (backdrop-blur-xl bg-background/80) containing the AyurSetu logo (a leaf icon inside a rounded card), a Sign In ghost button, and a Get Started primary button with a clay-button style. The navigation bar is responsive and remains visible during scroll."
));

children.push(heading3("Hero Section"));
children.push(para(
  "The hero section features three decorative blurred blobs in leaf-light, saffron-light, and sky-light colors positioned absolutely behind the content. A \"Ministry of AYUSH Initiative\" pill badge with a sparkle icon sits above the main heading. The heading reads \"Bridging Ayurveda Talent with Opportunity\" with gradient text (from primary green through saffron to terracotta). A descriptive paragraph explains the platform's purpose, followed by two CTA buttons: \"Start Your Journey\" (clay-button primary) and \"Explore Features\" (outline). Below the text, three floating preview cards showcase example internship matches with emoji icons, organization names, and match percentages."
));

children.push(heading3("Animations"));
children.push(para(
  "All content uses Framer Motion for entrance animations. A custom fadeUp variant defines opacity+translateY transitions with staggered delays (0.12s per element). The hero section uses sequential animations: badge at 0s, heading at 0.12s, paragraph at 0.24s, buttons at 0.36s, and preview cards at 0.6s+. Stats, features, testimonials, and CTA sections use whileInView triggers for scroll-activated animations."
));

children.push(heading3("Stats Section"));
children.push(para(
  "A clay-card section displaying 4 key metrics: 50+ Partner Organizations, 200+ Active Internships, 5,000+ Students Registered, and 92% Match Success Rate. Each stat uses whileInView with scale animations."
));

children.push(heading3("Features Section"));
children.push(para(
  "A 3-column responsive grid (1 col on mobile, 2 on tablet, 3 on desktop) showcasing 6 feature cards: Smart Skill Matching, Curated for Ayurveda, Top Organizations, Complete Profile, Pan-India Coverage, and All Career Paths. Each card has a Lucide icon in a clay-inset container, a title, and a description. Cards have hover:shadow-lg transition effects."
));

children.push(heading3("How It Works Section"));
children.push(para(
  "A 3-step visual flow with numbered clay-card steps (01, 02, 03): Build Your Profile → Discover Matches → Apply & Connect. Each step has a title and description with responsive centering."
));

children.push(heading3("Testimonials Section"));
children.push(para(
  "Three testimonial cards featuring fictional but realistic student profiles: Dr. Priya Sharma (BAMS, JSS Ayurveda College), Arjun Nair (MD Ayurveda, Gujarat Ayurveda University), and Kavya Reddy (M.Sc Botany, University of Hyderabad). Each card has a user icon, name, role, and italicized quote."
));

children.push(heading3("CTA Section"));
children.push(para(
  "A large clay-card with decorative corner blobs and a centered call-to-action: \"Ready to Find Your Perfect Internship?\" with a \"Create Your Profile\" clay-button linking to /auth."
));

children.push(heading3("Footer"));
children.push(para(
  "A minimal footer with the AyurSetu logo, \"An initiative under the Ministry of AYUSH\" text, and Privacy/Terms/Contact links."
));

children.push(heading2("3.2 Authentication System (/auth)"));

children.push(para(
  "The authentication page (src/pages/Auth.tsx) provides two sign-in methods: Email OTP and Guest/Anonymous login."
));

children.push(heading3("Email OTP Flow"));
children.push(para(
  "Step 1: The user enters their email address in an input field with a mail icon. Submitting the form calls signIn('email-otp', formData) which triggers the Convex Auth email OTP provider. The provider generates a 6-digit OTP, stores it server-side, and sends it via Freebuff's email API."
));

children.push(para(
  "Step 2: The UI transitions to an OTP verification screen showing \"Check your email\" with the email address displayed. A 6-digit InputOTP component accepts the code. Pressing Enter or clicking \"Verify & Continue\" submits the OTP for verification. On success, the user is redirected to their intended destination."
));

children.push(heading3("Guest Login"));
children.push(para(
  "An alternative \"Continue as Guest\" button calls signIn('anonymous') which creates a session-only identity without requiring an email. This is useful for quick exploration of the platform."
));

children.push(heading3("Redirect Logic"));
children.push(para(
  "The auth page uses a validate-safe redirect system: the returnTo query parameter is checked to start with '/' and not '//' (preventing open redirect attacks). The redirectAfterAuth prop defaults to '/dashboard'. If the user is already authenticated, they are immediately redirected to their destination."
));

children.push(heading2("3.3 Profile Setup Wizard (/profile)"));

children.push(para(
  "The profile setup page (src/pages/ProfileSetup.tsx) is a 3-step wizard that collects student information:"
));

children.push(heading3("Step 1: Personal & Academic Details"));
children.push(bullet("Full Name — text input"));
children.push(bullet("University / College — text input"));
children.push(bullet("Degree — dropdown with 11 options (BAMS, MD Ayurveda, MS Ayurveda, PhD Ayurveda, M.Sc Botany, M.Sc Chemistry, M.Sc Pharmacology, M.Sc Yoga, B.Sc Nursing, Diploma in Ayurveda, Other)"));
children.push(bullet("Year — dropdown with 9 options (1st Year through Graduated)"));
children.push(bullet("Preferred Location — text input"));
children.push(bullet("Experience — textarea for brief description"));
children.push(bullet("Bio — optional textarea"));

children.push(heading3("Step 2: Skills & Interests"));
children.push(para(
  "Displays all available skills from the skills catalog, grouped by category (Ayurveda, Research, Technology, Quality, Professional). Each skill is a toggleable badge. Students select skills they possess and interests they want to explore. The step requires at least 1 skill to be selected."
));

children.push(heading3("Step 3: Review & Submit"));
children.push(para(
  "A confirmation step before saving. The form data is submitted via the upsertProfile mutation, which either creates a new profile or updates an existing one. On success, the user is redirected to /dashboard."
));

children.push(heading3("Progress Indicator"));
children.push(para(
  "A visual 3-step progress indicator at the top shows the current step with animated transitions. Completed steps display checkmarks, the active step is highlighted in primary color, and future steps are muted."
));

children.push(heading2("3.4 Personalized Dashboard (/dashboard)"));

children.push(para(
  "The dashboard (src/pages/Dashboard.tsx) is the authenticated home screen and features:"
));

children.push(heading3("Stat Cards"));
children.push(para(
  "A 4-column responsive grid of clay-card stat widgets: Average Match Score, Total Matches, Applications Submitted, and Applications Accepted. Each has a Lucide icon in a clay-inset container, a large number value, and a label."
));

children.push(heading3("Profile Card"));
children.push(para(
  "A left-column card showing the student's full name, university, degree, year, location, skills (as secondary badges), and interests (as outline badges). An \"Edit Profile\" button links to /profile."
));

children.push(heading3("Top Matches"));
children.push(para(
  "The main content area displays the top 5 matched internships sorted by match score. Each match card shows: title, match badge (\"Top Match\" for scores ≥70%), organization with building icon, location/duration/stipend metadata, required skills as badges, and the match score percentage in a clay-inset container."
));

children.push(heading3("Recent Applications"));
children.push(para(
  "Below the matches, a list of recent applications shows the internship title, organization, match score, and status badge (color-coded: green for accepted, amber for pending, red for rejected, gray for withdrawn)."
));

children.push(heading3("Auto-Profile Redirect"));
children.push(para(
  "If the profile query returns null (user exists but has no profile), the dashboard automatically redirects to /profile to ensure profile completion."
));

children.push(heading2("3.5 Internship Browser (/internships)"));

children.push(para(
  "The internship browser (src/pages/Internships.tsx) provides a comprehensive search and filter experience:"
));

children.push(heading3("Search & Filter Bar"));
children.push(bullet("Text search filtering by title, organization, description, or skill keywords"));
children.push(bullet("Type filter buttons: All, Research, Clinical, Industry, Government"));
children.push(bullet("Results count display: \"N internships matched to your profile\""));

children.push(heading3("Internship Cards"));
children.push(para(
  "Each internship is displayed as a rich Card component with: type badge (color-coded: sky for Research, green for Clinical, amber for Industry, purple for Government), match score badge, title, organization, description, metadata grid (location, duration, stipend, deadline), required skills with checkmarks for matched skills, preferred skills with checkmarks for matched skills, and an Apply Now button or \"Applied\" badge."
));

children.push(heading3("Application Flow"));
children.push(para(
  "Clicking \"Apply Now\" triggers the applyToInternship mutation. The button shows a loading spinner during submission. On success, a Sonner toast confirms \"Application submitted!\" and the button transitions to an \"Applied\" badge. The button is disabled during submission to prevent double-application."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 4: ARCHITECTURE
// ════════════════════════════════════════════════

children.push(heading1("4. System Architecture Overview"));

children.push(heading2("4.1 High-Level Architecture Diagram"));

children.push(para(
  "AyurSetu follows a serverless reactive architecture with three primary layers:"
));

children.push(bulletBold("Client Layer: ", "A React single-page application running in the browser, served by Vite's dev server. This layer handles UI rendering, user interaction, form state, and navigation."));
children.push(bulletBold("Transport Layer: ", "WebSocket connections between the React client and the Convex backend. Convex uses WebSockets for real-time query subscriptions and mutation execution, replacing traditional HTTP request-response patterns."));
children.push(bulletBold("Backend Layer: ", "The Convex platform hosts the database, server functions (queries and mutations), authentication, and HTTP routing. There is no separate Express/Fastify/Django server—all server-side logic runs as Convex functions."));

children.push(para(
  "The architecture diagram can be visualized as:"
));

children.push(code("┌─────────────────────────────────────────────────┐"));
children.push(code("│              CLIENT (React + Vite)              │"));
children.push(code("│  ┌────────┐ ┌──────┐ ┌─────────┐ ┌──────────┐ │"));
children.push(code("│  │Landing │ │ Auth │ │Dashboard│ │Internship│ │"));
children.push(code("│  │ Page   │ │ Page │ │  Page   │ │ Browser  │ │"));
children.push(code("│  └───┬────┘ └──┬───┘ └────┬────┘ └────┬─────┘ │"));
children.push(code("│      └─────────┴──────────┴────────────┘       │"));
children.push(code("│              Convex React Client                │"));
children.push(code("│          useQuery() / useMutation()             │"));
children.push(code("└──────────────────┬─────────────────────────────┘"));
children.push(code("                   │ WebSocket (real-time sync)   "));
children.push(code("┌──────────────────┴─────────────────────────────┐"));
children.push(code("│              CONVEX BACKEND                    │"));
children.push(code("│  ┌─────────┐ ┌──────────┐ ┌──────────────┐    │"));
children.push(code("│  │ profiles│ │internship│ │ applications │    │"));
children.push(code("│  └────┬────┘ └────┬─────┘ └──────┬───────┘    │"));
children.push(code("│       └───────────┴──────────────┘             │"));
children.push(code("│              Convex Database                   │"));
children.push(code("│  ┌──────┐ ┌──────┐ ┌───────┐ ┌────────────┐  │"));
children.push(code("│  │users │ │skills│ │  auth │ │ HTTP Router│  │"));
children.push(code("│  └──────┘ └──────┘ └───────┘ └────────────┘  │"));
children.push(code("└─────────────────────────────────────────────────┘"));

children.push(heading2("4.2 Client-Server Communication"));

children.push(para(
  "Communication between the React frontend and Convex backend happens over WebSocket connections managed by the ConvexReactClient. The client is initialized in src/main.tsx:"
));

children.push(code("const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);"));

children.push(para(
  "Queries are declarative subscriptions. When a component calls useQuery(api.profiles.getMyProfile), the client opens a WebSocket subscription to the Convex backend. The server evaluates the query function, sends the result, and keeps the subscription alive. When any mutation writes to the profiles table, the server automatically re-evaluates the query and pushes the updated result to all subscribed clients."
));

children.push(para(
  "Mutations are imperative write operations. When a component calls useMutation(api.applications.apply) and invokes the returned function, the client sends the mutation request over the WebSocket. The server executes the mutation function (which can read and write to the database), and the result is returned to the client. Any queries that depend on the mutated data are automatically updated."
));

children.push(heading2("4.3 Data Flow Patterns"));

children.push(para(
  "The application uses several distinct data flow patterns:"
));

children.push(heading3("Pattern 1: Reactive Query Subscription"));
children.push(para(
  "The primary pattern. Components declare their data dependencies via useQuery, and Convex handles the rest: initial fetch, real-time updates, and cleanup on unmount."
));
children.push(code("const profile = useQuery(api.profiles.getMyProfile);"));
children.push(code("const applications = useQuery(api.applications.getMyApplications);"));

children.push(heading3("Pattern 2: Conditional Query with Skip"));
children.push(para(
  "When a query depends on data that may not be available yet, the skip sentinel prevents premature execution."
));
children.push(code("const matches = useQuery("));
children.push(code("  api.internships.getMatches,"));
children.push(code("  profile ? { profileId: profile._id } : \"skip\""));
children.push(code(");"));

children.push(heading3("Pattern 3: Mutation with Side Effects"));
children.push(para(
  "Mutations that trigger additional behavior (toasts, navigation) are wrapped in try/catch blocks with local loading state management."
));
children.push(code("const handleApply = async (internshipId: string) => {"));
children.push(code("  setApplyingId(internshipId);"));
children.push(code("  try {"));
children.push(code("    await applyToInternship({ internshipId });"));
children.push(code("    toast.success(\"Application submitted!\");"));
children.push(code("  } catch (error) {"));
children.push(code("    toast.error(error.message);"));
children.push(code("  } finally {"));
children.push(code("    setApplyingId(null);"));
children.push(code("  }"));
children.push(code("};"));

children.push(heading3("Pattern 4: Auth-Gated Auto-Redirect"));
children.push(para(
  "Components check for profile existence and redirect to the profile setup page if needed."
));
children.push(code("useEffect(() => {"));
children.push(code("  if (profile === null && user) navigate(\"/profile\");"));
children.push(code("}, [profile, user, navigate]);"));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 5: TECHNOLOGY STACK
// ════════════════════════════════════════════════

children.push(heading1("5. Technology Stack Deep Dive"));

children.push(heading2("5.1 React 19 & TypeScript 5.9"));

children.push(para(
  "The application is built with React 19.2, the latest major release of the React framework. Key React 19 features utilized include:"
));

children.push(bulletBold("Concurrent Rendering: ", "All route components are lazy-loaded via React.lazy() and wrapped in Suspense, enabling streaming and progressive hydration of page content."));
children.push(bulletBold("Improved Suspense: ", "The Suspense boundary in main.tsx provides a lightweight loading indicator during route transitions, showing a pulsing \"Loading...\" text."));
children.push(bulletBold("Error Boundaries: ", "Three class-based error boundaries (RootErrorBoundary, ToolbarErrorBoundary, InstrumentationProvider's ErrorBoundary) catch and handle runtime errors at different levels of the component tree."));

children.push(para(
  "TypeScript 5.9 provides full type safety across the entire codebase. The project uses two tsconfig files: tsconfig.app.json for application code and tsconfig.node.json for build tooling. A path alias @/* maps to ./src/* for clean imports. Convex's schema validators (v.string(), v.array(), v.union(), etc.) define the type contracts between frontend and backend, ensuring type-safe data flow without manual type annotations."
));

children.push(heading2("5.2 Vite 7 Build System"));

children.push(para(
  "Vite 7 serves as the build tool and development server, configured with @vitejs/plugin-react for Fast Refresh support. The platform requires HMR to remain disabled (server.hmr: false) for stable iframe-based previews. Environment variables are accessed via import.meta.env.VITE_* prefix, including VITE_CONVEX_URL for the Convex deployment URL and VITE_VLY_APP_ID for Freebuff monitoring."
));

children.push(heading2("5.3 Tailwind CSS v4 & Styling"));

children.push(para(
  "The project uses Tailwind CSS v4 with the new import syntax (@import \"tailwindcss\") rather than the legacy @tailwind directives. A comprehensive @theme inline block maps CSS custom properties to Tailwind color tokens, enabling utility classes like bg-primary, text-muted-foreground, and border-border throughout the codebase."
));

children.push(para(
  "All colors are defined in the OKLCH (OK Lightness Chroma Hue) color space, which provides perceptually uniform color representation. This is superior to HSL because OKLCH better matches human perception of color differences, ensuring consistent visual hierarchy across the design."
));

children.push(para(
  "Dark mode is implemented via a .custom-variant directive: @custom-variant dark (&:is(.dark *)) — enabling class-based dark mode toggling. Every color token has both light and dark variants defined in :root and .dark CSS selectors."
));

children.push(heading2("5.4 shadcn/ui Component Library"));

children.push(para(
  "The project uses shadcn/ui with the \"new-york\" style variant, configured in components.json. Unlike traditional component libraries (MUI, Chakra), shadcn/ui is not installed as a dependency — instead, component source code is copied into src/components/ui/ and can be customized directly."
));

children.push(para(
  "The library provides 55+ pre-built components organized by category:"
));

children.push(
  simpleTable(
    ["Category", "Components"],
    [
      ["Layout", "Aspect Ratio, Separator, Resizable Panels, Scroll Area"],
      ["Navigation", "Breadcrumb, Menubar, Navigation Menu, Pagination, Tabs"],
      ["Data Display", "Avatar, Badge, Card, Carousel, Chart, Table"],
      ["Forms", "Checkbox, Input, Input OTP, Label, Radio Group, Select, Slider, Switch, Textarea, Form, Field, Input Group"],
      ["Feedback", "Alert, Alert Dialog, Progress, Skeleton, Spinner, Sonner (Toast), Empty"],
      ["Overlays", "Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card, Popover, Sheet, Tooltip"],
      ["Composite", "Accordion, Button, Button Group, Calendar, Sidebar, Toggle, Toggle Group"],
    ]
  )
);

children.push(heading2("5.5 Convex Backend & Database"));

children.push(para(
  "Convex is the full backend and database — there is no separate server process, no SQL database, no ORM, and no REST API to maintain. Convex provides a reactive, real-time database with serverless functions (queries for reads, mutations for writes), built-in authentication integration, HTTP routing, and automatic code generation for type-safe client access."
));

children.push(para(
  "The Convex schema (src/convex/schema.ts) defines 5 application tables plus the auth tables inherited from @convex-dev/auth. Each table has typed validators, indexes for efficient queries, and relationships between entities. The schemaValidation is set to false, allowing gradual migration and flexible development."
));

children.push(heading2("5.6 Convex Auth"));

children.push(para(
  "Convex Auth (via @convex-dev/auth) provides the authentication layer with two providers:"
));

children.push(bulletBold("Email OTP: ", "Generates a 6-digit numeric code using @oslojs/crypto for cryptographic randomness, sends it via Freebuff's managed email API (auth.freebuff.app), and verifies against the stored token. Token max age is 15 minutes."));
children.push(bulletBold("Anonymous: ", "Creates a session-only identity without requiring email, useful for quick exploration."));

children.push(para(
  "The auth configuration (src/convex/auth.config.ts) supports dual JWT validation: the project's own OIDC tokens (validated via Convex site's OpenID configuration) and Freebuff federated tokens (validated via customJwt with RS256 against Freebuff's JWKS endpoint)."
));

children.push(heading2("5.7 Framer Motion Animations"));

children.push(para(
  "Framer Motion 12 provides all animations across the application. Key animation patterns include:"
));

children.push(bulletBold("Fade-up variants: ", "A custom fadeUp object defining hidden (opacity:0, y:30) and visible (opacity:1, y:0) states with staggered delays for sequential element entrance animations."));
children.push(bulletBold("Scroll-triggered animations: ", "whileInView prop with viewport={{ once: true }} for elements that animate when they enter the viewport during scrolling."));
children.push(bulletBold("Interactive transforms: ", "hover:scale-105 on feature icons, hover:shadow-lg on cards, translateY on button press states."));
children.push(bulletBold("Page transitions: ", "Initial/animate transitions on route components for smooth page navigation feel."));

children.push(heading2("5.8 Supporting Libraries"));

children.push(
  simpleTable(
    ["Library", "Version", "Purpose"],
    [
      ["react-router", "v7", "Client-side routing with BrowserRouter"],
      ["react-hook-form", "v7.67", "Form state management (available, used minimally)"],
      ["zod", "v4.1", "Schema validation (paired with react-hook-form)"],
      ["recharts", "v2.15", "Chart library for potential analytics"],
      ["sonner", "v2.0", "Toast notifications"],
      ["lucide-react", "v0.555", "Icon library — 100+ icons"],
      ["next-themes", "v0.4", "Dark mode toggle support"],
      ["axios", "v1.13", "HTTP client for email OTP API"],
      ["date-fns", "v4.1", "Date formatting"],
      ["class-variance-authority", "v0.7", "Component variant management"],
      ["clsx", "v2.1", "Conditional class joining"],
      ["tailwind-merge", "v3.4", "Tailwind class deduplication"],
      ["embla-carousel-react", "v8.6", "Carousel engine"],
      ["react-intersection-observer", "v10", "Lazy loading and scroll detection"],
      ["react-resizable-panels", "v3.0", "Resizable panel layouts"],
      ["cmdk", "v1.1", "Command palette component"],
      ["vaul", "v1.1", "Drawer component"],
      ["input-otp", "v1.4", "OTP input for authentication"],
      ["@vly-ai/integrations", "v0.6", "Freebuff platform integrations"],
    ]
  )
);

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 6: DATABASE SCHEMA
// ════════════════════════════════════════════════

children.push(heading1("6. Database Schema & Data Model"));

children.push(heading2("6.1 Schema Overview"));

children.push(para(
  "The database schema is defined in src/convex/schema.ts and consists of 6 tables: 1 inherited from Convex Auth's authTables and 5 custom application tables. The schema uses Convex's defineSchema and defineTable functions with typed validators from the v namespace (Convex Values). Schema validation is disabled (schemaValidation: false) for development flexibility."
));

children.push(heading2("6.2 Table: users"));

children.push(para(
  "The users table extends Convex Auth's authTables and stores user identity information. It inherits authentication-related fields (such as session tokens) and adds application-specific fields."
));

children.push(
  simpleTable(
    ["Field", "Type", "Required", "Description"],
    [
      ["_id", "Id<\"users\">", "Auto", "Unique document identifier"],
      ["_creationTime", "number", "Auto", "Document creation timestamp"],
      ["name", "string?", "No", "User's display name"],
      ["image", "string?", "No", "Profile image URL"],
      ["email", "string?", "No", "User's email address"],
      ["emailVerificationTime", "number?", "No", "When email was verified"],
      ["isAnonymous", "boolean?", "No", "Whether this is a guest account"],
      ["role", "admin | student?", "No", "User role for RBAC"],
    ]
  )
);

children.push(para(
  "The table has a single custom index: email[email] — which queries users by email address. The role field uses a union validator allowing \"admin\" or \"student\" values, enabling future role-based access control. Currently, only the student role is actively used."
));

children.push(heading2("6.3 Table: profiles"));

children.push(para(
  "The profiles table stores student profile information linked to a user account. This is the core data structure that drives the skill-matching algorithm."
));

children.push(
  simpleTable(
    ["Field", "Type", "Required", "Description"],
    [
      ["_id", "Id<\"profiles\">", "Auto", "Unique document identifier"],
      ["userId", "Id<\"users\">", "Yes", "Foreign key to users table"],
      ["fullName", "string", "Yes", "Student's full name"],
      ["university", "string", "Yes", "University or college name"],
      ["degree", "string", "Yes", "Degree type (e.g., \"BAMS\")"],
      ["year", "string", "Yes", "Current year (e.g., \"3rd Year\")"],
      ["skills", "string[]", "Yes", "Array of skill names"],
      ["interests", "string[]", "Yes", "Array of interest areas"],
      ["experience", "string", "Yes", "Brief experience description"],
      ["location", "string", "Yes", "Preferred work location"],
      ["bio", "string?", "No", "Optional personal bio"],
      ["completedProfile", "boolean", "Yes", "Whether setup is complete"],
    ]
  )
);

children.push(para(
  "The table has one unique index: by_user[userId] — ensuring one profile per user. The skills and interests fields are string arrays (not foreign keys to the skills table) — this design allows free-form skill entry while the skills table serves as a suggestion catalog for the UI. The completedProfile flag is critical for the routing logic: when this is false, the user is redirected to the profile setup page."
));

children.push(heading2("6.4 Table: skills"));

children.push(para(
  "The skills table serves as a reference catalog of available skills that students can select during profile setup. It is a read-only catalog from the student's perspective — skills are seeded during initial data population."
));

children.push(
  simpleTable(
    ["Field", "Type", "Required", "Description"],
    [
      ["_id", "Id<\"skills\">", "Auto", "Unique document identifier"],
      ["name", "string", "Yes", "Skill name (e.g., \"Panchakarma\")"],
      ["category", "string", "Yes", "Category (e.g., \"Ayurveda\")"],
    ]
  )
);

children.push(para(
  "The by_category[category] index enables efficient filtering of skills by category in the profile setup wizard."
));

children.push(heading2("6.5 Table: internships"));

children.push(para(
  "The internships table stores available internship listings. These are seeded with 10 real-world internships from organizations across India."
));

children.push(
  simpleTable(
    ["Field", "Type", "Required", "Description"],
    [
      ["_id", "Id<\"internships\">", "Auto", "Unique document identifier"],
      ["title", "string", "Yes", "Internship title"],
      ["organization", "string", "Yes", "Organization name"],
      ["description", "string", "Yes", "Full description"],
      ["requiredSkills", "string[]", "Yes", "Must-have skills"],
      ["preferredSkills", "string[]", "Yes", "Nice-to-have skills"],
      ["location", "string", "Yes", "Work location"],
      ["duration", "string", "Yes", "Duration (e.g., \"6 months\")"],
      ["stipend", "string", "Yes", "Stipend (e.g., \"₹18,000/month\")"],
      ["type", "string", "Yes", "\"Research\"|\"Clinical\"|\"Industry\"|\"Government\""],
      ["status", "open | closed", "Yes", "Whether applications are accepted"],
      ["deadline", "number", "Yes", "Application deadline (Unix timestamp)"],
      ["contactEmail", "string", "Yes", "Contact email"],
      ["postedAt", "number", "Yes", "When posted (Unix timestamp)"],
    ]
  )
);

children.push(para(
  "Two indexes: by_status[status] (for listing open internships) and by_type[type] (for filtering by category). The requiredSkills/preferredSkills separation is the foundation of the weighted matching algorithm. The stipend field is a string rather than a number because values like \"₹10,000/month + Accommodation\" and \"Unpaid\" don't fit numeric parsing."
));

children.push(heading2("6.6 Table: applications"));

children.push(para(
  "The applications table records student applications to internships."
));

children.push(
  simpleTable(
    ["Field", "Type", "Required", "Description"],
    [
      ["_id", "Id<\"applications\">", "Auto", "Unique document identifier"],
      ["studentId", "Id<\"profiles\">", "Yes", "Foreign key to profiles"],
      ["internshipId", "Id<\"internships\">", "Yes", "Foreign key to internships"],
      ["matchScore", "number", "Yes", "Computed match score (0-100)"],
      ["appliedAt", "number", "Yes", "Application timestamp"],
      ["status", "pending|accepted|rejected|withdrawn", "Yes", "Application status"],
    ]
  )
);

children.push(para(
  "Three indexes: by_student[studentId] (for user's applications), by_internship[internshipId] (for listing applicants), and by_student_internship[studentId, internshipId] (for duplicate-application checks). The matchScore is computed and stored at application time — a snapshot that preserves the historical score even if skills change later."
));

children.push(heading2("6.7 Entity Relationships"));

children.push(para(
  "The entity relationship between tables follows this structure:"
));

children.push(code("users ──────1:1────── profiles ──────1:N────── applications"));
children.push(code("  │                    │                          │"));
children.push(code("  │ (authTables)       │                          │"));
children.push(code("  │                    │                          │"));
children.push(code("  └── auth sessions    skills (catalog)      internships"));
children.push(code("                                              (seeded data)"));

children.push(para(
  "A user has exactly one profile (1:1 via by_user unique index). A profile has many applications (1:N via by_student index). An internship has many applications (1:N via by_internship index). The skills table is independent — it provides a catalog for the UI but is not directly referenced by profiles or internships (which store skill names as strings)."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 7: BACKEND FUNCTIONS
// ════════════════════════════════════════════════

children.push(heading1("7. Backend: Convex Server Functions"));

children.push(para(
  "All server-side logic is implemented as Convex queries (read-only, reactive) and mutations (write operations with side effects). Each function file follows a consistent pattern: import the necessary Convex utilities, define exported functions with typed args and handlers, and use getAuthUserId for authentication."
));

children.push(heading2("7.1 Profiles Module (src/convex/profiles.ts)"));

children.push(heading3("getMyProfile — Query"));
children.push(para(
  "Retrieves the current authenticated user's profile. Uses getAuthUserId(ctx) to get the user ID from the auth context, then queries the profiles table using the by_user unique index. Returns the profile document if found, or null if no profile exists. This null return value is critical — the frontend uses it to decide whether to redirect to the profile setup page."
));

children.push(heading3("upsertProfile — Mutation"));
children.push(para(
  "Creates a new profile or updates an existing one. Accepts all profile fields (fullName, university, degree, year, skills, interests, experience, location, bio). First checks for an existing profile via the by_user index. If found, patches the existing document with the new data and sets completedProfile: true. If not found, inserts a new profile document. Returns the profile ID."
));

children.push(heading3("getProfile — Query"));
children.push(para(
  "Fetches any profile by its document ID. Used for potential future features like viewing other students' profiles or organization-facing views."
));

children.push(heading2("7.2 Internships Module (src/convex/internships.ts)"));

children.push(heading3("listOpen — Query"));
children.push(para(
  "Returns all internships with status: \"open\" using the by_status index. A straightforward query with no authentication requirement."
));

children.push(heading3("get — Query"));
children.push(para(
  "Fetches a single internship by its document ID."
));

children.push(heading3("getMatches — Query (Core Algorithm)"));
children.push(para(
  "The central matching function. Takes a profileId argument, loads the student profile, loads all open internships, computes match scores for each internship against the student's skills and interests, sorts results by match score in descending order, and returns the ranked list. This is the most computationally intensive function and is called by both the dashboard and the internship browser."
));

children.push(para("The algorithm:"));
children.push(bullet("Combines profile.skills and profile.interests into a unified studentSkills array (all lowercased)"));
children.push(bullet("For each open internship, counts how many requiredSkills match studentSkills (requiredMatches)"));
children.push(bullet("Counts how many preferredSkills match studentSkills (preferredMatches)"));
children.push(bullet("Computes: score = (requiredMatches/totalRequired * 70) + (preferredMatches/totalPreferred * 30)"));
children.push(bullet("Returns the internship with an additional matchScore field, sorted descending by score"));

children.push(heading3("seed — Mutation"));
children.push(para(
  "An idempotent seeder that inserts 10 internships and 47 skills on first run. Checks if any internships exist before seeding — if so, returns \"already_seeded\". Called on every dashboard and profile page load as a safety mechanism."
));

children.push(heading2("7.3 Applications Module (src/convex/applications.ts)"));

children.push(heading3("apply — Mutation"));
children.push(para(
  "Creates a new application. Performs 5 validation checks before inserting: (1) user is authenticated, (2) user has a profile, (3) user hasn't already applied to this internship, (4) the internship exists, and (5) the internship status is \"open\". Computes the match score using the same algorithm as getMatches and stores it with the application. This score snapshot preserves the historical match value."
));

children.push(heading3("getMyApplications — Query"));
children.push(para(
  "Returns all applications for the current user, enriched with internship details. Uses the by_student index to find applications, then fetches the full internship document for each application via ctx.db.get(). This denormalization-on-read pattern avoids storing full internship data in the applications table."
));

children.push(heading3("withdraw — Mutation"));
children.push(para(
  "Sets an application's status to \"withdrawn\". Validates that the requesting user owns the application by comparing the application's studentId with the user's profile ID."
));

children.push(heading2("7.4 Skills Module (src/convex/skills.ts)"));

children.push(para(
  "Three read-only queries for the skills catalog: listAll (returns all skills), getByCategory (filters by category string), and getCategories (returns unique category names sorted alphabetically). These are consumed by the profile setup wizard to populate the skill selection interface."
));

children.push(heading2("7.5 Users Module (src/convex/users.ts)"));

children.push(para(
  "Contains the currentUser query — the primary way the frontend accesses the current user's document. Also exports a getCurrentUser helper function for internal backend use. This is the most frequently called query as it's used by the useAuth hook."
));

children.push(heading2("7.6 Seed Data Function"));

children.push(para(
  "The seed mutation in internships.ts serves as the application's data initializer. It populates the database with 10 realistic internships from real-world Indian organizations and 47 domain-specific skills. The seed data is carefully designed to represent the diversity of the AYUSH ecosystem:"
));

children.push(bulletBold("Geographic diversity: ", "New Delhi (3), Bengaluru (1), Kerala (2), Hyderabad (1), Lucknow (1), Ghaziabad (1), Pan-India (1)"));
children.push(bulletBold("Type diversity: ", "Research (4), Clinical (1), Industry (3), Government (2)"));
children.push(bulletBold("Stipend range: ", "₹10,000/month to ₹25,000/month"));
children.push(bulletBold("Duration range: ", "3 months to 6 months"));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 8: AUTHENTICATION
// ════════════════════════════════════════════════

children.push(heading1("8. Authentication System"));

children.push(heading2("8.1 Email OTP Flow"));

children.push(para(
  "The primary authentication method uses email-based One-Time Passwords (OTP). The flow proceeds through these stages:"
));

children.push(heading3("Stage 1: OTP Generation"));
children.push(para(
  "When the user submits their email, the signIn('email-otp', formData) call triggers the emailOtp provider (src/convex/auth/emailOtp.ts). The generateVerificationToken function uses @oslojs/crypto's generateRandomString with crypto.getRandomValues() to create a cryptographically secure 6-digit numeric OTP. The alphabet is restricted to '0123456789'."
));

children.push(heading3("Stage 2: OTP Delivery"));
children.push(para(
  "The sendVerificationRequest function makes a POST request to https://auth.freebuff.app/send_otp with the email, OTP, and app name. It uses an API key (fb_email_2crN1hqIArZP2bEfvjp5Qik4) for authentication. Errors are caught and re-thrown as JSON stringified error objects."
));

children.push(heading3("Stage 3: OTP Verification"));
children.push(para(
  "The user enters the 6-digit code in the InputOTP component. On submit, signIn('email-otp', formData) is called again with the email and code. Convex Auth verifies the OTP against the stored token, checks the 15-minute expiry, and if valid, creates an auth session."
));

children.push(heading2("8.2 Anonymous/Guest Login"));

children.push(para(
  "The anonymous provider allows sign-in without email. signIn('anonymous') creates a session with a temporary identity. This is useful for exploration but limits functionality — the user still needs to complete a profile to see matched internships."
));

children.push(heading2("8.3 Auth Configuration"));

children.push(para(
  "The auth configuration (src/convex/auth.config.ts) defines two JWT issuers:"
));

children.push(heading3("Issuer 1: Self-Issued Convex Tokens"));
children.push(para(
  "The primary provider for the project's own sign-in flow. Uses the Convex deployment's own OpenID Connect configuration at ${CONVEX_SITE_URL}/.well-known/openid-configuration. Tokens are issued by the deployment itself and validated via OIDC discovery. The applicationID is \"convex\"."
));

children.push(heading3("Issuer 2: Freebuff Federated Tokens"));
children.push(para(
  "A customJwt provider that validates tokens issued by Freebuff's platform. Uses RS256 algorithm with JWKS endpoint at ${freebuffIssuer}/api/web/.well-known/jwks.json. The applicationID is \"vly-convex\". This allows Freebuff.com users to carry their identity into this project without going through local sign-in."
));

children.push(heading2("8.4 JWT Validation"));

children.push(para(
  "The auth configuration explicitly notes that the self-issued Convex tokens must NOT be converted to customJwt type, because Convex self-issued tokens lack the kid (Key ID) header that customJwt validation requires. Converting them would cause sign-in to silently fail and RequireAuth to loop back to /auth indefinitely."
));

children.push(heading2("8.5 Frontend Auth Hook"));

children.push(para(
  "The useAuth hook (src/hooks/use-auth.ts) is the single source of truth for authentication state on the frontend. It combines three sources:"
));

children.push(bullet("useConvexAuth() — provides isLoading and isAuthenticated from Convex's built-in auth state"));
children.push(bullet("useQuery(api.users.currentUser) — provides the actual user document with name, email, role, etc."));
children.push(bullet("useAuthActions() — provides signIn and signOut functions"));

children.push(para(
  "The derived isLoading state combines both the auth loading state and the user query loading state: isLoading = isAuthLoading || user === undefined. This ensures the UI shows a loading state until both the auth check completes AND the user data is available."
));

children.push(heading2("8.6 Protected Routes"));

children.push(para(
  "The RequireAuth component (src/components/RequireAuth.tsx) wraps all authenticated routes (/dashboard, /profile, /internships). It implements a three-state flow:"
));

children.push(bullet("Loading: Shows a spinning Loader2 icon while auth state is being determined"));
children.push(bullet("Unauthenticated: Redirects to /auth with the current path as a returnTo query parameter"));
children.push(bullet("Authenticated: Renders the children components"));

children.push(para(
  "The returnTo parameter uses encodeURIComponent to safely pass the original URL, and the auth page validates it against open redirect attacks."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 9: FRONTEND PAGES & ROUTING
// ════════════════════════════════════════════════

children.push(heading1("9. Frontend: Pages & Routing"));

children.push(heading2("9.1 Route Table"));

children.push(
  simpleTable(
    ["Route", "Component", "Auth Required", "Description"],
    [
      ["/", "Landing", "No", "Marketing landing page"],
      ["/auth", "AuthPage", "No", "Email OTP + guest login"],
      ["/dashboard", "Dashboard", "Yes", "Personalized dashboard"],
      ["/profile", "ProfileSetup", "Yes", "Multi-step profile wizard"],
      ["/internships", "Internships", "Yes", "Internship browser"],
      ["*", "NotFound", "No", "404 page"],
    ]
  )
);

children.push(heading2("9.2 Router Configuration"));

children.push(para(
  "The router is configured in src/main.tsx using React Router v7's BrowserRouter. All imports use the react-router package (not react-router-dom). Routes are wrapped in Suspense for lazy-loading support, and the RouteSyncer component handles iframe communication."
));

children.push(heading2("9.3 Code Splitting Strategy"));

children.push(para(
  "Every page component is lazy-loaded using React.lazy():"
));

children.push(code("const Landing = lazy(() => import(\"./pages/Landing.tsx\"));"));
children.push(code("const AuthPage = lazy(() => import(\"./pages/Auth.tsx\"));"));
children.push(code("const Dashboard = lazy(() => import(\"./pages/Dashboard.tsx\"));"));
children.push(code("const ProfileSetup = lazy(() => import(\"./pages/ProfileSetup.tsx\"));"));
children.push(code("const Internships = lazy(() => import(\"./pages/Internships.tsx\"));"));
children.push(code("const NotFound = lazy(() => import(\"./pages/NotFound.tsx\"));"));

children.push(para(
  "This means the initial JavaScript bundle only contains the app shell (router, providers, CSS). Each page's code is fetched on-demand when the user navigates to it. The Suspense boundary shows a pulsing \"Loading...\" indicator during page transitions."
));

children.push(heading2("9.4 Route Synchronization"));

children.push(para(
  "The RouteSyncer component in main.tsx handles two directions of communication with the parent iframe (used by the Freebuff platform):"
));

children.push(bulletBold("Outbound: ", "Posts iframe-route-change messages to window.parent whenever the route changes, enabling the platform to track navigation state."));
children.push(bulletBold("Inbound: ", "Listens for navigate messages from the parent to handle back/forward navigation via window.history.back() and window.history.forward()."));

children.push(heading2("9.5 Auth Redirect Logic"));

children.push(para(
  "The auth page implements a secure redirect resolution system:"
));

children.push(code("function resolveRedirectAfterAuth(returnTo: string | null, fallback = \"/dashboard\") {"));
children.push(code("  if (returnTo?.startsWith(\"/\") && !returnTo.startsWith(\"//\")) {"));
children.push(code("    return returnTo;  // validated same-origin path"));
children.push(code("  }"));
children.push(code("  return fallback;    // defaults to /dashboard"));
children.push(code("}"));

children.push(para(
  "This prevents open redirect attacks by ensuring the returnTo parameter starts with a single slash (same-origin path) and doesn't start with double slashes (which would indicate a protocol-relative URL like //evil.com)."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 10: COMPONENTS & UI
// ════════════════════════════════════════════════

children.push(heading1("10. Frontend: Components & UI Patterns"));

children.push(heading2("10.1 Custom Components"));

children.push(heading3("RequireAuth (src/components/RequireAuth.tsx)"));
children.push(para(
  "An authentication gate component that protects routes. It uses the useAuth hook to check authentication status and the useLocation hook to capture the current path for the returnTo parameter. During loading, it renders a centered Loader2 spinner. If not authenticated, it renders a Navigate component with replace=true to redirect to /auth."
));

children.push(heading3("LogoDropdown (src/components/LogoDropdown.tsx)"));
children.push(para(
  "A dropdown menu component triggered by clicking the app logo. It uses shadcn/ui's DropdownMenu component with two items: \"Landing Page\" (navigates to /) and \"Sign Out\" (calls signOut() then navigates to /). The sign-out item is only visible when authenticated."
));

children.push(heading2("10.2 shadcn/ui Usage Patterns"));

children.push(para(
  "The project follows consistent patterns for shadcn/ui component usage:"
));

children.push(heading3("Card Styling"));
children.push(para(
  "Cards use the Claymorphism system consistently: the outer card gets className=\"clay-card border-0\" (the border-0 removes the default shadcn border in favor of the clay shadow system). Inner cards and sections use \"clay-card-sm\" or \"clay-inset\" for visual hierarchy."
));

children.push(heading3("Button Styling"));
children.push(para(
  "Primary action buttons use the clay-button class for the tactile press effect: \"clay-button rounded-xl px-6 h-10 font-semibold\". Outline buttons use \"clay-inset border-0\" for the recessed look. All clickable elements include cursor-pointer for proper mouse interaction."
));

children.push(heading3("Badge Usage"));
children.push(para(
  "Badges serve multiple purposes: skill tags (variant=\"secondary\" className=\"rounded-lg\"), match scores (clay-inset containers), type indicators (color-coded backgrounds), and status labels (conditional colors based on application status)."
));

children.push(heading2("10.3 Loading States"));

children.push(para(
  "The project uses a consistent loading state pattern across all pages: a centered, pulsing Loader2 spinner from Lucide React with text-muted-foreground color. This avoids skeleton components in favor of a simpler, more consistent loading experience."
));

children.push(heading2("10.4 Error Boundaries"));

children.push(para(
  "Three error boundaries provide comprehensive crash resilience:"
));

children.push(bulletBold("RootErrorBoundary: ", "Catches any unhandled React error in the entire app. Renders a fallback UI with the error message and expandable stack trace. Prevents the dreaded blank white screen."));
children.push(bulletBold("ToolbarErrorBoundary: ", "Specifically catches errors from VlyToolbar (Freebuff's dev toolbar) so toolbar issues don't crash the main app. If an error is caught, it renders nothing (silent failure)."));
children.push(bulletBold("InstrumentationProvider: ", "The most comprehensive handler. Catches React errors via class ErrorBoundary, global window.onerror events, and unhandled promise rejections. Reports all errors to Freebuff's monitoring endpoint and displays an ErrorDialog with user-friendly messaging and technical details."));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 11: DESIGN SYSTEM
// ════════════════════════════════════════════════

children.push(heading1("11. Design System: Claymorphism"));

children.push(heading2("11.1 Design Philosophy"));

children.push(para(
  "AyurSetu implements a custom visual design language called \"Claymorphism\" — a soft, tactile design system inspired by clay/earth tones that aligns with the Ayurvedic theme. The design philosophy draws from the natural, organic feel of Ayurvedic medicine and translates it into a digital interface that feels warm, approachable, and premium."
));

children.push(para(
  "The key principles of Claymorphism are:"
));

children.push(bulletBold("Tactile Depth: ", "Every interactive surface has a physical, touchable quality achieved through dual box-shadows: a darker shadow on the lower-left (simulating a light source from the upper-right) and a lighter highlight on the upper-right (simulating light reflection). This creates a convincing 3D embossed effect."));
children.push(bulletBold("Visual Hierarchy: ", "Three levels of surface depth: raised (clay-card) for primary containers, slightly raised (clay-card-sm) for secondary elements, and inset (clay-inset) for recessed elements like inputs and stat containers. This depth hierarchy guides the user's eye naturally."));
children.push(bulletBold("Interactive Feedback: ", "Buttons respond to user interaction through shadow inversion and translateY transforms. On hover, shadows reduce and the button moves down 1px. On click, shadows become inset (pressed) and the button moves down 2px. This creates a satisfying tactile response."));
children.push(bulletBold("Organic Shapes: ", "Extremely rounded corners (1rem to 2rem border-radius), pill-shaped badges, and rounded containers create a soft, organic feel. Sharp angles are avoided throughout."));

children.push(heading2("11.2 Color Palette & OKLCH"));

children.push(para(
  "All colors are defined using the OKLCH (OK Lightness Chroma Hue) color space in src/index.css. OKLCH is superior to traditional HSL because it provides perceptually uniform color representation — the same change in numeric values produces the same perceived change in color, regardless of hue."
));

children.push(
  simpleTable(
    ["Token", "Light Value", "Dark Value", "Semantic Meaning"],
    [
      ["--leaf", "oklch(0.52 0.12 155)", "oklch(0.65 0.14 155)", "Primary green (Ayurvedic leaf)"],
      ["--leaf-light", "oklch(0.85 0.08 155)", "oklch(0.30 0.06 155)", "Light green tint"],
      ["--saffron", "oklch(0.72 0.12 85)", "oklch(0.75 0.12 85)", "Accent yellow-orange"],
      ["--saffron-light", "oklch(0.90 0.08 85)", "oklch(0.30 0.05 85)", "Light saffron tint"],
      ["--terracotta", "oklch(0.60 0.14 25)", "oklch(0.65 0.18 25)", "Warm red-brown"],
      ["--sky", "oklch(0.70 0.08 230)", "oklch(0.75 0.08 230)", "Cool blue accent"],
      ["--clay", "oklch(0.94 0.015 100)", "oklch(0.25 0.02 160)", "Surface background"],
      ["--clay-deep", "oklch(0.88 0.025 100)", "oklch(0.20 0.03 160)", "Darker surface"],
    ]
  )
);

children.push(para(
  "The color names are intentionally evocative of Ayurvedic and natural imagery: \"leaf\" for the primary green (representing herbal medicine), \"saffron\" for the warm accent (a sacred herb in Ayurveda), \"terracotta\" for the warm red (earth/clay), \"sky\" for the cool accent, and \"clay\" for the base surfaces."
));

children.push(heading2("11.3 CSS Utility Classes"));

children.push(para(
  "Six custom utility classes are defined in src/index.css under @layer utilities:"
));

children.push(
  simpleTable(
    ["Class", "Border Radius", "Shadow Style", "Use Case"],
    [
      [".clay-card", "1.5rem", "8px 8px 16px dark + -4px -4px 12px light", "Primary containers, cards"],
      [".clay-card-sm", "1.25rem", "5px 5px 10px dark + -3px -3px 8px light", "Secondary cards, badges"],
      [".clay-inset", "1rem", "inset 4px 4px 8px dark + inset -2px -2px 6px light", "Inputs, stat containers"],
      [".clay-button", "1rem", "4px 4px 8px dark + -2px -6px light + inset highlight", "Interactive buttons"],
      [".clay-pill", "9999px (full)", "3px 3px 6px dark + -2px -4px light", "Tags, badges, pills"],
      [".clay-surface", "N/A", "145deg linear gradient", "Gradient backgrounds"],
    ]
  )
);

children.push(heading2("11.4 Dark Mode Implementation"));

children.push(para(
  "Every claymorphism class has a corresponding .dark variant. In dark mode:"
));

children.push(bullet("Shadow intensities increase (darker shadow backgrounds with higher opacity)"));
children.push(bullet("Light highlights become more subtle (reduced opacity from 0.6 to 0.3)"));
children.push(bullet("Border colors shift to darker tones"));
children.push(bullet("All OKLCH color tokens shift to their dark-mode variants"));

children.push(para(
  "The dark mode is toggled via the .dark class on a parent element, with the custom variant @custom-variant dark (&:is(.dark *)) enabling class-based activation."
));

children.push(heading2("11.5 Decorative Elements"));

children.push(para(
  "The landing page and auth page use decorative blurred circles positioned absolutely behind the main content. These are large divs with background colors at low opacity (15-30%) and large blur radius (blur-3xl = 64px), creating soft, colorful ambient light effects:"
));

children.push(code("<div className=\"absolute top-20 left-10 w-72 h-72 bg-leaf-light/30 rounded-full blur-3xl\" />"));
children.push(code("<div className=\"absolute top-40 right-10 w-96 h-96 bg-saffron-light/20 rounded-full blur-3xl\" />"));
children.push(code("<div className=\"absolute bottom-0 left-1/3 w-80 h-80 bg-sky-light/20 rounded-full blur-3xl\" />"));

children.push(para(
  "These decorative elements add visual richness without introducing actual content or affecting accessibility, and they create a distinctive, branded feel that differentiates AyurSetu from generic web applications."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 12: MATCHING ALGORITHM
// ════════════════════════════════════════════════

children.push(heading1("12. The Skill-Matching Algorithm"));

children.push(heading2("12.1 Algorithm Description"));

children.push(para(
  "The skill-matching algorithm is the intellectual core of AyurSetu. It determines which internships are most relevant to each student by comparing the student's declared skills and interests against each internship's required and preferred skills."
));

children.push(para(
  "The algorithm is implemented identically in two places: the getMatches query (for displaying ranked internship lists) and the apply mutation (for computing the score stored with each application)."
));

children.push(heading2("12.2 Weight Distribution"));

children.push(
  simpleTable(
    ["Component", "Weight", "Rationale"],
    [
      ["Required skills match", "70%", "Mandatory qualifications — missing them is a strong negative signal for internship fit"],
      ["Preferred skills match", "30%", "Nice-to-haves that improve candidacy but aren't disqualifying"],
    ]
  )
);

children.push(para(
  "The 70/30 split ensures that internships requiring skills the student has are prioritized, while still giving credit for matching preferred (but optional) skills. This prevents a student with 0 required matches but 5 preferred matches from outranking a student with 3 required matches and 0 preferred matches."
));

children.push(heading2("12.3 Worked Example"));

children.push(heading3("Scenario: BAMS Student Applying to CCRAS Internship"));

children.push(para("Student Profile:"));
children.push(bullet("Skills: [\"Clinical Research\", \"Ayurvedic Medicine\", \"Literature Review\"]"));
children.push(bullet("Interests: [\"Drug Development\", \"Herbal Medicine\"]"));
children.push(bullet("studentSkills (combined, lowercased): [\"clinical research\", \"ayurvedic medicine\", \"literature review\", \"drug development\", \"herbal medicine\"]"));

children.push(para("Internship — CCRAS Clinical Research Intern:"));
children.push(bullet("requiredSkills: [\"Clinical Research\", \"Ayurvedic Medicine\", \"Literature Review\"]"));
children.push(bullet("preferredSkills: [\"Data Analysis\", \"Medical Writing\", \"SPSS\", \"R\"]"));

children.push(para("Calculation:"));
children.push(code("requiredMatches = 3 (all 3 required skills found in studentSkills)"));
children.push(code("totalRequired = 3"));
children.push(code("requiredScore = (3/3) * 70 = 70"));
children.push(code(""));
children.push(code("preferredMatches = 0 (none of the 4 preferred skills found)"));
children.push(code("totalPreferred = 4"));
children.push(code("preferredScore = (0/4) * 30 = 0"));
children.push(code(""));
children.push(code("matchScore = round(70 + 0) = 70%"));

children.push(heading3("Scenario: Same Student, Different Internship"));

children.push(para("Internship — IIT Hyderabad Ayurveda AI Research:"));
children.push(bullet("requiredSkills: [\"Python\", \"Machine Learning\", \"Data Processing\"]"));
children.push(bullet("preferredSkills: [\"NLP\", \"Sanskrit\", \"Knowledge Graphs\", \"PyTorch\", \"Ayurvedic Medicine\"]"));

children.push(para("Calculation:"));
children.push(code("requiredMatches = 0 (student has no Python/ML/Data Processing skills)"));
children.push(code("totalRequired = 3"));
children.push(code("requiredScore = (0/3) * 70 = 0"));
children.push(code(""));
children.push(code("preferredMatches = 1 (\"Ayurvedic Medicine\" found in studentSkills)"));
children.push(code("totalPreferred = 5"));
children.push(code("preferredScore = (1/5) * 30 = 6"));
children.push(code(""));
children.push(code("matchScore = round(0 + 6) = 6%"));

children.push(para(
  "This demonstrates the algorithm correctly identifying that a clinical Ayurveda student is a poor match for an AI research position, despite the interesting Ayurveda + AI intersection."
));

children.push(heading2("12.4 Implementation Details"));

children.push(para(
  "The algorithm has several important implementation characteristics:"
));

children.push(bulletBold("Case-Insensitive: ", "All skill comparisons are done after toLowerCase(), ensuring \"Panchakarma\" matches \"panchkarma\" or \"PANCHAKARMA\"."));
children.push(bulletBold("Normalized Scoring: ", "Even if one internship has 10 required skills and another has 2, the percentage is relative to each internship's specific requirements. This prevents internships with many skills from having inherently low scores."));
children.push(bulletBold("Division by Zero Prevention: ", "The code uses (length || 1) to prevent division by zero when an internship has empty skill arrays."));
children.push(bulletBold("Score Snapshot: ", "Match scores are computed and stored at application time (in the apply mutation), not dynamically recalculated. This preserves the historical match value even if the student's skills change later."));

children.push(heading2("12.5 Limitations & Design Choices"));

children.push(para(
  "The current algorithm has several deliberate limitations:"
));

children.push(bulletBold("No Fuzzy Matching: ", "\"Herbal Medicine\" won't automatically match \"Herbal Extraction\" — this is intentional for accuracy. False matches would be more damaging than missed matches in a professional context."));
children.push(bulletBold("No Semantic Understanding: ", "The algorithm doesn't understand that \"Kayachikitsa\" is related to \"Internal Medicine\" — it requires exact string matches (case-insensitive)."));
children.push(bulletBold("No Profile Completeness Factor: ", "A student with 2 skills and a student with 10 skills aren't treated differently in terms of score computation, though the student with more skills will likely have more matches."));
children.push(bulletBold("No Time Decay: ", "Older internships aren't penalized for being posted longer. The deadline field exists for display but isn't factored into scoring."));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTER 13: STATE MANAGEMENT
// ════════════════════════════════════════════════

children.push(heading1("13. User Flows & State Management"));

children.push(heading2("13.1 Complete User Journey"));

children.push(para(
  "The complete user journey through AyurSetu follows these steps:"
));

children.push(bulletBold("Step 1 — Discovery: ", "User visits / and sees the landing page with features, stats, testimonials, and CTAs. Clicks \"Get Started\" or \"Start Your Journey\"."));
children.push(bulletBold("Step 2 — Authentication: ", "User is redirected to /auth. Enters email → receives OTP → verifies. Or clicks \"Continue as Guest\" for anonymous access."));
children.push(bulletBold("Step 3 — Profile Setup (new users only): ", "If the user has no profile (profile query returns null), they are redirected to /profile. The 3-step wizard collects personal details, skills, and interests. Profile is saved with completedProfile = true."));
children.push(bulletBold("Step 4 — Dashboard: ", "User arrives at /dashboard and sees: welcome message, 4 stat cards, profile summary, top 5 matched internships, and recent applications."));
children.push(bulletBold("Step 5 — Internship Discovery: ", "User clicks \"View All\" to see the full list at /internships. Uses search and type filters to narrow results. Views detailed skill matching (checkmarks for matched skills)."));
children.push(bulletBold("Step 6 — Application: ", "User clicks \"Apply Now\" on an internship. The application is created with a computed match score. A toast notification confirms. The button changes to \"Applied\" badge."));
children.push(bulletBold("Step 7 — Tracking: ", "User returns to dashboard to see updated stats and application list. Can monitor application status (pending → accepted/rejected) and withdraw if needed."));

children.push(heading2("13.2 Convex Reactive State Management"));

children.push(para(
  "AyurSetu uses Convex's reactive query system as its primary state management solution — there are no additional state management libraries like Redux, Zustand, or Jotai."
));

children.push(
  simpleTable(
    ["State", "Source", "Reactivity Mechanism"],
    [
      ["Current user", "useQuery(api.users.currentUser)", "WebSocket subscription — auto-updates when user data changes"],
      ["User profile", "useQuery(api.profiles.getMyProfile)", "WebSocket subscription — auto-updates after profile edits"],
      ["Matched internships", "useQuery(api.internships.getMatches)", "WebSocket subscription — auto-updates when skills or internships change"],
      ["Applications", "useQuery(api.applications.getMyApplications)", "WebSocket subscription — auto-updates after applying/withdrawing"],
      ["Skills catalog", "useQuery(api.skills.listAll)", "WebSocket subscription — rarely changes after seeding"],
      ["Auth state", "useConvexAuth()", "Built-in Convex auth state"],
    ]
  )
);

children.push(para(
  "The key benefit of this approach is automatic cache invalidation. When a mutation writes to a table (e.g., apply creates a new application), Convex automatically re-evaluates all queries that depend on that table (e.g., getMyApplications) and pushes the updated result to all subscribed clients. This eliminates the need for manual refetching, cache invalidation, or optimistic updates."
));

children.push(heading2("13.3 Local UI State Patterns"));

children.push(para(
  "UI-specific state that doesn't need to persist or share across components uses React's useState hook:"
));

children.push(bullet("Search query and type filter in Internships page"));
children.push(bullet("Form field values in ProfileSetup (fullName, university, degree, etc.)"));
children.push(bullet("Current wizard step in ProfileSetup (1, 2, or 3)"));
children.push(bullet("OTP value and current step in Auth page"));
children.push(bullet("Loading/submitting states (isSubmitting, applyingId)"));
children.push(bullet("Error messages (error state in Auth page)"));

children.push(heading2("13.4 Conditional Query Skipping"));

children.push(para(
  "Convex queries can be conditionally skipped using the \"skip\" sentinel. This prevents queries from executing with invalid arguments:"
));

children.push(code("const matches = useQuery("));
children.push(code("  api.internships.getMatches,"));
children.push(code("  profile ? { profileId: profile._id } : \"skip\""));
children.push(code(");"));

children.push(para(
  "When profile is undefined (still loading), the query is skipped entirely. When profile is null (no profile exists), the query is also skipped. Only when profile is a valid document does the query execute with the profile's ID. This pattern prevents null pointer errors and unnecessary network requests."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTERS 14-16: SECURITY, PERFORMANCE, ERRORS
// ════════════════════════════════════════════════

children.push(heading1("14. Security & Authorization"));

children.push(heading2("14.1 Backend Auth Checks"));

children.push(para(
  "Every authenticated Convex function starts with the same authorization pattern: calling getAuthUserId(ctx) to extract the user's ID from the JWT token in the request context. If no valid token is present, the function throws an error immediately. This ensures no unauthenticated user can read or write data through any protected function."
));

children.push(heading2("14.2 Ownership Validation"));

children.push(para(
  "The withdraw mutation performs ownership validation: it checks that the application being withdrawn belongs to the requesting user by comparing application.studentId with the user's profile._id. This prevents one user from modifying another user's applications."
));

children.push(heading2("14.3 Business Rule Enforcement"));

children.push(para(
  "The apply mutation enforces 5 sequential business rules: (1) authentication check, (2) profile existence check, (3) duplicate application prevention via the by_student_internship index, (4) internship existence check, and (5) internship open status check. Each violation throws a descriptive error message."
));

children.push(heading2("14.4 Frontend Route Protection"));

children.push(para(
  "The RequireAuth component prevents unauthenticated access to protected routes. It checks the auth state, and if not authenticated, redirects to /auth with the current path preserved as a returnTo parameter. This ensures users can resume their intended action after signing in."
));

children.push(heading2("14.5 Redirect Safety"));

children.push(para(
  "The auth page validates returnTo parameters to prevent open redirect attacks. The validation ensures the parameter starts with a single slash (same-origin path) and doesn't start with double slashes (protocol-relative URL). This prevents an attacker from crafting a URL like /auth?returnTo=//evil.com that would redirect the user to a malicious site after authentication."
));

children.push(heading1("15. Performance & Code Splitting"));

children.push(heading2("15.1 Lazy Loading"));

children.push(para(
  "Every page component is lazy-loaded via React.lazy(), splitting the application into route-level code chunks. The initial bundle contains only the app shell: router configuration, Convex providers, error boundaries, and CSS. Each page's JavaScript is fetched on-demand when the user navigates to it. The Suspense boundary provides a loading indicator during chunk loading."
));

children.push(heading2("15.2 Convex Reactivity Efficiency"));

children.push(para(
  "Convex's WebSocket-based subscription model eliminates several performance pitfalls common in traditional web applications: no redundant polling for data updates, no complex client-side cache management, and no waterfall of sequential API calls. The server computes query results and only sends diffs to subscribed clients, minimizing data transfer."
));

children.push(heading2("15.3 Idempotent Data Seeding"));

children.push(para(
  "The seed mutation is called on every dashboard and profile page load but is designed to be safe: it checks if any internships exist before inserting, returning \"already_seeded\" if so. This ensures the app always has data without requiring a separate migration script or manual intervention."
));

children.push(heading1("16. Error Handling & Monitoring"));

children.push(heading2("16.1 Three-Layer Error Boundary System"));

children.push(para(
  "The application implements a comprehensive three-layer error boundary system:"
));

children.push(heading3("Layer 1: RootErrorBoundary"));
children.push(para(
  "Defined in src/main.tsx as a class component wrapping the entire app. Catches any unhandled React rendering error via getDerivedStateFromError and componentDidCatch. Renders a fallback UI showing the error message and an expandable pre-formatted stack trace. This prevents the dreaded blank white screen when any component crashes."
));

children.push(heading3("Layer 2: ToolbarErrorBoundary"));
children.push(para(
  "Also in src/main.tsx, specifically wrapping the VlyToolbar component. If the toolbar crashes (e.g., due to hook errors in the WebContainer environment), it silently renders null instead of crashing the entire application. The error is logged to console.warn."
));

children.push(heading3("Layer 3: InstrumentationProvider"));
children.push(para(
  "Defined in src/instrumentation.tsx, this is the most comprehensive handler. It includes: a class ErrorBoundary for React errors, window.addEventListener('error') for global JS runtime errors, and window.addEventListener('unhandledrejection') for unhandled promise rejections. All errors are normalized into a GenericError shape (message, stack, filename, line number, column number, component stack) and reported to Freebuff's monitoring endpoint."
));

children.push(heading2("16.2 Toast Notifications"));

children.push(para(
  "User-facing errors are displayed via Sonner toast notifications rather than alert dialogs or inline error messages. This provides a non-blocking, dismissible notification that doesn't interrupt the user's workflow."
));

children.push(heading2("16.3 Backend Error Propagation"));

children.push(para(
  "Convex functions throw descriptive Error objects with specific messages (\"Not authenticated\", \"Complete your profile first\", \"Already applied to this internship\", \"Internship not found\", \"Internship is closed\"). These error messages propagate to the frontend where they are caught in try/catch blocks and displayed via toast notifications."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTERS 17-18: SEED DATA & FILE STRUCTURE
// ════════════════════════════════════════════════

children.push(heading1("17. Seed Data & Domain Vocabulary"));

children.push(heading2("17.1 Seeded Internships (10)"));

children.push(para(
  "The application ships with 10 carefully designed internships representing the diversity of the AYUSH ecosystem:"
));

children.push(
  simpleTable(
    ["#", "Organization", "Title", "Type", "Location", "Stipend", "Duration"],
    [
      ["1", "CCRAS", "Clinical Research Intern - Ayurvedic Pharmacology", "Research", "New Delhi", "₹18,000/mo", "6 months"],
      ["2", "Himalaya Wellness", "Herbal Medicine Formulation Intern", "Industry", "Bengaluru", "₹15,000/mo", "3 months"],
      ["3", "Kottakkal Arya Vaidya Sala", "Panchakarma Therapy Assistant", "Clinical", "Kerala", "₹12,000/mo", "6 months"],
      ["4", "Ministry of AYUSH", "Digital Health Data Intern", "Government", "New Delhi", "₹20,000/mo", "3 months"],
      ["5", "Dabur India Ltd.", "Ayurvedic Product QA Intern", "Industry", "Ghaziabad", "₹16,000/mo", "6 months"],
      ["6", "MDNIY", "Yoga & Naturopathy Research Intern", "Research", "New Delhi", "₹14,000/mo", "3 months"],
      ["7", "IIT Hyderabad", "Ayurveda AI & NLP Research Intern", "Research", "Hybrid", "₹25,000/mo", "6 months"],
      ["8", "Kairali Ayurvedic Village", "Wellness Tourism Coordinator", "Industry", "Kerala", "₹10,000/mo + stay", "3 months"],
      ["9", "CSIR-NBRI", "Ayurvedic Drug Discovery Intern", "Research", "Lucknow", "₹22,000/mo", "6 months"],
      ["10", "AYUSH Ministry - NHM", "Public Health Outreach Intern", "Government", "Pan-India", "₹16,000/mo", "3 months"],
    ]
  )
);

children.push(heading2("17.2 Seeded Skills Taxonomy (47)"));

children.push(
  simpleTable(
    ["Category", "Count", "Sample Skills"],
    [
      ["Ayurveda", "14", "Ayurvedic Medicine, Panchakarma, Herbal Medicine, Rasashastra, Dravyaguna, Kayachikitsa, Shalya Tantra, Yoga, Naturopathy"],
      ["Research", "9", "Clinical Research, Pharmacognosy, Phytochemistry, Botany, Analytical Chemistry, Medical Writing"],
      ["Technology", "12", "Python, R, Machine Learning, NLP, Data Analysis, Tableau, Power BI, SPSS, Statistics"],
      ["Quality", "6", "HPLC, HPTLC, Quality Control, GMP, Herbal Extraction, Laboratory Skills"],
      ["Professional", "10", "Communication, Patient Care, Event Management, Community Health, Digital Marketing"],
    ]
  )
);

children.push(heading2("17.3 Ayurvedic Degree Types"));

children.push(para("The profile setup wizard offers these degree options:"));
children.push(bullet("BAMS (Bachelor of Ayurvedic Medicine and Surgery)"));
children.push(bullet("MD Ayurveda / MS Ayurveda / PhD Ayurveda"));
children.push(bullet("M.Sc Botany / Chemistry / Pharmacology / Yoga"));
children.push(bullet("B.Sc Nursing"));
children.push(bullet("Diploma in Ayurveda"));
children.push(bullet("Other"));

children.push(heading1("18. Project File Structure"));

children.push(para(
  "The project follows a clean, conventional file structure with clear separation of concerns:"
));

children.push(heading2("18.1 Root-Level Files"));

children.push(bulletBold("index.html: ", "HTML entry point with meta tags, favicon, and PWA manifest link"));
children.push(bulletBold("package.json: ", "Dependencies, scripts (dev, build, lint, format, preview)"));
children.push(bulletBold("tsconfig.json: ", "TypeScript config with path aliases (references app and node configs)"));
children.push(bulletBold("components.json: ", "shadcn/ui configuration (new-york style, lucide icons)"));
children.push(bulletBold("README.md: ", "Comprehensive project documentation with conventions"));
children.push(bulletBold("integrations.md: ", "VLY integrations usage guide"));

children.push(heading2("18.2 Source Directory"));

children.push(bulletBold("src/main.tsx: ", "App entry point with router, providers, error boundaries"));
children.push(bulletBold("src/index.css: ", "Global styles, Tailwind config, Claymorphism utilities, color tokens"));
children.push(bulletBold("src/pages/: ", "6 page components (Landing, Auth, Dashboard, ProfileSetup, Internships, NotFound)"));
children.push(bulletBold("src/components/: ", "RequireAuth, LogoDropdown, plus 55+ shadcn/ui components in ui/"));
children.push(bulletBold("src/hooks/: ", "use-auth.ts (auth state), use-mobile.ts (responsive detection)"));
children.push(bulletBold("src/lib/: ", "utils.ts (cn() class merger), vly-integrations.ts (Freebuff config)"));
children.push(bulletBold("src/types/: ", "global.d.ts (Window interface augmentation)"));
children.push(bulletBold("src/instrumentation.tsx: ", "Error boundary + monitoring system"));

children.push(heading2("18.3 Convex Directory"));

children.push(bulletBold("schema.ts: ", "Database schema definition (6 tables, validators, indexes)"));
children.push(bulletBold("auth.ts: ", "Convex Auth setup (DO NOT EDIT)"));
children.push(bulletBold("auth.config.ts: ", "JWT validation config (DO NOT EDIT)"));
children.push(bulletBold("http.ts: ", "HTTP router with auth routes"));
children.push(bulletBold("users.ts: ", "User queries"));
children.push(bulletBold("profiles.ts: ", "Profile CRUD operations"));
children.push(bulletBold("internships.ts: ", "Internship queries, matching algorithm, seeding"));
children.push(bulletBold("applications.ts: ", "Application CRUD operations"));
children.push(bulletBold("skills.ts: ", "Skills catalog queries"));
children.push(bulletBold("auth/emailOtp.ts: ", "Email OTP provider (DO NOT EDIT)"));

children.push(pageBreak());

// ════════════════════════════════════════════════
// CHAPTERS 19-20: DEPLOYMENT & FUTURE
// ════════════════════════════════════════════════

children.push(heading1("19. Deployment & Environment"));

children.push(heading2("19.1 Freebuff Platform"));

children.push(para(
  "AyurSetu runs on Freebuff, a browser-runtime-based development and deployment platform. Freebuff manages the Vite dev server and Convex dev process in background sessions, automatically pushing Convex function changes when files under src/convex/ are edited and running TypeScript type checking after every code change."
));

children.push(para(
  "Key platform behaviors: HMR is disabled for stable iframe-based previews; file edits are picked up automatically without server restarts; Convex codegen is triggered via convex dev --once when backend files change; and the environment uses Bun as the package manager."
));

children.push(heading2("19.2 Environment Variables"));

children.push(
  simpleTable(
    ["Variable", "Location", "Purpose"],
    [
      ["VITE_CONVEX_URL", "Client (.env)", "Convex deployment URL for React client"],
      ["CONVEX_DEPLOYMENT", "Server", "Convex deployment key for backend"],
      ["VITE_VLY_APP_ID", "Client", "Freebuff application identifier"],
      ["VITE_VLY_MONITORING_URL", "Client", "Error reporting endpoint"],
      ["VLY_INTEGRATION_KEY", "Server", "Freebuff integrations key (sk_*)"],
      ["VLY_APP_NAME", "Server", "Application name for email OTP"],
      ["VLY_CONVEX_AUTH_ISSUER", "Server", "Freebuff auth issuer URL"],
      ["CONVEX_SITE_URL", "Server", "Convex deployment site URL"],
    ]
  )
);

children.push(para(
  "Environment variables follow a strict convention: VITE_-prefixed variables are exposed to the client via import.meta.env, while unprefixed variables are only accessible in Convex server functions (actions with 'use node' or the Convex backend environment)."
));

children.push(heading2("19.3 Build & Development Scripts"));

children.push(
  simpleTable(
    ["Command", "Purpose"],
    [
      ["bun run dev", "Start Vite dev server"],
      ["bun run build", "TypeScript check + Vite production build"],
      ["bun run lint", "ESLint code linting"],
      ["bun run format", "Prettier code formatting"],
      ["bun tsc -b --noEmit", "TypeScript type checking (no output)"],
      ["bun convex dev --once", "Push Convex functions + run codegen"],
    ]
  )
);

children.push(heading1("20. Future Roadmap & Extensibility"));

children.push(heading2("20.1 Short-Term Enhancements"));

children.push(bulletBold("Richer Matching Algorithm: ", "Incorporate degree type, year of study, and location preference into the score. A BAMS final-year student in Kerala might prefer local clinical internships over remote research roles."));
children.push(bulletBold("Internship Detail Pages: ", "Dedicated /internships/:id routes with full descriptions, organization profiles, and related opportunities."));
children.push(bulletBold("Application Withdrawal UI: ", "The withdraw mutation exists but no frontend triggers it. Adding a \"Withdraw\" button to application cards on the dashboard."));
children.push(bulletBold("Organization Admin Role: ", "Using the existing admin role in the users table to allow organizations to post and manage their own internships."));

children.push(heading2("20.2 Medium-Term Features"));

children.push(bulletBold("Notification System: ", "Real-time notifications when application status changes, using a notifications table with Convex reactive subscriptions."));
children.push(bulletBold("Saved Internships: ", "Bookmark/saved list functionality for tracking opportunities before applying."));
children.push(bulletBold("Advanced Search: ", "Filters by stipend range, duration, deadline proximity, and distance from the student's location."));
children.push(bulletBold("Resume Upload: ", "File upload with Convex file storage for organization-facing resume review."));

children.push(heading2("20.3 Long-Term Vision"));

children.push(bulletBold("AI-Powered Recommendations: ", "Using VLY AI integration for personalized recommendations based on profile analysis, not just keyword matching."));
children.push(bulletBold("In-Platform Messaging: ", "Real-time student-organization messaging via a messages table with Convex subscriptions."));
children.push(bulletBold("Analytics Dashboard: ", "Using Recharts (already installed) to visualize match trends, application success rates, and skill demand."));
children.push(bulletBold("PWA / Mobile App: ", "Progressive Web App or Capacitor shell for native-like mobile experience."));
children.push(bulletBold("Multi-Language Support: ", "Hindi, Tamil, Sanskrit, and other Indian language interfaces."));

children.push(heading2("20.4 Architecture Extensibility"));

children.push(para(
  "The Convex architecture is inherently extensible: new tables can be added to schema.ts with zero migration overhead; new queries/mutations are simply new exports from .ts files; new pages require only a new file in src/pages/ and a route in src/main.tsx; new UI components can be added via shadcn/ui CLI; and third-party integrations are available through the VLY integrations layer (AI, email, payments). The clean separation of concerns makes the codebase maintainable as it grows."
));

children.push(pageBreak());

// ════════════════════════════════════════════════
// APPENDICES
// ════════════════════════════════════════════════

children.push(heading1("Appendix A: Complete Dependency List"));

children.push(heading3("Production Dependencies (47 packages)"));

children.push(
  simpleTable(
    ["Package", "Version", "Purpose"],
    [
      ["@convex-dev/auth", "^0.0.90", "Authentication for Convex"],
      ["@hookform/resolvers", "^5.2.2", "Form validation resolvers"],
      ["@oslojs/crypto", "^1.0.1", "Cryptographic random OTP generation"],
      ["@radix-ui/react-*", "Various", "20+ Radix UI primitives (shadcn/ui foundation)"],
      ["@tailwindcss/vite", "^4.1.17", "Tailwind CSS Vite plugin"],
      ["@vly-ai/integrations", "^0.6.13", "Freebuff platform integrations"],
      ["@zumer/snapdom", "^2.0.1", "DOM snapshot utility"],
      ["axios", "^1.13.2", "HTTP client for OTP email API"],
      ["class-variance-authority", "^0.7.1", "Component variant management"],
      ["clsx", "^2.1.1", "Conditional class joining"],
      ["cmdk", "^1.1.1", "Command palette component"],
      ["convex", "^1.30.0", "Convex client and server SDK"],
      ["date-fns", "^4.1.0", "Date formatting utilities"],
      ["embla-carousel-react", "^8.6.0", "Carousel engine"],
      ["framer-motion", "^12.23.25", "Animation library"],
      ["hono", "^4.10.7", "HTTP framework for Convex router"],
      ["input-otp", "^1.4.2", "OTP input component"],
      ["lucide-react", "^0.555.0", "Icon library"],
      ["next-themes", "^0.4.6", "Dark mode support"],
      ["react", "^19.2.0", "UI framework"],
      ["react-day-picker", "9.13.0", "Calendar component"],
      ["react-dom", "^19.2.0", "React DOM renderer"],
      ["react-hook-form", "^7.67.0", "Form state management"],
      ["react-intersection-observer", "^10.0.0", "Lazy loading/scroll detection"],
      ["react-resizable-panels", "^3.0.6", "Resizable panels"],
      ["react-router", "^7.10.0", "Client-side routing"],
      ["recharts", "^2.15.4", "Chart library"],
      ["sonner", "^2.0.7", "Toast notifications"],
      ["tailwind-merge", "^3.4.0", "Tailwind class deduplication"],
      ["tailwindcss", "^4.1.17", "Utility-first CSS framework"],
      ["vaul", "^1.1.2", "Drawer component"],
      ["zod", "^4.1.13", "Schema validation"],
    ]
  )
);

children.push(heading3("Dev Dependencies (12 packages)"));

children.push(
  simpleTable(
    ["Package", "Version", "Purpose"],
    [
      ["@eslint/js", "^9.39.1", "ESLint JavaScript config"],
      ["@types/node", "^24.10.1", "Node.js type definitions"],
      ["@types/react", "^19.2.7", "React type definitions"],
      ["@types/react-dom", "^19.2.3", "React DOM type definitions"],
      ["@vitejs/plugin-react", "^5.1.1", "Vite React plugin"],
      ["eslint", "^9.39.1", "JavaScript linter"],
      ["eslint-config-prettier", "^10.1.8", "ESLint + Prettier compat"],
      ["eslint-plugin-react-hooks", "^7.0.1", "React hooks linting"],
      ["eslint-plugin-react-refresh", "^0.4.24", "React Refresh linting"],
      ["globals", "^16.5.0", "Global variables"],
      ["prettier", "3.7.3", "Code formatter"],
      ["typescript", "~5.9.3", "TypeScript compiler"],
    ]
  )
);

children.push(pageBreak());

children.push(heading1("Appendix B: All Convex Schema Validators"));

children.push(para(
  "The following table lists every field in the Convex schema with its corresponding validator function:"
));

children.push(
  simpleTable(
    ["Table", "Field", "Validator", "Notes"],
    [
      ["users", "name", "v.optional(v.string())", "Display name"],
      ["users", "image", "v.optional(v.string())", "Profile image URL"],
      ["users", "email", "v.optional(v.string())", "Email address"],
      ["users", "emailVerificationTime", "v.optional(v.number())", "Verification timestamp"],
      ["users", "isAnonymous", "v.optional(v.boolean())", "Guest account flag"],
      ["users", "role", "v.optional(roleValidator)", "admin | student"],
      ["profiles", "userId", "v.id(\"users\")", "FK to users"],
      ["profiles", "fullName", "v.string()", "Required"],
      ["profiles", "university", "v.string()", "Required"],
      ["profiles", "degree", "v.string()", "Free text"],
      ["profiles", "year", "v.string()", "Free text"],
      ["profiles", "skills", "v.array(v.string())", "Skill names"],
      ["profiles", "interests", "v.array(v.string())", "Interest names"],
      ["profiles", "experience", "v.string()", "Brief description"],
      ["profiles", "location", "v.string()", "Preferred location"],
      ["profiles", "bio", "v.optional(v.string())", "Optional bio"],
      ["profiles", "completedProfile", "v.boolean()", "Setup complete flag"],
      ["skills", "name", "v.string()", "Skill name"],
      ["skills", "category", "v.string()", "Category name"],
      ["internships", "title", "v.string()", "Internship title"],
      ["internships", "organization", "v.string()", "Org name"],
      ["internships", "description", "v.string()", "Full description"],
      ["internships", "requiredSkills", "v.array(v.string())", "Must-have skills"],
      ["internships", "preferredSkills", "v.array(v.string())", "Nice-to-have skills"],
      ["internships", "location", "v.string()", "Work location"],
      ["internships", "duration", "v.string()", "Duration text"],
      ["internships", "stipend", "v.string()", "Stipend text"],
      ["internships", "type", "v.string()", "Research|Clinical|Industry|Government"],
      ["internships", "status", "v.union(v.literal(\"open\"), v.literal(\"closed\"))", "Status"],
      ["internships", "deadline", "v.number()", "Unix timestamp"],
      ["internships", "contactEmail", "v.string()", "Contact email"],
      ["internships", "postedAt", "v.number()", "Unix timestamp"],
      ["applications", "studentId", "v.id(\"profiles\")", "FK to profiles"],
      ["applications", "internshipId", "v.id(\"internships\")", "FK to internships"],
      ["applications", "matchScore", "v.number()", "Computed score 0-100"],
      ["applications", "appliedAt", "v.number()", "Unix timestamp"],
      ["applications", "status", "v.union(v.literal(\"pending\"), v.literal(\"accepted\"), v.literal(\"rejected\"), v.literal(\"withdrawn\"))", "4-state machine"],
    ]
  )
);

children.push(pageBreak());

children.push(heading1("Appendix C: Complete Seed Data Catalog"));

children.push(heading3("All 47 Seeded Skills"));

children.push(
  simpleTable(
    ["#", "Skill Name", "Category"],
    [
      ["1", "Ayurvedic Medicine", "Ayurveda"],
      ["2", "Panchakarma", "Ayurveda"],
      ["3", "Herbal Medicine", "Ayurveda"],
      ["4", "Rasashastra", "Ayurveda"],
      ["5", "Dravyaguna", "Ayurveda"],
      ["6", "Kayachikitsa", "Ayurveda"],
      ["7", "Shalya Tantra", "Ayurveda"],
      ["8", "Shalakya Tantra", "Ayurveda"],
      ["9", "Prasuti Tantra", "Ayurveda"],
      ["10", "Kaumarabhritya", "Ayurveda"],
      ["11", "Ayurvedic Surgery", "Ayurveda"],
      ["12", "Yoga", "Ayurveda"],
      ["13", "Naturopathy", "Ayurveda"],
      ["14", "Siddha Medicine", "Ayurveda"],
      ["15", "Clinical Research", "Research"],
      ["16", "Research Methodology", "Research"],
      ["17", "Pharmacognosy", "Research"],
      ["18", "Phytochemistry", "Research"],
      ["19", "Botany", "Research"],
      ["20", "Analytical Chemistry", "Research"],
      ["21", "Literature Review", "Research"],
      ["22", "Medical Writing", "Research"],
      ["23", "Academic Writing", "Research"],
      ["24", "Python", "Technology"],
      ["25", "R", "Technology"],
      ["26", "Machine Learning", "Technology"],
      ["27", "NLP", "Technology"],
      ["28", "Data Analysis", "Technology"],
      ["29", "Data Visualization", "Technology"],
      ["30", "Tableau", "Technology"],
      ["31", "Power BI", "Technology"],
      ["32", "SPSS", "Technology"],
      ["33", "Statistics", "Technology"],
      ["34", "MS Excel", "Technology"],
      ["35", "HPLC", "Quality"],
      ["36", "HPTLC", "Quality"],
      ["37", "Quality Control", "Quality"],
      ["38", "GMP", "Quality"],
      ["39", "Laboratory Skills", "Quality"],
      ["40", "Herbal Extraction", "Quality"],
      ["41", "Communication", "Professional"],
      ["42", "Patient Care", "Professional"],
      ["43", "Event Management", "Professional"],
      ["44", "Data Entry", "Professional"],
      ["45", "Report Writing", "Professional"],
      ["46", "Community Health", "Professional"],
      ["47", "Public Health", "Professional"],
    ]
  )
);

// ════════════════════════════════════════════════
// BUILD THE DOCUMENT
// ════════════════════════════════════════════════

const doc = new Document({
  creator: "AyurSetu Documentation Generator",
  title: "AyurSetu — Comprehensive Technical Documentation",
  description: "A 40-page detailed technical documentation of the AyurSetu project",
  features: {
    updateFields: true,
  },
  styles: {
    default: {
      document: {
        run: {
          font: "Calibri",
          size: 22,
        },
        paragraph: {
          spacing: { line: 312 },
        },
      },
      heading1: {
        run: {
          font: "Calibri",
          size: 36,
          bold: true,
          color: "1B5E20",
        },
        paragraph: {
          spacing: { before: 400, after: 200 },
        },
      },
      heading2: {
        run: {
          font: "Calibri",
          size: 30,
          bold: true,
          color: "2E7D32",
        },
        paragraph: {
          spacing: { before: 300, after: 150 },
        },
      },
      heading3: {
        run: {
          font: "Calibri",
          size: 26,
          bold: true,
          color: "388E3C",
        },
        paragraph: {
          spacing: { before: 200, after: 100 },
        },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: {
            width: convertInchesToTwip(8.27),
            height: convertInchesToTwip(11.69),
          },
          margin: {
            top: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1.2),
            right: convertInchesToTwip(1.2),
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "AyurSetu — Technical Documentation",
                  font: "Calibri",
                  size: 18,
                  color: "9E9E9E",
                  italics: true,
                }),
              ],
              alignment: AlignmentType.RIGHT,
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Page ",
                  font: "Calibri",
                  size: 18,
                  color: "9E9E9E",
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  font: "Calibri",
                  size: 18,
                  color: "9E9E9E",
                }),
                new TextRun({
                  text: " of ",
                  font: "Calibri",
                  size: 18,
                  color: "9E9E9E",
                }),
                new TextRun({
                  children: [PageNumber.TOTAL_PAGES],
                  font: "Calibri",
                  size: 18,
                  color: "9E9E9E",
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
          ],
        }),
      },
      children,
    },
  ],
});

// ──────────────────────────────────────────────
// GENERATE THE FILE
// ──────────────────────────────────────────────

async function generate() {
  const buffer = await Packer.toBuffer(doc);
  writeFileSync("AyurSetu_Technical_Documentation.docx", buffer);
  const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);
  console.log(`✅ Document generated: AyurSetu_Technical_Documentation.docx (${sizeMB} MB)`);
  console.log(`   Total paragraphs: ${children.length}`);
}

generate().catch((err) => {
  console.error("❌ Generation failed:", err);
  process.exit(1);
});
