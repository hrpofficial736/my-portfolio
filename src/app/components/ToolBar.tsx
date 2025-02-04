import React from "react";
import {
  Pdf,
  Mail,
  Web,
  Contact,
  Github,
} from "../../../exports/assets/exports";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { ubuntuFont } from "./Menus";

export const ToolBar: React.FC = () => {
  return (
    <main
      className={`w-[20%] ${ubuntuFont.className} h-20 flex items-center justify-center gap-x-2 rounded-3xl px-3 py-2 mb-5 glassmorphism`}
    >
      <Tooltip
        id="imageToolTip"
        place="top"
        border={"2px solid white"}
        delayShow={200}
        style={{ backgroundColor: "black", borderRadius: "10px" }}
      />
      <Image
        src={Pdf}
        alt="Pdf"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"My Resume"}
        className="h-[80%] w-[20%] rounded-2xl bg-gradient-to-b from-white to-white/70 cursor-pointer"
      />
      <Image
        src={Mail}
        alt="Pdf"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"Mail me"}
        className="h-[80%] w-[20%] rounded-2xl p-1 bg-indigo-700 cursor-pointer"
      />
      <Image
        src={Web}
        alt="Pdf"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"My Projects"}
        className="h-[80%] w-[20%] rounded-2xl p-2 bg-gradient-to-b from-white to-blue-300 cursor-pointer"
      />
      <Image
        src={Github}
        alt="Pdf"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"Github"}
        className="h-[80%] w-[20%] rounded-2xl p-1 bg-gradient-to-b from-white/60 to-white cursor-pointer"
      />
      <Image
        src={Contact}
        alt="Pdf"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"Contact me"}
        className="h-[80%] w-[20%] rounded-2xl p-1 bg-gradient-to-b from-green-600 to-green-800 cursor-pointer"
      />
    </main>
  );
};
