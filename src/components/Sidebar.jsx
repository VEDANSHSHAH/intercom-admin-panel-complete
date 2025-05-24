// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const agents = [
  { id: 1, name: 'Alex', avatar: 'https://i.pravatar.cc/40?img=1', online: true, metrics: { response: '2m', rating: '4.8⭐', load: '3 chats' } },
  { id: 2, name: 'Jordan', avatar: 'https://i.pravatar.cc/40?img=2', online: false, metrics: { response: '5m', rating: '4.6⭐', load: '5 chats' } }
];

export default function Sidebar() {
  return (
    <aside className="w-[60px] bg-zinc-800 text-white flex flex-col items-center py-4 space-y-4 shadow-md">
      <NavLink to="/" className="text-lg font-bold hover:text-blue-400">💬</NavLink>
      <div className="flex flex-col space-y-4">
        {agents.map((agent) => (
          <div key={agent.id} className="relative group">
            <img
              src={agent.avatar}
              alt={agent.name}
              className={`w-10 h-10 rounded-full border-2 ${agent.online ? 'border-green-400 animate-pulse' : 'border-zinc-600'}`}
            />
            <div className="absolute left-12 top-1 bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white px-2 py-1 text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <p><strong>{agent.name}</strong></p>
              <p>⏱ {agent.metrics.response}</p>
              <p>⭐ {agent.metrics.rating}</p>
              <p>💼 {agent.metrics.load}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
