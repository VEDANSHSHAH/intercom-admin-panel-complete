
import React from "react";
export default function MessageView() {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-4">
      <div className="bg-gray-100 w-fit px-4 py-2 rounded-lg">When will it be delivered?</div>
      <div className="bg-blue-500 text-white w-fit px-4 py-2 rounded-lg ml-auto">It will arrive by Friday.</div>
    </div>
  );
}
