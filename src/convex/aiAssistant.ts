"use node";

import { getAuthUserId } from "@convex-dev/auth/server";
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ── Tool definitions for Gemini function calling ──────────────────────────────

const TOOL_DEFINITIONS = [
  {
    name: "apply_to_internship",
    description:
      "Apply the student to a specific internship by title. Use this when the student wants to apply to a matched internship.",
    parameters: {
      type: "OBJECT" as const,
      properties: {
        internshipTitle: {
          type: "STRING" as const,
          description: "Exact title of the internship to apply to",
        },
      },
      required: ["internshipTitle"],
    },
  },
  {
    name: "create_diary_entry",
    description:
      "Create a diary entry for the student. Use this when they want to journal about their day, reflect on a learning, or log a mood.",
    parameters: {
      type: "OBJECT" as const,
      properties: {
        title: {
          type: "STRING" as const,
          description: "Short title for the diary entry",
        },
        content: {
          type: "STRING" as const,
          description: "The diary entry content written by the student",
        },
        mood: {
          type: "STRING" as const,
          description:
            "Mood tag: 'productive', 'challenging', 'great', 'neutral', or 'stressed'",
        },
      },
      required: ["title", "content"],
    },
  },
  {
    name: "plan_my_day",
    description:
      "Auto-generate a curated daily to-do list based on the student's skill gaps and roadmap. Use when the student asks to plan their day or wants task suggestions.",
    parameters: {
      type: "OBJECT" as const,
      properties: {
        date: {
          type: "STRING" as const,
          description: "Date in YYYY-MM-DD format (today if not specified)",
        },
      },
      required: ["date"],
    },
  },
  {
    name: "navigate_to",
    description:
      "Tell the frontend to navigate to a specific page. Use this when the student wants to go to a page like diary, planner, roadmap, internships, or profile.",
    parameters: {
      type: "OBJECT" as const,
      properties: {
        path: {
          type: "STRING" as const,
          description:
            "Page path: '/dashboard', '/diary', '/planner', '/roadmap', '/internships', '/profile', '/contact'",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "show_top_matches",
    description:
      "Display the student's top internship matches. Use when they ask what internships match their skills or want to see recommendations.",
    parameters: {
      type: "OBJECT" as const,
      properties: {},
      required: [],
    },
  },
  {
    name: "show_skill_gaps",
    description:
      "Show the student which skills they're missing that top internships require. Use when they ask about skill gaps or what to learn.",
    parameters: {
      type: "OBJECT" as const,
      properties: {},
      required: [],
    },
  },
];

// ── Gemini tool-call executor ─────────────────────────────────────────────────

interface ActionResult {
  type: string;
  status: "success" | "error" | "info";
  detail: string;
}

interface UserContext {
  profile: any;
  matches: any[];
  applications: any[];
  diaryCount: number;
  taskCount: number;
}

async function executeToolCall(
  ctx: any,
  toolName: string,
  args: Record<string, string>,
  _userId: string,
  context: UserContext,
): Promise<ActionResult> {
  const today = new Date().toISOString().split("T")[0];

  switch (toolName) {
    case "apply_to_internship": {
      const title = args.internshipTitle;
      const match = context.matches.find(
        (m: any) => m.title.toLowerCase() === title.toLowerCase(),
      );
      if (!match) {
        return {
          type: "apply",
          status: "error",
          detail: `No matching internship found for "${title}". Try browsing the internships page.`,
        };
      }
      const alreadyApplied = context.applications.some(
        (a: any) => a.internshipId === match._id,
      );
      if (alreadyApplied) {
        return {
          type: "apply",
          status: "info",
          detail: `You've already applied to ${match.title} at ${match.organization}.`,
        };
      }
      try {
        await ctx.runMutation(api.applications.apply, {
          internshipId: match._id,
        });
        return {
          type: "apply",
          status: "success",
          detail: `✅ Applied to ${match.title} at ${match.organization} (${match.matchScore}% match). You can track this in your dashboard.`,
        };
      } catch (e: any) {
        return {
          type: "apply",
          status: "error",
          detail: `Could not apply: ${e.message || "Unknown error"}.`,
        };
      }
    }

    case "create_diary_entry": {
      try {
        await ctx.runMutation(api.diary.create, {
          date: today,
          title: args.title,
          content: args.content,
          mood: args.mood || undefined,
        });
        return {
          type: "diary",
          status: "success",
          detail: `📝 Diary entry "${args.title}" saved for today. ${args.mood ? `Mood: ${args.mood}.` : ""} Keep journaling — consistency builds insight!`,
        };
      } catch (e: any) {
        return {
          type: "diary",
          status: "error",
          detail: `Could not save diary entry: ${e.message || "Unknown error"}.`,
        };
      }
    }

    case "plan_my_day": {
      const date = args.date || today;
      try {
        const count = await ctx.runMutation(api.dailyTasks.planDay, { date });
        return {
          type: "planner",
          status: "success",
          detail: `📋 Planned ${count} curated tasks for ${date}. ${count > 0 ? "Check your Daily Planner to get started!" : "Your existing tasks already cover today's priorities."}`,
        };
      } catch (e: any) {
        return {
          type: "planner",
          status: "error",
          detail: `Could not plan your day: ${e.message || "Unknown error"}.`,
        };
      }
    }

    case "navigate_to": {
      return {
        type: "navigate",
        status: "success",
        detail: `Navigating to ${args.path}...`,
      };
    }

    case "show_top_matches": {
      if (context.matches.length === 0) {
        return {
          type: "info",
          status: "info",
          detail:
            "No internship matches yet. Complete your profile with skills and interests to see matches!",
        };
      }
      const top3 = context.matches.slice(0, 3);
      const list = top3
        .map(
          (m: any, i: number) =>
            `${i + 1}. **${m.title}** at ${m.organization} — ${m.matchScore}% match (${m.location}, ${m.duration})`,
        )
        .join("\n");
      return {
        type: "info",
        status: "success",
        detail: `Your top matches:\n${list}\n\nVisit /internships to see all ${context.matches.length} matches.`,
      };
    }

    case "show_skill_gaps": {
      const profile = context.profile;
      if (!profile) {
        return {
          type: "info",
          status: "info",
          detail: "Complete your profile first to see skill-gap analysis.",
        };
      }
      const own = new Set(
        [...profile.skills, ...profile.interests].map((s: string) =>
          s.toLowerCase(),
        ),
      );
      const gaps = new Map<string, number>();
      for (const match of context.matches.slice(0, 10)) {
        for (const skill of match.requiredSkills) {
          if (!own.has(skill.toLowerCase())) {
            gaps.set(skill, (gaps.get(skill) || 0) + 1);
          }
        }
      }
      const ranked = [...gaps.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
      if (ranked.length === 0) {
        return {
          type: "info",
          status: "success",
          detail:
            "🎉 Great news — you already have all the skills required by your top matches!",
        };
      }
      const gapList = ranked
        .map(
          ([skill, count], i) =>
            `${i + 1}. **${skill}** (required by ${count} top internships)`,
        )
        .join("\n");
      return {
        type: "info",
        status: "success",
        detail: `Your skill gaps (sorted by importance):\n${gapList}\n\nVisit /roadmap for a curated 12-week learning plan.`,
      };
    }

    default:
      return {
        type: "unknown",
        status: "error",
        detail: `Unknown action: ${toolName}`,
      };
  }
}

// ── System prompt ─────────────────────────────────────────────────────────────

function buildSystemPrompt(context: {
  profile: any;
  matches: any[];
  applications: any[];
  diaryCount: number;
  taskCount: number;
  todayDate: string;
}): string {
  const p = context.profile;
  const skills = p ? [...p.skills, ...p.interests].join(", ") : "not set";
  const matchSummary =
    context.matches.length > 0
      ? context.matches
          .slice(0, 5)
          .map(
            (m: any) =>
              `${m.title} at ${m.organization} (${m.matchScore}%)`,
          )
          .join("; ")
      : "none yet";

  return `You are Vaidya, the AyurSetu AI assistant — a friendly, knowledgeable guide for Ayurveda students finding internships.

## User Context
- Name: ${p?.fullName || "Student"}
- University: ${p?.university || "N/A"}
- Degree: ${p?.degree || "N/A"} (${p?.year || ""})
- Skills: ${skills}
- Location preference: ${p?.location || "N/A"}
- Top internship matches: ${matchSummary}
- Applications submitted: ${context.applications.length}
- Diary entries: ${context.diaryCount}
- Today's tasks done: ${context.taskCount} pending tasks
- Today's date: ${context.todayDate}

## Personality
- Warm, encouraging, and knowledgeable about Ayurveda and traditional medicine
- Speak like a wise mentor, not a robot — use friendly greetings, light humor when appropriate
- Reference Ayurveda concepts naturally (dosa, prakriti, etc.) when relevant
- Always be actionable — don't just reply, suggest or execute the right tool

## Capabilities
You can take actions on behalf of the student. Use tools when:
- They ask to apply → apply_to_internship
- They want to journal → create_diary_entry
- They want to plan their day → plan_my_day
- They ask to go somewhere → navigate_to
- They ask about matches → show_top_matches
- They ask about skills to learn → show_skill_gaps

Always suggest relevant tools even if the student doesn't explicitly ask. Keep replies concise (2-4 sentences) unless they ask for detail. End with a suggestion or question to keep the conversation going.`;
}

// ── Main chat action ──────────────────────────────────────────────────────────

export const chat = action({
  args: {
    message: v.string(),
  },
  handler: async (
    ctx,
    args,
  ): Promise<{ reply: string; actions: ActionResult[] }> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Build full user context
    const profile = await ctx.runQuery(api.profiles.getMyProfile);
    const matches = profile
      ? await ctx.runQuery(api.internships.getMatches, {
          profileId: profile._id,
        })
      : [];
    const applications = await ctx.runQuery(api.applications.getMyApplications);
    const diaryEntries = await ctx.runQuery(api.diary.list, {});
    const today = new Date().toISOString().split("T")[0];
    const todayTasks = await ctx.runQuery(api.dailyTasks.listByDate, {
      date: today,
    });

    const context: UserContext = {
      profile,
      matches,
      applications,
      diaryCount: diaryEntries.length,
      taskCount: todayTasks.filter((t: any) => !t.completed).length,
    };

    // Check for API key
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      // Fallback: rule-based assistant without AI
      const reply = fallbackReply(args.message, context);
      await ctx.runMutation(api.chatMessages.save, {
        userId,
        userMessage: args.message,
        assistantReply: reply,
      });
      return { reply, actions: [] };
    }

    // Call Gemini with function calling
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      tools: [{ functionDeclarations: TOOL_DEFINITIONS as any }],
      systemInstruction: buildSystemPrompt({
        ...context,
        todayDate: today,
      }),
    });

    const chatSession = model.startChat({
      history: [],
    });

    let result;
    try {
      result = await chatSession.sendMessage(args.message);
    } catch (_err: unknown) {
      const reply = `I'm having trouble reaching my AI brain right now. Here's what I can see: your top match is ${context.matches[0]?.title || "not yet determined"} at ${context.matches[0]?.organization || "..."}. Would you like me to help with something specific?`;
      await ctx.runMutation(api.chatMessages.save, {
        userId,
        userMessage: args.message,
        assistantReply: reply,
      });
      return { reply, actions: [] };
    }

    const response = result.response;
    const executedActions: ActionResult[] = [];

    // Process function calls
    const textParts: string[] = [];
    const candidates = response.candidates;

    for (const candidate of candidates || []) {
      for (const part of candidate.content?.parts || []) {
        if (part.text) {
          textParts.push(part.text);
        }
        if (part.functionCall) {
          const fnName = part.functionCall.name;
          const fnArgs = part.functionCall.args as Record<string, string>;
          const actionResult = await executeToolCall(
            ctx,
            fnName,
            fnArgs,
            userId,
            context,
          );
          executedActions.push(actionResult);
        }
      }
    }

    // If only function calls returned with no text, ask Gemini to summarize
    let finalReply = textParts.join("\n\n");
    if (executedActions.length > 0 && !finalReply) {
      const summaries = executedActions.map((a) => a.detail).join("\n");
      finalReply = summaries;
    }

    if (!finalReply) {
      finalReply = "I'm here to help! What would you like to do?";
    }

    // Save messages
    await ctx.runMutation(api.chatMessages.save, {
      userId,
      userMessage: args.message,
      assistantReply: finalReply,
      actions: executedActions,
    });

    return { reply: finalReply, actions: executedActions };
  },
});

