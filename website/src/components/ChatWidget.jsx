import React, { useState, useEffect, useRef } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const scrollRef = useRef(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function askQuestion() {
    if (!question.trim() || loading) return;

    const userQuestion = question;
    setQuestion("");
    setMessages((prev) => [...prev, { role: "user", text: userQuestion }]);
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userQuestion }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ AI backend not reachable." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askQuestion();
    }
  };

  const theme = {
    bg: isDarkMode ? "#0f172a" : "#ffffff",
    cardBg: isDarkMode ? "#1e293b" : "#f8fafc",
    text: isDarkMode ? "#f1f5f9" : "#1e293b",
    border: isDarkMode ? "#334155" : "#e2e8f0",
    input: isDarkMode ? "#020617" : "#ffffff",
    primary: "#6366f1",
  };

  return (
    <div className="chat-widget-wrapper">
      <style>{`
        .chat-widget-wrapper { font-family: Inter, sans-serif; }
        .floating-btn {
          position: fixed; bottom: 24px; right: 24px;
          width: 60px; height: 60px; border-radius: 18px;
          background: ${theme.primary}; color: white;
          border: none; cursor: pointer; z-index: 10000;
        }
        .chat-container {
          position: fixed; bottom: 100px; right: 24px;
          width: 400px; height: 650px;
          background: ${theme.bg}; border-radius: 20px;
          display: flex; flex-direction: column;
          border: 1px solid ${theme.border};
          z-index: 9999;
        }
        .chat-header {
          padding: 20px; background: ${theme.primary};
          color: white; display: flex; justify-content: space-between;
        }
        .chat-body {
          flex: 1; padding: 20px; overflow-y: auto;
          background: ${theme.cardBg};
          display: flex; flex-direction: column; gap: 12px;
        }
        .msg { padding: 12px 16px; border-radius: 14px; max-width: 85%; }
        .msg-user { align-self: flex-end; background: ${theme.primary}; color: white; }
        .msg-ai { align-self: flex-start; background: ${theme.bg}; color: ${theme.text}; border: 1px solid ${theme.border}; }
        .input-area { padding: 16px; border-top: 1px solid ${theme.border}; }
        .chat-textarea {
          width: 100%; padding: 10px;
          border-radius: 10px; border: 1px solid ${theme.border};
          background: ${theme.input}; color: ${theme.text};
        }
        .send-btn {
          margin-top: 8px; width: 100%;
          padding: 10px; border-radius: 10px;
          background: ${theme.primary}; color: white;
          border: none; cursor: pointer;
        }
      `}</style>

      {!open && (
        <button className="floating-btn" onClick={() => setOpen(true)}>💬</button>
      )}

      {open && (
        <div className="chat-container">
          <div className="chat-header">
            <div>📘 Ask the Book</div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role === "user" ? "msg-user" : "msg-ai"}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="msg msg-ai">Thinking…</div>}
          </div>

          <div className="input-area">
            <textarea
              className="chat-textarea"
              rows={2}
              placeholder="Ask something…"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="send-btn" onClick={askQuestion}>
              Ask AI
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
