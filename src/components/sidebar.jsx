import React from "react";

const agents = [
  { id: 1, avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, avatar: "https://i.pravatar.cc/40?img=2" },
];

export default function Sidebar() {
  return (
    <aside className="w-[60px] bg-zinc-900 flex flex-col items-center py-4 space-y-4">
      {agents.map(agent => (
        <img
          key={agent.id}
          src={agent.avatar}
          alt="agent"
          className="w-10 h-10 rounded-full border-2 border-zinc-700 hover:border-blue-400"
        />
      ))}
    </aside>
  );
}