// ── Fallback rule-based assistant (no API key) ────────────────────────────────

function fallbackReply(
  message: string,
  context: UserContext,
): string {
  const lower = message.toLowerCase();

  if (lower.includes("apply") || lower.includes("internship")) {
    if (context.matches.length > 0) {
      const top = context.matches[0];
      return `Based on your skills, your best match is **${top.title}** at ${top.organization} (${top.matchScore}%). Would you like me to apply to it for you? Just say "apply to ${top.title}".`;
    }
    return "Complete your profile with skills first, and I'll find matching internships for you! Visit /profile to set it up.";
  }

  if (
    lower.includes("diary") ||
    lower.includes("journal") ||
    lower.includes("reflect")
  ) {
    return `You have ${context.diaryCount} diary entries so far. Want to write today's entry? Just tell me what you learned today and I'll save it as a diary entry. For example: "Write a diary entry: Today I learned about Panchakarma therapies."`;
  }

  if (lower.includes("plan") || lower.includes("todo") || lower.includes("task")) {
    return `I can plan your day with curated tasks based on your skill gaps! Just say "plan my day" and I'll generate today's to-do list.`;
  }

  if (lower.includes("match") || lower.includes("recommend")) {
    if (context.matches.length > 0) {
      const top3 = context.matches
        .slice(0, 3)
        .map(
          (m: any, i: number) =>
            `${i + 1}. ${m.title} at ${m.organization} (${m.matchScore}%)`,
        )
        .join("\n");
      return `Here are your top matches:\n${top3}\n\nWould you like to apply to any of these?`;
    }
    return "No matches yet — add your skills and interests in your profile first!";
  }

  if (lower.includes("skill") || lower.includes("gap") || lower.includes("learn")) {
    return "Visit /roadmap to see your personalized skill-gap analysis and 12-week learning plan. Would you like me to show your top skill gaps right now?";
  }

  if (lower.includes("help") || lower.includes("what can you do")) {
    return `I'm Vaidya, your AyurSetu assistant! Here's what I can do:\n\n🔍 **Find matches** — "Show my top internships"\n📝 **Write diary** — "Write a diary entry about..."\n📋 **Plan my day** — "Plan my day"\n🎯 **Apply** — "Apply to [internship name]"\n🗺️ **Skill gaps** — "What skills should I learn?"\n🧭 **Navigate** — "Go to my diary" or "Go to roadmap"`;
  }

  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey") ||
    lower.includes("namaste")
  ) {
    const greeting = context.profile
      ? `Namaste${context.profile.fullName ? `, ${context.profile.fullName.split(" ")[0]}` : ""}! 🙏`
      : "Namaste! 🙏";
    return `${greeting} I'm Vaidya, your AyurSetu guide. ${context.matches.length > 0 ? `You have ${context.matches.length} internship matches — your best one is ${context.matches[0].title}.` : "Set up your profile to get matched!"} How can I help you today?`;
  }

  return `I understand you're asking about "${message}". I can help you with:\n- Finding and applying to internships\n- Writing diary entries\n- Planning your daily tasks\n- Checking skill gaps\n- Navigating the app\n\nWhat would you like to do?`;
}
