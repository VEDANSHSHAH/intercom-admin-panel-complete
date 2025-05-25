
import React from "react";
export default function CopilotPanel() {
  return (
    <div className="w-[300px] bg-white border-l p-4 space-y-4">
      <h2 className="text-lg font-bold">Fin AI Copilot</h2>
      <p className="text-sm text-gray-500">Ask me anything about this conversation.</p>
      <button className="w-full text-left px-3 py-2 bg-gray-100 rounded">Summarize this thread</button>
      <button className="w-full text-left px-3 py-2 bg-gray-100 rounded">Detect customer sentiment</button>
      <button className="w-full text-left px-3 py-2 bg-gray-100 rounded">Draft a follow-up message</button>
    </div>
  );
}
