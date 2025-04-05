import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import { ubuntuFont } from "./Menus";
import { FaGithub } from "react-icons/fa";
import { TbLiveView } from "react-icons/tb";

interface ProjectComponentProps {
  title: string;
  description: string;
  isLive: boolean;
  isMobile: boolean;
  imageComponent: ReactElement;
  stack: StaticImageData[];
}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  description,
  isMobile,
  imageComponent,
  isLive,
  stack,
}) => {
  return (
    <main
      className={`flex ${ubuntuFont.className} text-white gap-x-20 rounded-md px-2 py-2`}
    >
    { imageComponent }

      <div className="flex flex-col justify-center gap-y-1">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex gap-x-1">
          {stack.map((tech, index) => {
            return (
              <Image
                key={index}
                src={tech}
                alt="Image"
                className="w-[30px] h-[30px] px-1 py-1 bg-white rounded-full"
              />
            );
          })}
        </div>
        <h1 className="font-normal text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h1>
        <div className="flex gap-x-3 mt-3">
          {isLive &&
          <button className="rounded-xl bg-indigo-500 text-white px-3 py-2 font-bold flex gap-x-2 justify-center items-center hover:bg-indigo-700">
            <TbLiveView /> Go Live
          </button>
}
          <button className="rounded-xl bg-white text-black px-3 py-2 font-bold flex gap-x-2 justify-center items-center hover:bg-white/80">
            <FaGithub color="black" /> Github
          </button>
        </div>
      </div>
    </main>
  );
};
