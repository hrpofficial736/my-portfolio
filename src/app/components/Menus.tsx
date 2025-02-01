import Image from "next/image";
import React from "react";
import {
  Pdf,
  Mail,
  Web,
  Contact,
  Github,
  LinkedIn,
  FullScreen,
} from "../../../exports/assets/exports";
import { useRouter } from "next/navigation";

interface MenuProps {
  callback: (width: number, height: number) => void;
}

export const Menus: React.FC<MenuProps> = ({ callback }) => {
  const goFullscreen = () => {
    const element = document.documentElement; // Makes the entire page fullscreen
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };
  const router = useRouter();
  return (
    <main
      className={`w-max absolute top-14 left-2 px-3 py-3 flex items-center text-white text-sm`}
    >
      <div className="grid grid-rows-3 gap-y-7 gap-x-3 justify-center items-center grid-cols-2">
        <div className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]">
          <Image
            src={Pdf}
            alt="Pdf"
            className="w-[50px] h-[50px] p-1 rounded-2xl bg-gradient-to-b from-white to-white/70 cursor-pointer"
          />
          My Resume
        </div>
        <div
          onClick={() => {
            router.push(
              "https://mail.google.com/mail/?view=cm&fs=1&to=hrpofficial736@gmail.com&su=Hey, Harshit Raj Pandey!&body=Let's build a project...",
            );
          }}
          className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]"
        >
          <Image
            src={Mail}
            alt="Pdf"
            className="w-[50px] h-[50px] p-1 rounded-2xl bg-indigo-700 cursor-pointer"
          />
          Mail
        </div>
        <div
          onClick={() => {
            callback(500, 500);
          }}
          className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]"
        >
          <Image
            src={Web}
            alt="Pdf"
            className="w-[50px] h-[50px] rounded-2xl p-2 bg-gradient-to-b from-white to-blue-300 cursor-pointer"
          />
          <p className="text-center">Projects</p>
        </div>

        <div className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]">
          <Image
            src={Contact}
            alt="Pdf"
            className="w-[50px] h-[50px] rounded-2xl p-1 bg-gradient-to-b from-green-600 to-green-800 cursor-pointer"
          />
          Contact me
        </div>
        <div
          onClick={() => {
            router.push("http://github.com/hrpofficial736");
          }}
          className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]"
        >
          <Image
            src={Github}
            alt="Pdf"
            className="w-[50px] h-[50px] rounded-2xl bg-gradient-to-b from-white/80 to-white cursor-pointer"
          />
          Github
        </div>
        <div
          onClick={() => {
            router.push(
              "https://www.linkedin.com/in/harshit-raj-pandey-661892275/",
            );
          }}
          className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]"
        >
          <Image
            src={LinkedIn}
            alt="Pdf"
            className="w-[50px] h-[50px] rounded-2xl cursor-pointer"
          />
          LinkedIn
        </div>
        <div
          onClick={() => {
            goFullscreen();
          }}
          className="flex-col flex gap-y-2 justify-center items-center max-w-[80px]"
        >
          <Image
            src={FullScreen}
            alt="Pdf"
            className="w-[50px] h-[50px] bg-gradient-to-b from-white to-white/90 rounded-2xl cursor-pointer"
          />
          Fullscreen
        </div>
      </div>
    </main>
  );
};
