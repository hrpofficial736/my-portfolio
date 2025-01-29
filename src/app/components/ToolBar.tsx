import React from "react";
import {
  Pdf,
  Mail,
  Flutter,
  Web,
  Contact,
} from "../../../exports/assets/exports";
import Image from "next/image";

export const ToolBar: React.FC = () => {
  return (
    <main className="w-[20%] h-20 flex items-center justify-center gap-x-2 rounded-3xl px-3 py-2 mb-5 glassmorphism">
      <Image
        src={Pdf}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl bg-gradient-to-b from-white to-white/70 cursor-pointer"
      />
      <Image
        src={Mail}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl bg-indigo-700 cursor-pointer"
      />
      <Image
        src={Web}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl bg-gradient-to-b from-white to-blue-300 cursor-pointer"
      />
      <Image
        src={Flutter}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl bg-gradient-to-b from-white to-blue-300 cursor-pointer"
      />
      <Image
        src={Contact}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl bg-gradient-to-b from-green-600 to-green-800 cursor-pointer"
      />
    </main>
  );
};
