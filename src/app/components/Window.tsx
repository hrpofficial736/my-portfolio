import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface WindowProps {
  width: number;
  height: number;
  isHidden: boolean;
  callback: () => void;
}

export const Window: React.FC<WindowProps> = ({
  width,
  height,
  isHidden,
  callback,
}) => {
  return (
    
    <main
      style={{ width: `${width}px`, height: `${height}px`, zIndex: 9999 }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-black to-black/60 rounded-xl flex flex-col px-5 py-3`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">Projects</h1>
        <IoCloseCircleOutline
          onClick={() => {
            callback();
          }}
          color="white"
          size={25}
          className="cursor-pointer"
        />
      </div>
    </main>
  );
};
