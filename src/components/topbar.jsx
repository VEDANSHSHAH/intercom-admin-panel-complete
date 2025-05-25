import React from "react";
import ToggleTheme from "./ToggleTheme";

export default function Topbar() {
  return (
    <div className="h-12 border-b px-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Your Inbox</h1>
      <ToggleTheme />
    </div>
  );
}