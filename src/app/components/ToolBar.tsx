"use client";

import React, { useEffect, useState } from "react";
import {
  Pdf,
  Mail,
  Web,
  Twitter,
  Github,
} from "../../../exports/assets/exports";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { ubuntuFont } from "./Menus";

export const ToolBar: React.FC<{
  callback: () => void;
}> = ({ callback }) => {
  
  return (
    <main
      className={`w-[20%] min-w-[330px] ${ubuntuFont.className} h-20 flex items-center justify-center gap-x-4 rounded-3xl px-3 py-2 md:mb-5 max-md:fixed max-md:bottom-5 glassmorphism`}
    >
      <Tooltip
        id="imageToolTip"
        place="top"
        border={"2px solid white"}
        delayShow={200}
        style={{ backgroundColor: "black", borderRadius: "10px" }}
      />
      <Image
        onClick={() => {
          window.open("assets/resume.pdf", "_blank");
        }}
        src={Pdf}
        alt="Resume"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"My Resume"}
        className="h-[80%] w-[20%] rounded-2xl bg-gradient-to-b from-white to-white/70 cursor-pointer"
      />

      <Image
        src={Mail}
        alt="Mail"
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"Mail me"}
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=hrpofficial736@gmail.com&su=Hey, Harshit Raj Pandey!&body=Let's build a project...",
            "_blank"
          );
        }}
        className="h-[80%] w-[20%] rounded-2xl p-1 bg-indigo-700 cursor-pointer"
      />
      <Image
        src={Web}
        alt="Projects"
        onClick={() => {
          callback();
        }}
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"My Projects"}
        className="h-[80%] w-[20%] rounded-2xl p-2 bg-gradient-to-b from-white to-blue-300 cursor-pointer"
      />
      <Image
        src={Github}
        alt="Github"
        onClick={() => {
          window.open("https://github.com/hrpofficial736", "_blank");
        }}
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"Github"}
        className="h-[80%] w-[20%] rounded-2xl p-1 bg-gradient-to-b from-white/60 to-white cursor-pointer"
      />
      <Image
        src={Twitter}
        alt="Twitter"
        onClick={() => {
          window.open("https://x.com/hrpofficial736", "_blank");
        }}
        data-tooltip-id="imageToolTip"
        data-tooltip-content={"Twitter"}
        className="h-[80%] w-[20%] rounded-2xl p-2 bg-gradient-to-br from-white to-white/80 cursor-pointer"
      />
    </main>
  );
};
