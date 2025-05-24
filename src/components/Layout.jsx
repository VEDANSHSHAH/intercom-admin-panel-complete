import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-inner rounded-tl-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
