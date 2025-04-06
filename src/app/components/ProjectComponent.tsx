import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import { ubuntuFont } from "./Menus";
import { FaGithub } from "react-icons/fa";
import { TbLiveView } from "react-icons/tb";
import Link from "next/link";

interface ProjectComponentProps {
  title: string;
  description: string;
  isLive: boolean;
  githubLink: string;
  liveLink?: string;
  imageComponent: ReactElement;
  stack: StaticImageData[];
}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  description,
  imageComponent,
  githubLink,
  liveLink,
  isLive,
  stack,
}) => {
  return (
    <main
      className={`flex w-[100%] max-md:flex-col max-md:gap-y-2 ${ubuntuFont.className} text-white gap-x-20 rounded-md px-2 py-2`}
    >
      {imageComponent}

      <div className="flex w-full flex-col md:justify-center gap-y-1">
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
        <h1 className="font-normal text-sm mt-1">{description}</h1>
        <div className="flex gap-x-3 mt-3">
          {isLive && (
            <Link href={liveLink!}>
            <button
              className="rounded-xl bg-indigo-500 text-white px-3 py-2 font-bold flex gap-x-2 justify-center items-center hover:bg-indigo-700"
            >
              <TbLiveView /> Go Live
            </button>
            </Link>
          )}
          <Link href={githubLink}>
          <button
            className="rounded-xl bg-white text-black px-3 py-2 font-bold flex gap-x-2 justify-center items-center hover:bg-white/80"
          >
            <FaGithub color="black" /> Github
          </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
