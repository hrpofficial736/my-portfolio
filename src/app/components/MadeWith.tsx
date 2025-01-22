import React from "react";
import { LogoAnimation } from "./LogoAnimation";

export const MadeWith: React.FC = () => {
  return (
    <main className="glassmorphism px-2 py-1 rounded-2xl mt-5 text-white text-sm">
      <div className="flex items-center justify-center gap-x-2 relative overflow-hidden">
        Made with
        <LogoAnimation />
      </div>
    </main>
  );
};
