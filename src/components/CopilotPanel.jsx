import React from "react";

const suggestions = [
  "Summarize this thread",
  "Detect customer sentiment",
  "Draft a follow-up message",
];

export default function CopilotPanel() {
  return (
    <div className="w-[280px] p-4 text-sm space-y-4 dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-700">
      <div className="text-center mt-4">
        <div className="text-2xl">🤖</div>
        <h3 className="text-lg font-semibold mt-2">Fin AI Copilot</h3>
        <p className="text-zinc-500 mt-1">How can I help with this conversation?</p>
      </div>
      <div className="space-y-2">
        {suggestions.map((text, index) => (
          <div
            key={index}
            className="rounded-md px-3 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-600 cursor-pointer transition"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
