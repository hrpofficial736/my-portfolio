import React from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ubuntuFont } from "../Menus";

const Resq = () => {
  return (
    <div
      className={`bg-black min-w-[350px] h-[250px] max-w-[350px] text-3xl gap-x-1 text-white ${ubuntuFont.className} font-bold rounded-xl border-2 border-white flex justify-center items-center`}
    >
      <MdOutlineHealthAndSafety /> resQ
    </div>
  );
};

export default Resq;
