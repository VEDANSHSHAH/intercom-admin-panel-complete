import React from "react";

const conversations = [
  { id: 1, name: "Luis Easton", preview: "Need help with refund...", time: "2m" },
  { id: 2, name: "Ivan - Nike", preview: "Thanks for your support!", time: "10m" },
];

export default function ConversationList() {
  return (
    <aside className="w-[280px] border-r p-4">
      <input
        placeholder="Search..."
        className="w-full p-2 border rounded mb-4"
      />
      {conversations.map(conv => (
        <div key={conv.id} className="py-2 border-b">
          <strong>{conv.name}</strong>
          <p className="text-sm text-gray-500">{conv.preview}</p>
          <span className="text-xs text-gray-400">{conv.time} ago</span>
        </div>
      ))}
    </aside>
  );
}