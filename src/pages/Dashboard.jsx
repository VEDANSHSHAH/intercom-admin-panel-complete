// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ConversationList from '../components/ConversationList';
import MessageView from '../components/MessageView';
import CopilotPanel from '../components/CopilotPanel';
import DetailsPanel from '../components/DetailsPanel';
import ToggleTheme from '../components/ToggleTheme';
import EasterEgg from '../components/EasterEgg';

export default function Dashboard() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [view, setView] = useState('copilot');

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between px-4 py-2 border-b bg-white dark:bg-zinc-950 dark:border-zinc-800">
          <h2 className="text-lg font-semibold tracking-tight">Your inbox</h2>
          <div className="flex gap-2">
            <ToggleTheme />
            <EasterEgg />
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <ConversationList
            onSelect={(conv) => setSelectedConversation(conv)}
            selectedId={selectedConversation?.id}
          />
          <MessageView
            conversation={selectedConversation}
            onClose={() => setSelectedConversation(null)}
          />
          <div className="w-[300px] border-l border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center px-4 pt-3 border-b dark:border-zinc-700">
              <button
                onClick={() => setView('copilot')}
                className={`mr-4 pb-2 border-b-2 transition-all duration-200 ${
                  view === 'copilot' ? 'border-blue-500 text-blue-500' : 'border-transparent text-zinc-500'
                }`}
              >
                Copilot
              </button>
              <button
                onClick={() => setView('details')}
                className={`pb-2 border-b-2 transition-all duration-200 ${
                  view === 'details' ? 'border-blue-500 text-blue-500' : 'border-transparent text-zinc-500'
                }`}
              >
                Details
              </button>
            </div>
            <div className="overflow-y-auto h-full">
              {view === 'copilot' ? <CopilotPanel /> : <DetailsPanel />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
