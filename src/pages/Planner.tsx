import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getErrorMessage } from "@/lib/convex-error";
import { lastNDates, shiftDate, strToShortDisplay, todayStr } from "@/lib/progress";
import { useMutation, useQuery } from "convex/react";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  ClipboardList,
  ListTodo,
  Loader2,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";

const CATEGORY_STYLES: Record<string, string> = {
  learning: "bg-sky-light text-sky",
  reading: "bg-saffron-light text-saffron",
  practice: "bg-primary/10 text-primary",
  application: "bg-terracotta/10 text-terracotta",
  reflection: "bg-leaf-light/40 text-leaf",
  personal: "bg-muted text-muted-foreground",
};

export default function Planner() {
  usePageMeta({
    title: "Daily Planner",
    description:
      "Your curated daily to-do list — tasks generated from your skill roadmap, internship applications and diary habits, with weekly progress tracking.",
    path: "/planner",
  });

  const [selectedDate, setSelectedDate] = useState(todayStr());
  const [newTask, setNewTask] = useState("");
  const [busyAction, setBusyAction] = useState<string | null>(null);

  const today = todayStr();
  const weekDays = useMemo(() => lastNDates(7), []);
  const weekStart = weekDays[0];

  const tasks = useQuery(api.dailyTasks.listByDate, { date: selectedDate });
  const weekTasks = useQuery(api.dailyTasks.listByRange, {
    startDate: weekStart,
    endDate: today,
  });
  const createTask = useMutation(api.dailyTasks.create);
  const toggleTask = useMutation(api.dailyTasks.toggle);
  const removeTask = useMutation(api.dailyTasks.remove);
  const planDay = useMutation(api.dailyTasks.planDay);

  const sortedTasks = useMemo(() => {
    const list = tasks ?? [];
    return [...list].sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return (a._creationTime ?? 0) - (b._creationTime ?? 0);
    });
  }, [tasks]);

  const doneCount = (tasks ?? []).filter((t) => t.completed).length;
  const totalCount = tasks?.length ?? 0;
  const percent = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  const weekSummary = useMemo(() => {
    const byDate = new Map<string, { done: number; total: number }>();
    for (const t of weekTasks ?? []) {
      const cur = byDate.get(t.date) ?? { done: 0, total: 0 };
      cur.total += 1;
      if (t.completed) cur.done += 1;
      byDate.set(t.date, cur);
    }
    return weekDays.map((date) => ({
      date,
      ...(byDate.get(date) ?? { done: 0, total: 0 }),
    }));
  }, [weekTasks, weekDays]);

  const weekDone = weekSummary.reduce((s, d) => s + d.done, 0);
  const weekTotal = weekSummary.reduce((s, d) => s + d.total, 0);

  const isToday = selectedDate === today;

  const handleAddTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = newTask.trim();
    if (!title) return;
    setBusyAction("add");
    try {
      await createTask({ date: selectedDate, title, category: "personal" });
      setNewTask("");
    } catch (error) {
      console.error("Add task error:", error);
      toast.error(
        getErrorMessage(error, "We couldn't add that task. Please try again."),
      );
    } finally {
      setBusyAction(null);
    }
  };

  const handleToggle = async (taskId: Id<"dailyTasks">) => {
    try {
      await toggleTask({ taskId });
    } catch (error) {
      console.error("Toggle task error:", error);
      toast.error(getErrorMessage(error, "Couldn't update the task."));
    }
  };

  const handleRemove = async (taskId: Id<"dailyTasks">) => {
    setBusyAction(taskId);
    try {
      await removeTask({ taskId });
    } catch (error) {
      console.error("Remove task error:", error);
      toast.error(getErrorMessage(error, "Couldn't delete the task."));
    } finally {
      setBusyAction(null);
    }
  };

  const handlePlanDay = async () => {
    setBusyAction("plan");
    try {
      const added = await planDay({ date: selectedDate });
      if (added > 0) {
        toast.success(
          `Added ${added} task${added === 1 ? "" : "s"} — curated from your skill roadmap`,
        );
      } else {
        toast.info("This day is already planned — no duplicates added");
      }
    } catch (error) {
      console.error("Plan day error:", error);
      toast.error(
        getErrorMessage(error, "We couldn't plan this day. Please try again."),
      );
    } finally {
      setBusyAction(null);
    }
  };

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
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            Daily Planner
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            A curated, customized to-do list for each day — built from your
            roadmap skill gaps, internship goals and diary habits.
          </p>
        </motion.div>

        {/* Progress + actions card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-6"
        >
          <Card className="clay-card border-0">
            <CardContent className="pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="clay-inset border-0 rounded-xl h-9 w-9"
                      onClick={() =>
                        setSelectedDate(shiftDate(selectedDate, -1))
                      }
                      title="Previous day"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) =>
                        e.target.value && setSelectedDate(e.target.value)
                      }
                      className="clay-inset border-0 rounded-xl h-9 w-[150px] text-sm"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="clay-inset border-0 rounded-xl h-9 w-9"
                      onClick={() =>
                        setSelectedDate(shiftDate(selectedDate, 1))
                      }
                      title="Next day"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    {!isToday && (
                      <Button
                        variant="outline"
                        className="clay-inset border-0 rounded-xl h-9 text-sm"
                        onClick={() => setSelectedDate(today)}
                      >
                        Today
                      </Button>
                    )}
                  </div>
                  <span className="hidden sm:inline text-sm text-muted-foreground ml-1">
                    {strToShortDisplay(selectedDate)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {totalCount > 0 && (
                    <div className="text-sm font-bold text-primary">
                      {doneCount}/{totalCount} done
                    </div>
                  )}
                  <Button
                    className="clay-button rounded-xl h-10 font-semibold"
                    onClick={handlePlanDay}
                    disabled={busyAction !== null}
                  >
                    {busyAction === "plan" ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Planning...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 w-4 h-4" />
                        Plan my day
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {totalCount > 0 && (
                <div className="mt-4 flex items-center gap-3">
                  <Progress value={percent} className="h-2.5 flex-1" />
                  <span className="text-xs font-medium text-muted-foreground w-24 text-right">
                    {percent}% complete
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tasks for the day */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2"
          >
            <Card className="clay-card border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ListTodo className="w-5 h-5 text-primary" />
                  Tasks for {strToShortDisplay(selectedDate)}
                </CardTitle>
                <CardDescription>
                  {totalCount === 0
                    ? "Nothing on the list yet — plan your day or add a task below."
                    : "Check off tasks as you complete them"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasks === undefined ? (
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-14 bg-muted animate-pulse rounded-xl"
                      />
                    ))}
                  </div>
                ) : sortedTasks.length === 0 ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-primary/30" />
                    <p className="font-medium">A fresh day, a fresh start 🌱</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-5">
                      Let AyurSetu build a curated plan from your roadmap, or
                      add tasks yourself.
                    </p>
                    <Button
                      className="clay-button rounded-xl h-11 font-semibold"
                      onClick={handlePlanDay}
                      disabled={busyAction !== null}
                    >
                      <Sparkles className="mr-2 w-4 h-4" />
                      {busyAction === "plan" ? "Planning..." : "Plan my day"}
                    </Button>
                  </div>
                ) : (
                  sortedTasks.map((task) => {
                    const categoryStyle =
                      CATEGORY_STYLES[task.category ?? "personal"] ??
                      CATEGORY_STYLES.personal;
                    return (
                      <motion.div
                        key={task._id}
                        layout
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`clay-card-sm p-3.5 flex items-center gap-3 transition-opacity ${
                          task.completed ? "opacity-60" : ""
                        }`}
                      >
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => handleToggle(task._id)}
                          aria-label={`Mark ${task.title} done`}
                          className="rounded-lg h-5 w-5 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-medium truncate ${
                              task.completed
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {task.title}
                          </p>
                          {task.category && (
                            <span
                              className={`inline-block mt-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${categoryStyle}`}
                            >
                              {task.category}
                            </span>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-lg text-muted-foreground hover:text-destructive h-8 w-8 shrink-0"
                          onClick={() => handleRemove(task._id)}
                          disabled={busyAction === task._id}
                          aria-label={`Delete ${task.title}`}
                        >
                          {busyAction === task._id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </Button>
                      </motion.div>
                    );
                  })
                )}

                {/* Add task inline */}
                <form
                  onSubmit={handleAddTask}
                  className="flex items-center gap-2 pt-2"
                >
                  <div className="relative flex-1">
                    <Plus className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="Add a task for this day…"
                      className="clay-inset border-0 pl-9 h-11 rounded-xl"
                      maxLength={160}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="outline"
                    size="icon"
                    className="clay-inset border-0 h-11 w-11 rounded-xl shrink-0"
                    disabled={busyAction !== null || !newTask.trim()}
                    aria-label="Add task"
                  >
                    {busyAction === "add" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <CirclePlus className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Weekly progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Card className="clay-card border-0 lg:sticky lg:top-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-saffron" />
                  This week
                </CardTitle>
                <CardDescription>
                  {weekDone}/{weekTotal} tasks completed in the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-1.5 h-36">
                  {weekSummary.map((day) => {
                    const pct =
                      day.total > 0
                        ? Math.max(8, Math.round((day.done / day.total) * 100))
                        : 0;
                    const isSelected = day.date === selectedDate;
                    return (
                      <button
                        key={day.date}
                        type="button"
                        onClick={() => setSelectedDate(day.date)}
                        className="flex-1 flex flex-col items-center gap-1.5 group"
                        aria-label={strToShortDisplay(day.date)}
                      >
                        <span className="text-[10px] text-muted-foreground">
                          {day.done}/{day.total}
                        </span>
                        <div className="w-full flex-1 flex items-end">
                          <div
                            className={`w-full rounded-lg transition-all duration-300 ${
                              day.total === 0
                                ? "bg-border/60 h-[6px]"
                                : day.done === day.total
                                  ? "bg-primary"
                                  : "bg-saffron"
                            } ${
                              isSelected
                                ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                                : "group-hover:opacity-80"
                            }`}
                            style={
                              day.total > 0 ? { height: `${pct}%` } : undefined
                            }
                          />
                        </div>
                        <span
                          className={`text-[10px] font-medium ${
                            isSelected
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {strToShortDisplay(day.date).split(",")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-5 space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-primary inline-block" />
                    Day fully completed
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-saffron inline-block" />
                    Partially completed
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-border inline-block" />
                    No tasks planned
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}