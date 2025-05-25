
import React from "react";
export default function DetailsPanel() {
  return (
    <div className="p-4 space-y-2">
      <h3 className="font-medium text-sm text-gray-700">Assignee</h3>
      <p>Brian Byrne</p>
      <h3 className="font-medium text-sm text-gray-700 mt-4">Team</h3>
      <p>Success Support</p>
      <h3 className="font-medium text-sm text-gray-700 mt-4">Tags</h3>
      <div className="flex gap-2 text-xs">
        <span className="bg-gray-200 px-2 py-1 rounded">#refund</span>
        <span className="bg-gray-200 px-2 py-1 rounded">#priority</span>
        <span className="bg-gray-200 px-2 py-1 rounded">#vip</span>
      </div>
      <h3 className="font-medium text-sm text-gray-700 mt-4">Links</h3>
      <ul className="text-sm text-blue-600 space-y-1">
        <li>Back-office + Add</li>
        <li>Tracker ticket + Add</li>
        <li>CRM profile + Add</li>
      </ul>
    </div>
  );
}
