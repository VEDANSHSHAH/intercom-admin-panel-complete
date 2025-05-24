import React from "react";
import ToggleTheme from "./ToggleTheme";
import EasterEgg from "./EasterEgg";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
      <h1 className="text-lg font-semibold text-zinc-800 dark:text-white">Inbox</h1>
      <div className="flex items-center gap-4">
        <EasterEgg />
        <ToggleTheme />
        <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-600">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
