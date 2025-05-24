import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";

export default function MessageView({ messages = [] }) {
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showMentions, setShowMentions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChange = (e) => {
    setInput(e.target.value);
    setShowMentions(e.target.value.includes("@"));
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setInput("");
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900">
      <div ref={containerRef} className="px-4 py-6 space-y-3 overflow-y-auto">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} {...msg} />
        ))}
        {typing && <p className="text-xs italic text-zinc-400">Agent is typing...</p>}
      </div>
      <div className="border-t dark:border-zinc-700 p-4 bg-white dark:bg-zinc-950">
        <div className="relative">
          <input
            value={input}
            onChange={handleChange}
            placeholder="Write a reply..."
            className="w-full rounded border px-4 py-2 text-sm dark:bg-zinc-800 dark:text-white"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:scale-105 transition"
          >
            Send
          </button>
        </div>
        {showMentions && (
          <div className="mt-2 p-2 text-sm rounded bg-zinc-100 dark:bg-zinc-800 shadow">
            <p className="mb-1 text-zinc-500">Mention suggestions:</p>
            <ul className="flex gap-2">
              {["@support", "@billing", "@admin"].map((m) => (
                <li
                  key={m}
                  className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-500"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
