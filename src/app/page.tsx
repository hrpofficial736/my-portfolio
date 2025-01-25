"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ToolBar,
  MadeWith,
  Menus,
  Weather,
  DateTime,
} from "../app/exports/components/exports";

const Main: React.FC = () => {
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
          <Menus />
          <Weather />
        </div>
        <MadeWith />
        <ToolBar />
      </div>
    </motion.div>
  );
};

export default Main;
