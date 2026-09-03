import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getErrorMessage } from "@/lib/convex-error";
import { currentStreak, shiftDate, strToShortDisplay, todayStr } from "@/lib/progress";
import { useMutation, useQuery } from "convex/react";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  BookOpenText,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Flame,
  Loader2,
  NotebookPen,
  PenLine,
  Save,
  Trash2,
} from "lucide-react";

const MOODS = [
  { key: "great", label: "Great", emoji: "😄" },
  { key: "productive", label: "Productive", emoji: "💪" },
  { key: "learning", label: "Learning", emoji: "📚" },
  { key: "challenging", label: "Challenging", emoji: "🌊" },
  { key: "tired", label: "Tired", emoji: "😴" },
];

export default function Diary() {
  usePageMeta({
    title: "Internship Diary",
    description:
      "Track your daily internship journey — journal your learnings, moods and milestones while keeping your streak alive.",
    path: "/diary",
  });

  const [selectedDate, setSelectedDate] = useState(todayStr());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const entriesByDate = useQuery(api.diary.listByDate, {
    date: selectedDate,
  });
  const allEntries = useQuery(api.diary.list, {});
  const createEntry = useMutation(api.diary.create);
  const updateEntry = useMutation(api.diary.update);
  const removeEntry = useMutation(api.diary.remove);

  const entry = entriesByDate?.[0];

  // Prefill the form whenever the selected date / entry changes
  useEffect(() => {
    setTitle(entry?.title ?? "");
    setContent(entry?.content ?? "");
    setMood(entry?.mood ?? "");
    setConfirmDelete(false);
  }, [selectedDate, entry?._id, entry?.title, entry?.content, entry?.mood]);

  const streak = useMemo(
    () => currentStreak((allEntries ?? []).map((e) => e.date)),
    [allEntries],
  );
  const wordsWritten = useMemo(
    () =>
      (allEntries ?? []).reduce(
        (sum, e) =>
          sum +
          (e.title + " " + e.content).trim().split(/\s+/).filter(Boolean)
            .length,
        0,
      ),
    [allEntries],
  );
  const recentEntries = useMemo(
    () =>
      (allEntries ?? [])
        .slice()
        .sort(
          (a, b) =>
            b.date.localeCompare(a.date) || b._creationTime - a._creationTime,
        ),
    [allEntries],
  );

  const isToday = selectedDate === todayStr();

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return;
    setIsSaving(true);
    try {
      if (entry) {
        await updateEntry({
          entryId: entry._id,
          title: title.trim(),
          content: content.trim(),
          mood: mood || undefined,
        });
      } else {
        await createEntry({
          date: selectedDate,
          title: title.trim(),
          content: content.trim(),
          mood: mood || undefined,
        });
      }
      toast.success(entry ? "Diary entry updated" : "Diary entry saved");
    } catch (error) {
      console.error("Diary save error:", error);
      toast.error(
        getErrorMessage(error, "We couldn't save this entry. Please try again."),
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!entry) return;
    if (!confirmDelete) {
      setConfirmDelete(true);
      window.setTimeout(() => setConfirmDelete(false), 3500);
      return;
    }
    setIsSaving(true);
    try {
      await removeEntry({ entryId: entry._id });
      toast.success("Diary entry deleted");
    } catch (error) {
      console.error("Diary delete error:", error);
      toast.error(
        getErrorMessage(error, "We couldn't delete this entry. Please try again."),
      );
    } finally {
      setIsSaving(false);
      setConfirmDelete(false);
    }
  };

  const isLoading = entriesByDate === undefined;

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
          <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl clay-card-sm flex items-center justify-center bg-primary/10">
              <NotebookPen className="w-5 h-5 text-primary" />
            </div>
            Internship Diary
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Capture what you learned, practised and felt each day of your
            internship journey — your reflections become part of your growth
            record.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="clay-card border-0">
              <CardHeader className="pb-4">
                {/* Date picker row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    {entry ? "Edit your day" : "Write your day"}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="clay-inset border-0 rounded-xl h-9 w-9"
                      onClick={() => setSelectedDate(shiftDate(selectedDate, -1))}
                      title="Previous day"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Input
                      type="date"
                      value={selectedDate}
                      max={todayStr()}
                      onChange={(e) => e.target.value && setSelectedDate(e.target.value)}
                      className="clay-inset border-0 rounded-xl h-9 w-[150px] text-sm"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="clay-inset border-0 rounded-xl h-9 w-9"
                      onClick={() => setSelectedDate(shiftDate(selectedDate, 1))}
                      title="Next day"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    {!isToday && (
                      <Button
                        variant="outline"
                        className="clay-inset border-0 rounded-xl h-9 text-sm"
                        onClick={() => setSelectedDate(todayStr())}
                      >
                        Today
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription>
                  {strToShortDisplay(selectedDate)}
                  {entry && (
                    <span className="ml-2 text-primary font-medium">
                      • entry saved
                    </span>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                {isLoading ? (
                  <div className="space-y-3">
                    <div className="h-6 w-40 bg-muted animate-pulse rounded-lg" />
                    <div className="h-11 w-full bg-muted animate-pulse rounded-xl" />
                    <div className="h-48 w-full bg-muted animate-pulse rounded-xl" />
                  </div>
                ) : (
                  <>
                    {/* Mood selector */}
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">
                        How was your day?
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {MOODS.map((m) => (
                          <button
                            key={m.key}
                            type="button"
                            onClick={() =>
                              setMood(mood === m.key ? "" : m.key)
                            }
                            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                              mood === m.key
                                ? "clay-card bg-primary text-primary-foreground"
                                : "clay-inset text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <span className="mr-1.5">{m.emoji}</span>
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">Title</Label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. First day assisting Shirodhara therapy"
                        className="clay-inset border-0 rounded-xl h-11"
                        maxLength={120}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold">
                        Today&apos;s reflections
                      </Label>
                      <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What did you learn, practise or observe today? Which herbs, procedures or texts did you study? What made you proud, and what will you do differently tomorrow?"
                        className="clay-inset border-0 rounded-xl min-h-[220px] resize-y"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Button
                        className="clay-button rounded-xl h-11 font-semibold min-w-[160px]"
                        onClick={handleSave}
                        disabled={isSaving || !title.trim() || !content.trim()}
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 w-4 h-4" />
                            {entry ? "Update entry" : "Save entry"}
                          </>
                        )}
                      </Button>
                      {entry && (
                        <Button
                          variant="outline"
                          className={`rounded-xl h-11 font-medium border-0 ${
                            confirmDelete
                              ? "bg-destructive text-destructive-foreground"
                              : "clay-inset text-destructive hover:text-destructive"
                          }`}
                          onClick={handleDelete}
                          disabled={isSaving}
                        >
                          <Trash2 className="mr-2 w-4 h-4" />
                          {confirmDelete ? "Confirm delete?" : "Delete"}
                        </Button>
                      )}
                      {!isToday && (
                        <Button
                          variant="ghost"
                          className="rounded-xl text-sm text-muted-foreground"
                          onClick={() => setSelectedDate(todayStr())}
                        >
                          <PenLine className="mr-1.5 w-4 h-4" />
                          Write about today instead
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar: stats + recent entries */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="clay-card border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpenText className="w-5 h-5 text-saffron" />
                    Your Consistency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="clay-inset rounded-2xl p-3">
                      <Flame className="w-5 h-5 mx-auto text-terracotta mb-1" />
                      <div className="text-2xl font-extrabold">{streak}</div>
                      <div className="text-[11px] text-muted-foreground">
                        day streak
                      </div>
                    </div>
                    <div className="clay-inset rounded-2xl p-3">
                      <NotebookPen className="w-5 h-5 mx-auto text-primary mb-1" />
                      <div className="text-2xl font-extrabold">
                        {allEntries?.length ?? "…"}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        entries
                      </div>
                    </div>
                    <div className="clay-inset rounded-2xl p-3">
                      <PenLine className="w-5 h-5 mx-auto text-sky mb-1" />
                      <div className="text-2xl font-extrabold">
                        {wordsWritten.toLocaleString("en-IN")}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        words
                      </div>
                    </div>
                  </div>
                  {streak > 0 && (
                    <p className="text-xs text-muted-foreground text-center">
                      🔥 Keep the momentum — write even one line every day.
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="clay-card border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Recent entries</CardTitle>
                  <CardDescription>
                    Click an entry to revisit that day
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 max-h-[420px] overflow-y-auto">
                  {allEntries === undefined ? (
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="h-14 bg-muted animate-pulse rounded-xl"
                        />
                      ))}
                    </div>
                  ) : allEntries.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-6">
                      No entries yet — your diary is waiting for your first day
                      of reflection.
                    </p>
                  ) : (
                    recentEntries.map((e) => (
                      <button
                        key={e._id}
                        type="button"
                        onClick={() => setSelectedDate(e.date)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                          e.date === selectedDate
                            ? "clay-card bg-primary/10"
                            : "clay-inset hover:bg-card"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm truncate">
                            {e.mood && (
                              <span className="mr-1.5">
                                {
                                  MOODS.find((m) => m.key === e.mood)?.emoji
                                }
                              </span>
                            )}
                            {e.title || "Untitled entry"}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {strToShortDisplay(e.date)}
                        </span>
                      </button>
                    ))
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}