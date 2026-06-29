import { useState, useEffect, useRef } from "react";
import { ChatDotsFill, XLg, SendFill, Person } from "react-bootstrap-icons";
import profileImg from "../assets/img/header-icon.jpg";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi! I'm Mohit Negi's AI Copilot. 🚀\n\nAsk me anything about my projects, B.Tech education at IIIT Kalyani, technical skills, or how to contact me. Click the chips below to explore!",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const suggestionChips = [
    "Frontend Skills & Projects",
    "Technical Core Skills",
    "Zomato MERN App",
    "Contact Information",
  ];

  // Client-side Local Fallback Knowledge Base
  const getLocalResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      return "Hello! How can I help you today? Ask me about Mohit's skills, projects, or background!";
    }
    if (lowerQuery.includes("frontend") || lowerQuery.includes("web") || lowerQuery.includes("design") || lowerQuery.includes("interface")) {
      return "Mohit excels in modern Frontend Web Development. He utilizes React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, and responsive UI design principles. For instance, this portfolio features dynamic theme integration, glassmorphism card styling, custom page scroll bars, and polished micro-animations.";
    }
    if (lowerQuery.includes("zomato") || lowerQuery.includes("delivery") || lowerQuery.includes("mern") || lowerQuery.includes("tomato")) {
      return "Mohit built a Zomato Delivery App using the MERN stack (React, Node.js, Express, MongoDB) deployed on Render. It features a responsive customer frontend, dynamic cart, and an admin management dashboard.";
    }
    if (lowerQuery.includes("skill") || lowerQuery.includes("technolog") || lowerQuery.includes("language") || lowerQuery.includes("python") || lowerQuery.includes("react")) {
      return "Mohit's core skills include Python, React.js, Node.js, Express, MongoDB, SQL, LangChain, LangGraph, Machine Learning, and NLP. He is well-versed in both data science and full-stack development.";
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("hire") || lowerQuery.includes("phone") || lowerQuery.includes("connect")) {
      return "You can contact Mohit Negi via email at cse24135@iiitkalyani.ac.in, or by phone at +91-8923645746. He is currently based in Kotdwar, Uttarakhand.";
    }
    if (lowerQuery.includes("project") || lowerQuery.includes("build") || lowerQuery.includes("work")) {
      return "Mohit has built several impressive projects: \n- **Zomato Delivery App** (MERN Stack)\n- **LangGraph AI Chatbot** (Stateful agent with memory)\n- **Enterprise Knowledge Copilot** (RAG document Q&A)\n- **Book Recommendation System** (ML cosine similarity)\n- **WhatsApp Chat Analyzer** (Regex & NLP)";
    }
    if (lowerQuery.includes("education") || lowerQuery.includes("college") || lowerQuery.includes("iiit") || lowerQuery.includes("university")) {
      return "Mohit is pursuing a B.Tech in Computer Science and Engineering at the Indian Institute of Information Technology (IIIT), Kalyani (2024 - Present). He currently holds an excellent CGPA of 9.03/10.0.";
    }
    if (lowerQuery.includes("hackathon") || lowerQuery.includes("achievement") || lowerQuery.includes("codeforces") || lowerQuery.includes("winner")) {
      return "Mohit's achievements include:\n- **2nd Runner-Up** at InnovateX Hackathon (GDG IIIT Kalyani)\n- **Winner** of the Botball Robotics Competition\n- **2nd Runner-Up** in the Maze Solver Robotics Competition\n- Solved 200+ problems across LeetCode and Codeforces.";
    }

    return "That's a great question! I am Mohit's AI assistant. He is a skilled developer in Full-Stack, AI/ML, and Data Science. Feel free to reach out to him directly at cse24135@iiitkalyani.ac.in for more details!";
  };

  const handleSendMessage = async (textToSend) => {
    if (!textToSend.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: data.reply,
        },
      ]);
    } catch (err) {
      console.log("Backend offline or error. Falling back to local NLP agent.");
      // Fallback response with delay to simulate typing
      setTimeout(() => {
        const fallbackText = getLocalResponse(textToSend);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "ai",
            text: fallbackText,
          },
        ]);
      }, 600);
    } finally {
      setTimeout(() => setIsTyping(false), 600);
    }
  };

  // Helper function to format rich response text (bolding, lists)
  const formatMessageText = (text) => {
    if (!text) return "";

    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      const trimmed = line.trim();
      const isBullet = trimmed.startsWith("-") || trimmed.startsWith("*");
      const lineText = isBullet ? trimmed.substring(1).trim() : line;

      const regex = /\*\*(.*?)\*\*/g;
      const content = [];
      let match;
      let lastIndex = 0;
      let elementKey = 0;

      while ((match = regex.exec(lineText)) !== null) {
        if (match.index > lastIndex) {
          content.push(<span key={elementKey++}>{lineText.substring(lastIndex, match.index)}</span>);
        }
        content.push(
          <strong key={elementKey++} style={{ color: "#00f5ff" }}>
            {match[1]}
          </strong>
        );
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < lineText.length) {
        content.push(<span key={elementKey++}>{lineText.substring(lastIndex)}</span>);
      }

      if (isBullet) {
        return (
          <li key={lineIdx} className="chatbot-list-item" style={{ marginLeft: "12px", listStyleType: "disc", marginBottom: "4px" }}>
            {content.length > 0 ? content : lineText}
          </li>
        );
      }

      return (
        <p key={lineIdx} style={{ margin: "0 0 8px 0" }}>
          {content.length > 0 ? content : lineText}
        </p>
      );
    });
  };

  return (
    <div className="portfolio-chatbot">
      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="avatar-container">
                <img src={profileImg} alt="Mohit Negi" className="chatbot-avatar-img" />
                <div className="online-indicator"></div>
              </div>
              <div className="header-text">
                <span className="chatbot-title">Mohit's Copilot</span>
                <span className="chatbot-subtitle">AI Assistant Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <XLg size={16} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-bubble-wrapper ${
                  msg.sender === "user" ? "user-wrapper" : "ai-wrapper"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="message-avatar ai-msg-avatar">
                    <img src={profileImg} alt="Mohit Negi" className="message-avatar-img" />
                  </div>
                )}
                <div
                  className={`chatbot-bubble ${
                    msg.sender === "user" ? "user-bubble" : "ai-bubble"
                  }`}
                >
                  {msg.sender === "user" ? msg.text : formatMessageText(msg.text)}
                </div>
                {msg.sender === "user" && (
                  <div className="message-avatar user-msg-avatar">
                    <Person size={14} />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-bubble-wrapper ai-wrapper">
                <div className="message-avatar ai-msg-avatar">
                  <img src={profileImg} alt="Mohit Negi" className="message-avatar-img" />
                </div>
                <div className="chatbot-bubble ai-bubble typing-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggest chips */}
          <div className="chatbot-chips">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                className="chip-btn"
                onClick={() => handleSendMessage(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            className="chatbot-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
          >
            <input
              type="text"
              placeholder="Ask me something..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" disabled={!inputText.trim()}>
              <SendFill size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button className="chatbot-trigger" onClick={() => setIsOpen(true)}>
          <ChatDotsFill size={26} className="trigger-icon" />
          <span className="trigger-tooltip">Chat with AI</span>
        </button>
      )}
    </div>
  );
};
