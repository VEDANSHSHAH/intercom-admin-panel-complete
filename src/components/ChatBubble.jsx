import React from "react";

export default function ChatBubble({ message }) {
  const isAgent = message.from === "agent";
  return (
    <div className={`flex ${isAgent ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          isAgent ? "bg-blue-600 text-white" : "bg-gray-100"
        }`}
      >
        {message.text}
        <div className="text-xs text-gray-500 mt-1 text-right">{message.time}</div>
      </div>
    </div>
  );
}