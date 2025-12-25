import React, { useState, useEffect, useRef } from "react";

/**
 * Pro-Level ChatWidget with Chat History
 * Logic: Same as original, added 'messages' state for history.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]); // Array to hold { role: 'user'|'ai', text: string }
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark for pro feel
  const scrollRef = useRef(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Auto-scroll to bottom whenever messages or loading changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function askQuestion() {
    if (!question.trim() || loading) return;

    const userQuestion = question;
    setQuestion(""); // 1. Input field ko turant khali karna
    
    // 2. User ka message screen par show karna
    setMessages((prev) => [...prev, { role: "user", text: userQuestion }]);
    setLoading(true);

    try {


         const res = await fetch(`${BACKEND_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userQuestion }),
      });
      const data = await res.json();
      
      // 3. AI ka answer screen par show karna
      setMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Network error. Please try again." }]);
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
        .chat-widget-wrapper { font-family: 'Inter', sans-serif; }
        .floating-btn {
          position: fixed; bottom: 24px; right: 24px; width: 60px; height: 60px;
          border-radius: 18px; background: ${theme.primary}; color: white;
          border: none; cursor: pointer; box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
          display: flex; align-items: center; justify-content: center; z-index: 10000;
          transition: transform 0.2s;
        }
        .chat-container {
          position: fixed; z-index: 9999; background: ${theme.bg};
          display: flex; flex-direction: column; box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          border: 1px solid ${theme.border}; overflow: hidden; transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .chat-container { bottom: 100px; right: 24px; width: 400px; height: 650px; border-radius: 20px; }
        }
        @media (max-width: 767px) {
          .chat-container { bottom: 0; right: 0; width: 100%; height: 100%; border-radius: 0; }
        }
        .chat-header {
          padding: 20px; background: ${isDarkMode ? "#1e293b" : theme.primary};
          color: white; display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid ${theme.border};
        }
        .chat-body { 
          flex: 1; padding: 20px; overflow-y: auto; background: ${theme.cardBg}; 
          display: flex; flex-direction: column; gap: 16px; scroll-behavior: smooth;
        }
        .msg { padding: 12px 16px; border-radius: 14px; font-size: 14px; line-height: 1.5; max-width: 85%; position: relative; }
        .msg-user { align-self: flex-end; background: ${theme.primary}; color: white; border-bottom-right-radius: 4px; }
        .msg-ai { align-self: flex-start; background: ${theme.bg}; color: ${theme.text}; border: 1px solid ${theme.border}; border-bottom-left-radius: 4px; }
        
        .input-area { padding: 20px; background: ${theme.bg}; border-top: 1px solid ${theme.border}; }
        .chat-textarea {
          width: 100%; padding: 12px; background: ${theme.input}; color: ${theme.text};
          border: 1px solid ${theme.border}; border-radius: 10px; resize: none; outline: none; box-sizing: border-box; font-size: 14px;
        }
        .send-btn { width: 100%; margin-top: 10px; padding: 12px; background: ${theme.primary}; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
        .header-btn { background: rgba(255,255,255,0.15); border: none; color: white; padding: 6px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; }
      `}</style>

      {!open && (
        <button className="floating-btn" onClick={() => setOpen(true)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
      )}

      {open && (
        <div className="chat-container">
          <div className="chat-header">
            <div>
              <h4 style={{ margin: 0, fontSize: "17px" }}>📘 Ask the Book</h4>
              <span style={{ fontSize: "11px", opacity: 0.7 }}>Physical AI Assistant</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="header-btn" onClick={toggleTheme}>{isDarkMode ? "☀️" : "🌙"}</button>
              <button className="header-btn" onClick={() => setOpen(false)}>✕</button>
            </div>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.length === 0 && (
              <div style={{ textAlign: "center", color: theme.text, opacity: 0.5, marginTop: "50px" }}>
                <p style={{ fontSize: "14px" }}>Start by asking a question!</p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role === "user" ? "msg-user" : "msg-ai"}`}>
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="msg msg-ai" style={{ display: "flex", gap: "4px" }}>
                <span style={{ opacity: 0.6 }}>Thinking...</span>
              </div>
            )}
          </div>

          <div className="input-area">
            <textarea
              className="chat-textarea"
              placeholder="Ask me anything..."
              rows={2}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="send-btn" onClick={askQuestion} disabled={loading}>
              {loading ? "Processing..." : "Ask Question"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
