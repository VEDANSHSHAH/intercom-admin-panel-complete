// src/components/EasterEgg.jsx
import React, { useState } from 'react';

export default function EasterEgg() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      className="text-sm w-7 h-7 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400"
      title="Click me 3x!"
    >
      ?
      {count >= 3 && (
        <div className="absolute top-12 right-0 bg-blue-500 text-white px-3 py-1 rounded shadow">
          🎉 You found an easter egg!
        </div>
      )}
    </button>
  );
}

