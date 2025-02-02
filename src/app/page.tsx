"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ToolBar,
  MadeWith,
  Menus,
  Weather,
  DateTime,
} from "../../exports/components/exports";
import { Window } from "./components/Window";

const Main: React.FC = () => {
  const [windowOpen, setWindowOpen] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const handleCallback = (width: number, height: number) => {
    if (!windowOpen) {
      setWindowDimensions(() => {
        return {
          width: width,
          height: height,
        };
      });
    }
    setWindowOpen(!windowOpen);
  };

  const handleCloseWindow = () => setWindowOpen(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
        },
      }}
    >
      <div className="relative">
        <div
          className={`w-screen h-screen z-10 relative ${
            windowOpen ? "dull-background" : "portfolio-bg"
          } flex flex-col items-center justify-between`}
        >
          <DateTime />
          <div className="flex w-full justify-between">
            <Menus callback={handleCallback} />
            <Weather />
          </div>
          <MadeWith />
          <ToolBar />
        </div>
        <AnimatePresence>
        {windowOpen && (
          <motion.div
            key="window" // Unique key for Framer Motion to track component
            initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
            animate={{ scale: 1, opacity: 1 }} // Animate to full size
            exit={{ scale: 0.8, opacity: 0 }} // Animate on exit
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Window
              width={windowDimensions.width}
              height={windowDimensions.height}
              isHidden={!windowOpen}
              callback={handleCloseWindow}
            />
            
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Main;
