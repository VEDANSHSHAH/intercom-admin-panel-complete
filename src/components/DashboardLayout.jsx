import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import ConversationList from "./ConversationList";
import MessageView from "./MessageView";
import CopilotPanel from "./CopilotPanel";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex flex-1 overflow-hidden">
          <ConversationList />
          <MessageView />
          <CopilotPanel />
        </div>
      </div>
    </div>
  );
}