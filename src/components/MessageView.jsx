import React from "react";
import ChatBubble from "./ChatBubble";

const messages = [
  { from: "user", text: "When will it be delivered?", time: "30m" },
  { from: "agent", text: "It will arrive by Friday.", time: "28m" },
];

export default function MessageView() {
  return (
    <section className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Ivan - Nike</h2>
      <div className="space-y-2">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
      </div>
    </section>
  );
}