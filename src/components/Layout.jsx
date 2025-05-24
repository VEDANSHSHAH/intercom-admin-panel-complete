import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
