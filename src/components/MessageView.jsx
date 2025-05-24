import React from 'react';
import ChatBubble from './ChatBubble';

export default function MessageView({ conversation }) {
  return (
    <div className="flex flex-col h-full p-4 overflow-y-auto">
      <div className="mb-4 text-lg font-semibold">{conversation.name}</div>
      <div className="space-y-2 flex-1">
        {conversation.messages.map((msg, index) => (
          <ChatBubble
            key={index}
            from={msg.from === 'agent' ? 'agent' : 'user'}
            text={msg.text}
            time={msg.time}
            avatar={conversation.avatar}
          />
        ))}
      </div>
    </div>
  );
}
