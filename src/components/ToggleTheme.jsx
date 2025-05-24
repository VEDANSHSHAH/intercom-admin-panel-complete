// src/components/ToggleTheme.jsx
import React, { useEffect, useState } from 'react';

export default function ToggleTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm px-3 py-1 bg-zinc-200 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded transition shadow"
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
