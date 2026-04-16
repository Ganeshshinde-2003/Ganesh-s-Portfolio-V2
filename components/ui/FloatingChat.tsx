"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader } from "lucide-react";

const INITIAL_MESSAGES = [
  {
    id: 1,
    text: "Hey! I'm Ganesh's AI. Ask me anything about Ganesh's work, projects, skills, or portfolio!",
    sender: "bot" as const,
  },
];

// Function to render links and emails as hyperlinks
const renderLinksAndEmails = (text: string): (string | JSX.Element)[] => {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[\w.-]+@[\w.-]+\.\w+)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  const matches = Array.from(text.matchAll(urlRegex));
  if (matches.length === 0) return [text];

  matches.forEach((match) => {
    const offset = match.index || 0;
    const matchText = match[0];

    // Skip if it's part of markdown [text](url)
    if (text[offset - 1] === "]" && text[offset + matchText.length] === ")") {
      return;
    }

    // Add text before the match
    if (offset > lastIndex) {
      parts.push(text.substring(lastIndex, offset));
    }

    // Add the link
    const isEmail = matchText.includes("@");
    const href = isEmail
      ? `mailto:${matchText}`
      : matchText.startsWith("http")
        ? matchText
        : `https://${matchText}`;

    parts.push(
      <a
        key={`link-${offset}`}
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className="text-purple underline font-semibold"
      >
        {matchText}
      </a>,
    );

    lastIndex = offset + matchText.length;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

// Function to format message with paragraphs and bullets
const FormatMessage = ({ text }: { text: string }) => {
  const paragraphs = text.split("\n\n");

  return (
    <>
      {paragraphs.map((para, idx) => {
        const lines = para.split("\n");
        const isBulletList = lines.some(
          (line) =>
            line.trim().startsWith("•") ||
            line.trim().startsWith("-") ||
            line.trim().startsWith("*"),
        );

        if (isBulletList) {
          return (
            <ul key={idx} className="list-disc list-inside space-y-1 my-1.5">
              {lines.map((line, lineIdx) => {
                const cleanLine = line.replace(/^[•\-*]\s*/, "").trim();
                return cleanLine ? (
                  <li key={lineIdx} className="text-xs leading-snug">
                    {renderLinksAndEmails(cleanLine)}
                  </li>
                ) : null;
              })}
            </ul>
          );
        }

        const cleanPara = para.trim();
        return cleanPara ? (
          <p key={idx} className="text-xs leading-snug my-1.5">
            {renderLinksAndEmails(cleanPara)}
          </p>
        ) : null;
      })}
    </>
  );
};

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] =
    useState<{ id: number; text: string; sender: "user" | "bot" }[]>(
      INITIAL_MESSAGES,
    );

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("ganesh_chat_messages");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Failed to load chat history:", e);
        setMessages(INITIAL_MESSAGES);
      }
    }
    setIsMounted(true);
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("ganesh_chat_messages", JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight;
      }
    }, 0);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user" as const,
      };
      setMessages((prev) => [...prev, userMessage]);
      const currentInput = inputValue;
      setInputValue("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: currentInput }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: data.reply,
            sender: "bot",
          },
        ]);
      } catch (error) {
        console.error("Chat error:", error);
        const funnyMessages = [
          "Oops! Ganesh ran out of AI credits 💸 Time to sell more projects!",
          "Error 401: Ganesh's wallet is empty. Please refill and try again 😅",
          "My circuits are fried! Ganesh needs to fund the AI before I can think 🤖",
          "I'm taking a nap - the credit card declined 😴",
          "Ganesh forgot to pay the AI bill! Back in 5 mins when he finds his wallet 🚀",
          "I've gone into hibernation mode due to budget cuts 🥶",
          "Error: Brain.exe has stopped. Reason: No funding 💔",
        ];
        const randomMessage =
          funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: randomMessage,
            sender: "bot",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[4999] p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6 text-neutral-50" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[4998]"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 right-0 z-[5000] w-96 h-[600px] rounded-tl-lg shadow-2xl overflow-hidden flex flex-col"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.98)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderBottom: "none",
                borderRight: "none",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple rounded-full" />
                  <div>
                    <h3 className="text-purple font-bold text-sm">
                      Ask Ganesh
                    </h3>
                    <p className="text-xs text-purple-300">
                      Talk to me directly
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-neutral-50 transition-colors p-1 hover:bg-white/10 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-md max-w-xs text-xs leading-snug ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none shadow-md"
                          : "bg-white/10 text-neutral-50 rounded-bl-none border border-white/5"
                      }`}
                    >
                      {msg.sender === "bot" ? (
                        <FormatMessage text={msg.text} />
                      ) : (
                        msg.text
                      )}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 border border-white/5 rounded-lg rounded-bl-none px-4 py-3">
                      <Loader className="w-4 h-4 animate-spin text-purple-400" />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/10 flex gap-2 bg-gradient-to-t from-black/20 to-transparent">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isLoading) handleSendMessage();
                  }}
                  placeholder="Ask about Ganesh..."
                  disabled={isLoading}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:shadow-lg disabled:opacity-50"
                  title="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
