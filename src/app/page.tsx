"use client";

import React from "react";
import { motion } from "motion/react";
import { ToolBar, MadeWith } from "../app/exports/components/exports";

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
      <div className="w-screen h-screen portfolio-bg flex flex-col items-center justify-between">
        <MadeWith />
        <ToolBar />
      </div>
    </motion.div>
  );
};

export default Main;
