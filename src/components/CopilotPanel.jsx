import React from 'react';

export default function CopilotPanel() {
  return (
    <div className="h-full flex flex-col justify-between p-4 dark:bg-gray-900">
      <div className="text-center mt-8">
        <div className="text-2xl">🤖</div>
        <h2 className="text-lg font-semibold mt-2">Hi, I'm Fin AI Copilot</h2>
        <p className="text-sm text-gray-500 mt-1">
          Ask me anything about this conversation.
        </p>
      </div>
      <div>
        <label className="text-xs text-gray-500 mb-1 block">Suggested</label>
        <div className="bg-gray-100 dark:bg-gray-800 rounded px-3 py-2 mb-3 text-sm">
          How do I get a refund?
        </div>
        <input
          className="w-full px-3 py-2 border rounded text-sm dark:bg-gray-800 dark:text-white"
          placeholder="Ask a question..."
        />
      </div>
    </div>
  );
}
