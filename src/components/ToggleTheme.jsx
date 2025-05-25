import React, { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="text-white bg-zinc-700 hover:bg-zinc-600 p-2 rounded"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}