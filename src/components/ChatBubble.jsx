import React from "react";

export default function ChatBubble({ from, text, time }) {
  const isAgent = from === "agent";
  return (
    <div className={`flex ${isAgent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] p-3 rounded-xl text-sm shadow relative ${
          isAgent
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white rounded-bl-none"
        }`}
      >
        {text}
        <div className="absolute -bottom-4 right-2 text-xs text-zinc-400">{time}</div>
      </div>
    </div>
  );
}
