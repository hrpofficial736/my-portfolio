import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

interface WindowProps {
  width: number;
  height: number;
  callback: () => void;
  isHidden: boolean;
}

export const Window: React.FC<WindowProps> = ({
  width,
  height,
  callback,
  isHidden,
}) => {
  const [visible, setVisible] = useState(!isHidden);

  useEffect(() => {
    if (!isHidden) {
      setVisible(true);
    }
  }, [isHidden]);

  return (
    <AnimatePresence mode="sync" onExitComplete={() => setVisible(false)}>
      {visible && (
        <motion.div
          key="window"
          initial={{ scale: 0.7, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.5,
          }}
          className="z-[1000] absolute top-1/2 left-1/2"
        >
          <main
            style={{ width: `${width}px`, height: `${height}px` }}
            className="bg-gradient-to-tr from-black to-black/60 rounded-xl flex flex-col px-5 py-3"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-white font-bold text-2xl">Projects</h1>
              <IoCloseCircleOutline
                onClick={() => {
                  callback();
                  setVisible(false);
                }}
                color="white"
                size={25}
                className="cursor-pointer"
              />
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
