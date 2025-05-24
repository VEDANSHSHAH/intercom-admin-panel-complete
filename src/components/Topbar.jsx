import React from "react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Inbox</h1>
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-black dark:hover:text-white transition">
          Settings
        </button>
        <img
          src="https://i.pravatar.cc/40?u=user"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
