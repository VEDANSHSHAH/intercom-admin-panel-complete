// src/components/MessageView.jsx
import React, { useEffect, useRef, useState } from 'react';
import ChatBubble from './ChatBubble';

const fakeTypingDelay = 1500;
const mentionSuggestions = ['@support', '@billing', '@admin'];

export default function MessageView({ conversation }) {
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showMentions, setShowMentions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleChange = (e) => {
    setInput(e.target.value);
    setShowMentions(e.target.value.includes('@'));
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setInput('');
    }, fakeTypingDelay);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div
        ref={containerRef}
        className="flex-1 px-4 py-6 overflow-y-auto bg-zinc-50 dark:bg-zinc-900"
      >
        {!conversation && (
          <p className="text-center text-sm text-zinc-400 mt-20">
            Select a conversation to get started.
          </p>
        )}
        {conversation?.messages.map((msg, idx) => (
          <ChatBubble key={idx} {...msg} />
        ))}
        {typing && (
          <div className="text-sm text-zinc-400 italic">Agent is typing...</div>
        )}
      </div>
      <div className="border-t dark:border-zinc-700 p-4 bg-white dark:bg-zinc-950">
        <div className="relative">
          <input
            value={input}
            onChange={handleChange}
            className="w-full rounded border px-4 py-2 text-sm dark:bg-zinc-800 dark:text-white"
            placeholder="Write a reply..."
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
              {mentionSuggestions.map((m) => (
                <li key={m} className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-500">
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
