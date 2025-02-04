"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
      className="z-10"
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
        <Window
          width={windowDimensions.width}
          height={windowDimensions.height}
          callback={handleCloseWindow}
          isHidden={!windowOpen} // This will now only trigger animations, not unmounting
        />
      </div>
    </motion.div>
  );
};

export default Main;
