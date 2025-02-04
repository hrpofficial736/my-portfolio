import React from "react";
import { LogoAnimation } from "./LogoAnimation";
import { ubuntuFont } from "./Menus";

export const MadeWith: React.FC = () => {
  return (
    <main
      className={`glassmorphism ${ubuntuFont.className} px-3 py-1 w-[125px] rounded-2xl mt-5 absolute right-10 bottom-10 text-white text-sm`}
    >
      <div className="flex items-center justify-center gap-x-2 relative overflow-hidden">
        Made with
        <LogoAnimation />
      </div>
    </main>
  );
};
