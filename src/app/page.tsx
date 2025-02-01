"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
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
    setWindowOpen(!windowOpen);
    setWindowDimensions(() => {
      return {
        width: width,
        height: height,
      };
    });
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
      <div className="w-screen h-screen portfolio-bg relative flex flex-col items-center justify-between">
        <DateTime />
        <div className="flex w-full justify-between">
          <Menus callback={handleCallback} />
          <Weather />
        </div>
        <MadeWith />
        <Window
          width={windowDimensions?.width}
          height={windowDimensions.height}
          isHidden={!windowOpen}
          callback={handleCloseWindow}
        />
        <ToolBar />
      </div>
    </motion.div>
  );
};

export default Main;
