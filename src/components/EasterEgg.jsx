import React, { useState } from "react";

export default function EasterEgg() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setVisible((v) => !v)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 dark:bg-purple-700 text-white hover:scale-110 transition"
        title="Try clicking me"
      >
        🪄
      </button>
      {visible && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-zinc-800 text-sm rounded shadow-lg p-2 z-10">
          <p className="text-zinc-800 dark:text-white">✨ Hidden trick revealed!</p>
        </div>
      )}
    </div>
  );
}
