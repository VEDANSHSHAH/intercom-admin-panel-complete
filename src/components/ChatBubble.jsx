// src/components/ChatBubble.jsx
import React from 'react';

export default function ChatBubble({ from, text, time }) {
  const isAgent = from === 'agent';
  return (
    <div className={`flex ${isAgent ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-[70%] p-3 rounded-lg text-sm shadow-sm relative transition-all duration-200 ${
          isAgent ? 'bg-blue-600 text-white rounded-br-none' : 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white rounded-bl-none'
        }`}
      >
        {text}
        <span className="absolute -bottom-4 right-2 text-xs text-zinc-400">{time}</span>
      </div>
    </div>
  );
}
