import React from "react";
import { Pdf, Mail, Flutter, Web, Contact } from "../exports/assets/exports";
import Image from "next/image";

export const ToolBar: React.FC = () => {
  return (
    <main className="w-[20%] h-20 flex items-center justify-center gap-x-2 rounded-3xl px-3 py-2 mb-5 glassmorphism">
      <Image
        src={Pdf}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl glassmorphism"
      />
      <Image
        src={Mail}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl glassmorphism"
      />
      <Image
        src={Web}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl glassmorphism"
      />
      <Image
        src={Flutter}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl glassmorphism"
      />
      <Image
        src={Contact}
        alt="Pdf"
        className="h-[80%] w-[20%] rounded-2xl glassmorphism"
      />
    </main>
  );
};
