import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useAction, useMutation } from "convex/react";
import { useNavigate } from "react-router";
import {
  X,
  Send,
  Leaf,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Info,
  Trash2,
} from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  actions?: Array<{
    type: string;
    status: string;
    detail: string;
  }>;
}

const QUICK_ACTIONS = [
  { label: "🔍 Show my matches", message: "Show my top internship matches" },
  { label: "🗺️ Skill gaps", message: "What skills should I learn?" },
  { label: "📋 Plan my day", message: "Plan my day with curated tasks" },
  {
    label: "📝 Write diary",
    message: "I want to write a diary entry about what I learned today",
  },
  { label: "🧭 Help", message: "What can you do?" },
];

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = useAction(api.aiAssistant.chat);
  const clearHistory = useMutation(api.chatMessages.clearHistory);
  const navigate = useNavigate();

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await sendMessage({ message: msg });

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: result.reply,
        actions: result.actions,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Handle navigation actions
      for (const action of result.actions) {
        if (action.type === "navigate") {
          const match = result.reply.match(/Navigating to ([^\n.]+)/);
          if (match) {
            setTimeout(() => navigate(match[1].trim()), 500);
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = async () => {
    await clearHistory();
    setMessages([]);
    setShowClear(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const actionIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="w-3.5 h-3.5 text-primary" />;
      case "error":
        return <AlertCircle className="w-3.5 h-3.5 text-destructive" />;
      default:
        return <Info className="w-3.5 h-3.5 text-saffron" />;
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/25 flex items-center justify-center hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            aria-label="Open AI assistant"
          >
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] rounded-2xl overflow-hidden flex flex-col border border-border/50 shadow-2xl shadow-black/10"
            style={{
              background: "var(--background)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-background">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Vaidya</h3>
                  <p className="text-[10px] text-muted-foreground">
                    AyurSetu AI Assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {showClear ? (
                  <div className="flex items-center gap-1 mr-1">
                    <span className="text-[10px] text-muted-foreground">
                      Clear all?
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={handleClear}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => setShowClear(false)}
                    >
                      <X className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-xl"
                    onClick={() => setShowClear(true)}
                    title="Clear chat"
                  >
                    <Trash2 className="w-4 h-4 text-muted-foreground" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">Namaste! 🙏</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    I'm Vaidya, your AyurSetu guide. I can help you find
                    internships, plan your day, write diary entries, and more.
                  </p>
                  <div className="space-y-1.5 w-full">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => handleSend(action.message)}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted/70 rounded-bl-md"
                    }`}
                  >
                    {/* Message content with markdown-like bold */}
                    <div className="whitespace-pre-wrap">
                      {msg.content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                            <strong key={i}>{part.slice(2, -2)}</strong>
                          );
                        }
                        return part;
                      })}
                    </div>

                    {/* Action results */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {msg.actions.map((action, ai) => (
                          <div
                            key={ai}
                            className="flex items-center gap-1.5 text-[10px] text-muted-foreground"
                          >
                            {actionIcon(action.status)}
                            <span className="truncate">{action.detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted/70 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                    <span className="text-xs text-muted-foreground">
                      Thinking...
                    </span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length > 0 && !isLoading && (
              <div className="px-4 pb-1 flex gap-1.5 overflow-x-auto scrollbar-none">
                {QUICK_ACTIONS.slice(0, 3).map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleSend(action.message)}
                    className="shrink-0 px-2.5 py-1 rounded-lg text-[10px] bg-muted/50 hover:bg-muted transition-colors text-muted-foreground"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3 pt-1">
              <div className="flex items-end gap-2 bg-muted/40 rounded-2xl px-3 py-2 border border-border/30 focus-within:border-primary/30 transition-colors">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Vaidya anything..."
                  rows={1}
                  className="flex-1 bg-transparent text-xs resize-none outline-none min-h-[24px] max-h-[80px] placeholder:text-muted-foreground/60"
                  style={{ fieldSizing: "content" } as React.CSSProperties}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-xl"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                >
                  <Send
                    className={`w-4 h-4 ${
                      input.trim() && !isLoading
                        ? "text-primary"
                        : "text-muted-foreground/40"
                    }`}
                  />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
