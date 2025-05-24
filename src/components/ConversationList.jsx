// src/components/ConversationList.jsx
import React, { useState } from 'react';

const conversations = [
  { id: 1, name: 'Alice Johnson', status: 'online', lastMessage: 'Need help with refund...', time: '2m ago', unread: true },
  { id: 2, name: 'Bob Smith', status: 'offline', lastMessage: 'Thanks for the support!', time: '10m ago', unread: false }
];

export default function ConversationList({ selectedId, onSelect }) {
  const [filter, setFilter] = useState('');
  const filtered = conversations.filter(conv =>
    conv.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-[300px] border-r dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="p-3">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-3 py-2 text-sm rounded border dark:bg-zinc-800 dark:text-white"
          placeholder="Search..."
        />
      </div>
      <ul>
        {filtered.map(conv => (
          <li
            key={conv.id}
            onClick={() => onSelect(conv)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 ${selectedId === conv.id ? 'bg-blue-50 dark:bg-zinc-800' : ''}`}
          >
            <div>
              <p className="font-medium text-sm">{conv.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{conv.lastMessage}</p>
            </div>
            <div className="text-xs text-right">
              <p className="text-zinc-400">{conv.time}</p>
              {conv.unread && <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
