import React from "react";
import { LogoAnimation } from "./LogoAnimation";

export const MadeWith: React.FC = () => {
  return (
    <main className="glassmorphism px-3 py-1 w-[120px] rounded-2xl mt-5 absolute right-10 bottom-10 text-white text-sm">
      <div className="flex items-center justify-center gap-x-2 relative overflow-hidden">
        Made with
        <LogoAnimation />
      </div>
    </main>
  );
};
