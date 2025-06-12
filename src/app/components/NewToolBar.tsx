"use client";

import React from "react";
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
      className={`border-2 border-white ${ubuntuFont.className} flex items-center justify-center gap-4 rounded-3xl px-3 py-2 md:mb-5 max-md:fixed max-md:bottom-5`}
    >
      <Tooltip
        id="imageToolTip"
        place="top"
        border={"2px solid white"}
        delayShow={200}
        style={{ backgroundColor: "black", borderRadius: "10px" }}
      />
      <div className="p-2 flex justify-center items-center rounded-2xl bg-gradient-to-b from-white to-white/70 cursor-pointer">
        <Image
          onClick={() => {
            window.open("assets/resume.pdf", "_blank");
          }}
          src={Pdf}
          alt="Resume"
          data-tooltip-id="imageToolTip"
          data-tooltip-content={"My Resume"}
          className="w-12 h-12"
        />
      </div>

      <div className="p-2 flex justify-center items-center rounded-2xl bg-indigo-700 cursor-pointer">
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
          className="w-12 h-12"
        />
      </div>
      <div className="rounded-2xl p-2 flex justify-center items-center bg-gradient-to-b from-white to-blue-300 cursor-pointer">
        <Image
          src={Web}
          alt="Projects"
          onClick={() => {
            callback();
          }}
          className="w-12 h-12"
          data-tooltip-id="imageToolTip"
          data-tooltip-content={"My Projects"}
        />
      </div>
      <div className="p-2 flex justify-center items-center rounded-2xl bg-gradient-to-b from-white/60 to-white cursor-pointer">
        <Image
          src={Github}
          alt="Github"
          onClick={() => {
            window.open("https://github.com/hrpofficial736", "_blank");
          }}
          data-tooltip-id="imageToolTip"
          data-tooltip-content={"Github"}
          className="w-10 h-10"
        />
      </div>
      <div className="p-2 flex justify-center items-center rounded-2xl bg-gradient-to-br from-white to-white/80 cursor-pointer">
        <Image
          src={Twitter}
          alt="Twitter"
          onClick={() => {
            window.open("https://x.com/hrpofficial736", "_blank");
          }}
          data-tooltip-id="imageToolTip"
          data-tooltip-content={"Twitter"}
          className="w-10 h-10"
        />
      </div>
    </main>
  );
};
