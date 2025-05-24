import React from 'react';

export default function DetailsPanel({ assignee, team }) {
  return (
    <div className="p-4 dark:bg-gray-900 space-y-4 text-sm">
      <div>
        <p className="text-gray-500 font-semibold mb-1">Assignee</p>
        <p>{assignee}</p>
        <p className="text-gray-500 font-semibold mt-4 mb-1">Team</p>
        <p>{team}</p>
      </div>
      <div className="border-t pt-4 space-y-3">
        <h3 className="font-semibold text-gray-600 dark:text-gray-300">Links</h3>
        <ul className="space-y-1">
          {['Tracker ticket', 'Back-office tickets', 'Side conversations'].map((label) => (
            <li key={label} className="flex justify-between">
              <span>{label}</span> <button className="text-blue-500 font-bold">+</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
