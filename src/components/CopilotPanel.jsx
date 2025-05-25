import React from "react";

export default function CopilotPanel() {
  return (
    <aside className="w-[300px] border-l p-4 bg-zinc-50 dark:bg-zinc-900">
      <h3 className="text-center font-bold text-lg mb-2">Hi, I'm Fin AI Copilot</h3>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300">
        Ask me anything about this conversation.
      </p>
      <div className="mt-4 space-y-2">
        <button className="w-full p-2 bg-zinc-200 hover:bg-zinc-300 rounded">
          🧠 Summarize this thread
        </button>
        <button className="w-full p-2 bg-zinc-200 hover:bg-zinc-300 rounded">
          📊 Detect sentiment
        </button>
        <button className="w-full p-2 bg-zinc-200 hover:bg-zinc-300 rounded">
          ✏️ Draft reply
        </button>
      </div>
    </aside>
  );
}