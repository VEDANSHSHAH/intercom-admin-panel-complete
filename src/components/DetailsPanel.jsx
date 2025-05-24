// src/components/DetailsPanel.jsx
import React from 'react';

const details = {
  assignee: 'Brian Byrne',
  team: 'Success Support',
  tags: ['refund', 'priority', 'vip'],
  links: ['Back-office', 'Tracker ticket', 'CRM profile']
};

export default function DetailsPanel() {
  return (
    <div className="p-4 text-sm space-y-6 dark:bg-zinc-900">
      <div>
        <h4 className="text-zinc-500 font-semibold mb-1">Assignee</h4>
        <p>{details.assignee}</p>
        <h4 className="text-zinc-500 font-semibold mt-4 mb-1">Team</h4>
        <p>{details.team}</p>
      </div>

      <div>
        <h4 className="text-zinc-500 font-semibold mb-1">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {details.tags.map((tag, idx) => (
            <span key={idx} className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-zinc-500 font-semibold mb-1">Links</h4>
        <ul className="space-y-1">
          {details.links.map((label, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{label}</span>
              <button className="text-blue-500 text-xs hover:underline">+ Add</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
