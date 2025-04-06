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
  const handleCallback = () => {
    setWindowOpen(!windowOpen);
  };

  const handleCloseWindow = () => setWindowOpen(false);
  return (
    <motion.div
      className="z-10 max-md:overflow-hidden"
      initial={{
        opacity: 0,
        scale: 1.1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "tween",
        duration: 1,
      }}
    >
      <div className="relative max-md:overflow-hidden">
        <div
          className={`w-screen h-screen max-md:overflow-hidden z-10 relative ${
            windowOpen ? "dull-background" : "portfolio-bg"
          } flex flex-col items-center justify-between`}
        >
          <DateTime />
          <div className="flex w-full md:justify-between max-sm:justify-center">
            <Menus callback={handleCallback} />
            <Weather />
          </div>
          <MadeWith />
          <ToolBar callback={handleCallback} />
        </div>
        <Window callback={handleCloseWindow} isHidden={!windowOpen} />
      </div>
    </motion.div>
  );
};

export default Main;
