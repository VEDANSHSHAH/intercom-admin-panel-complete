import React, { useState } from 'react';
import ConversationList from '../components/ConversationList';
import MessageView from '../components/MessageView';
import ToggleTheme from '../components/ToggleTheme';
import CopilotPanel from '../components/CopilotPanel';
import DetailsPanel from '../components/DetailsPanel';

const DUMMY_CONVERSATIONS = [
  {
    id: 1,
    name: 'Luis Easton',
    status: 'online',
    avatar: 'https://i.pravatar.cc/40?u=luis',
    messages: [
      { from: 'user', text: 'Hi, I need help with my order.', time: '22m' },
      { from: 'agent', text: 'Let me just look into this for you, Luis.', time: '21m' },
      { from: 'agent', text: 'We can only refund orders from the last 60 days.', time: '21m' }
    ]
  },
  {
    id: 2,
    name: 'Ivan - Nike',
    status: 'offline',
    avatar: 'https://i.pravatar.cc/40?u=ivan',
    messages: [
      { from: 'user', text: 'When will it be delivered?', time: '30m' },
      { from: 'agent', text: 'It will arrive by Friday.', time: '28m' }
    ]
  }
];

export default function Dashboard() {
  const [selectedId, setSelectedId] = useState(DUMMY_CONVERSATIONS[0].id);
  const [activeTab, setActiveTab] = useState('copilot');
  const activeConversation = DUMMY_CONVERSATIONS.find(c => c.id === selectedId);

  return (
    <div className="flex flex-col h-[92vh] w-full rounded-md border bg-white dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700 shadow-sm">
        <h1 className="text-xl font-semibold tracking-tight">Your Inbox</h1>
        <ToggleTheme />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[22%] border-r bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          <ConversationList
            conversations={DUMMY_CONVERSATIONS}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Center Chat */}
        <div className="w-[50%] flex flex-col border-r">
          <MessageView conversation={activeConversation} />
        </div>

        {/* Right Panel */}
        <div className="w-[28%] overflow-y-auto dark:bg-gray-900">
          <div className="flex justify-around text-sm font-semibold border-b dark:border-gray-700">
            <button
              onClick={() => setActiveTab('copilot')}
              className={`w-full py-3 ${activeTab === 'copilot' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            >
              AI Copilot
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`w-full py-3 ${activeTab === 'details' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            >
              Details
            </button>
          </div>
          {activeTab === 'copilot' ? (
            <CopilotPanel />
          ) : (
            <DetailsPanel assignee="Brian Byrne" team="Unassigned" />
          )}
        </div>
      </div>
    </div>
  );
}
