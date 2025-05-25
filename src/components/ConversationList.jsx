
import React from "react";
const users = [
  { id: 1, name: "Luis Easton", message: "Need help with refund...", avatar: "https://i.pravatar.cc/40?img=3", time: "2m" },
  { id: 2, name: "Ivan - Nike", message: "Thanks for your support!", avatar: "https://i.pravatar.cc/40?img=8", time: "10m" },
];
export default function ConversationList() {
  return (
    <aside className="w-[280px] bg-white border-r p-4 space-y-4">
      <input className="w-full p-2 border rounded" placeholder="Search..." />
      {users.map(user => (
        <div key={user.id} className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded">
          <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex-1">
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.message}</div>
          </div>
          <span className="text-xs text-gray-400">{user.time}</span>
        </div>
      ))}
    </aside>
  );
}
