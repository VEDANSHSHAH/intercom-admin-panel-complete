import React, { useState } from 'react';

export default function ConversationList({ conversations, selectedId, onSelect }) {
  const [filter, setFilter] = useState('');
  const filtered = conversations.filter(conv =>
    conv.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <aside className="h-full flex flex-col">
      <div className="p-4 border-b">
        <input
          className="w-full px-3 py-2 text-sm rounded-lg border bg-white dark:bg-gray-800 dark:text-white"
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul className="overflow-y-auto">
        {filtered.map((conv) => (
          <li
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`p-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 ${
              selectedId === conv.id ? 'bg-blue-100 dark:bg-gray-700' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <img src={conv.avatar} alt="" className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-medium">{conv.name}</p>
                <p className="text-xs text-gray-500">{conv.messages.at(-1)?.text}</p>
              </div>
            </div>
            <div className="text-xs text-gray-400">{conv.messages.at(-1)?.time}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
