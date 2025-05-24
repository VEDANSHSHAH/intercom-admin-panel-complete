import React from 'react';

export default function ChatBubble({ from, text, time, avatar }) {
  const isAgent = from === 'agent';
  return (
    <div className={`flex ${isAgent ? 'justify-end' : 'justify-start'} mb-2`}>
      {!isAgent && (
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full mr-2 self-end" />
      )}
      <div className={`max-w-[70%] p-3 rounded-xl text-sm shadow-sm relative ${
        isAgent
          ? 'bg-blue-500 text-white rounded-br-none'
          : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-bl-none'
      }`}>
        <p>{text}</p>
        <span className="absolute -bottom-4 right-2 text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}
