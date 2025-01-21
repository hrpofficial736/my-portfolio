import React from "react";

export const ToolBar: React.FC = () => {
  return (
    <main className="w-[20%] h-20 flex items-center justify-center gap-x-2 rounded-3xl px-3 py-2 mb-5 glassmorphism">
      <div className="h-[80%] w-[20%] bg-red-600 rounded-full"></div>
      <div className="h-[80%] w-[20%] bg-red-600 rounded-full"></div>
      <div className="h-[80%] w-[20%] bg-red-600 rounded-full"></div>
      <div className="h-[80%] w-[20%] bg-red-600 rounded-full"></div>
      <div className="h-[80%] w-[20%] bg-red-600 rounded-full"></div>
    </main>
  );
};
