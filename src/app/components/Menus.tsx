import Image from "next/image";
import React from "react";
import { Pdf, Mail, Flutter, Web, Contact } from "../exports/assets/exports";

export const Menus: React.FC = () => {
  return (
    <main className="w-max mr-auto mb-60 ml-5 px-3 py-3 flex items-center">
      <div className="grid grid-rows-3 gap-10 justify-center place-items-center grid-cols-2">
        <Image
          src={Pdf}
          alt="Pdf"
          className="w-[50px] h-[50px] rounded-2xl bg-white/90 cursor-pointer"
        />
        <Image
          src={Mail}
          alt="Pdf"
          className="w-[50px] h-[50px] rounded-2xl bg-indigo-700 cursor-pointer"
        />
        <Image
          src={Web}
          alt="Pdf"
          className="w-[50px] h-[50px] rounded-2xl bg-blue-200 cursor-pointer"
        />
        <Image
          src={Flutter}
          alt="Pdf"
          className="w-[50px] h-[50px] rounded-2xl bg-gradient-to-b from-white to-blue-300 cursor-pointer"
        />
        <Image
          src={Contact}
          alt="Pdf"
          className="w-[50px] h-[50px] rounded-2xl glassmorphism cursor-pointer"
        />
      </div>
    </main>
  );
};
