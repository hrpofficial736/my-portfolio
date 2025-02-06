import Image, { StaticImageData } from "next/image";
import React from "react";
import { ubuntuFont } from "./Menus";
import { FaGithub } from "react-icons/fa";
import { TbLiveView } from "react-icons/tb";

interface ProjectComponentProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  isLive: boolean;
  stack: StaticImageData[];
}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({
  image,
  title,
  description,
  isLive,
  stack,
}) => {
  return (
    <main
      className={`flex ${ubuntuFont.className} text-white gap-x-20 border border-white rounded-md py-2`}
    >
      <Image
        alt={title}
        src={image}
        className="w-[500px] h-[250px] rounded-xl border border-white"
      />
      <div className="flex flex-col gap-y-1">
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
        <div className="flex gap-x-3">
          <button className="rounded-xl bg-indigo-500 text-white px-3 py-2 font-bold flex gap-x-2 justify-center items-center">
            <TbLiveView /> Go Live
          </button>
          <button className="rounded-xl bg-white text-black px-3 py-2 font-bold flex gap-x-2 justify-center items-center">
            <FaGithub color="black" /> Github
          </button>
        </div>
      </div>
    </main>
  );
};
