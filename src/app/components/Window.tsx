import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

interface WindowProps {
  width: number;
  height: number;
  callback: () => void;
}

export const Window: React.FC<WindowProps> = ({ width, height, callback }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="window"
        initial={{ scale: 0.7, opacity: 0, y: "50%" }}
        animate={{ scale: 1, opacity: 1, y: "-50%" }}
        exit={{ scale: 0.7, opacity: 0, y: "50%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="z-[1000] fixed top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <main
          style={{ width: `${width}px`, height: `${height}px` }}
          className="bg-gradient-to-tr from-black to-black/60 rounded-xl flex flex-col px-5 py-3"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold text-2xl">Projects</h1>
            <IoCloseCircleOutline
              onClick={callback}
              color="white"
              size={25}
              className="cursor-pointer"
            />
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};
