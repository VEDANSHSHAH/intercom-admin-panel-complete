import React, { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Luis Easton",
    status: "online",
    lastMessage: "Need help with refund...",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    name: "Ivan - Nike",
    status: "offline",
    lastMessage: "Thanks for your support!",
    time: "10m ago",
    unread: false,
  },
];

export default function ConversationList({ selectedId, onSelect }) {
  const [filter, setFilter] = useState("");

  const filtered = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-[280px] border-r border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <div className="p-3 border-b border-zinc-200 dark:border-zinc-700">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-3 py-2 text-sm rounded border bg-white dark:bg-zinc-800 dark:text-white"
          placeholder="Search..."
        />
      </div>
      <ul>
        {filtered.map((conv) => (
          <li
            key={conv.id}
            onClick={() => onSelect(conv)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition ${
              selectedId === conv.id ? "bg-blue-50 dark:bg-zinc-800" : ""
            }`}
          >
            <div>
              <p className="font-medium text-sm">{conv.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{conv.lastMessage}</p>
            </div>
            <div className="text-xs text-right space-y-1">
              <p className="text-zinc-400">{conv.time}</p>
              {conv.unread && (
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
