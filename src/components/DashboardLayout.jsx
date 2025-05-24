import React from "react";
import ConversationList from "./ConversationList";
import MessageView from "./MessageView";
import CopilotPanel from "./CopilotPanel";
import DetailsPanel from "./DetailsPanel";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <ConversationList />
      <MessageView />
      <CopilotPanel />
      <DetailsPanel />
    </div>
  );
}
