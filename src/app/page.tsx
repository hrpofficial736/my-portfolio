"use client";

import React from "react";
import { motion } from "motion/react";
import { ToolBar } from "./components/ToolBar";

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
          duration: 1.5,
        },
      }}
    >
      <div className="w-screen h-screen portfolio-bg flex items-end justify-center">
        <ToolBar />
      </div>
    </motion.div>
  );
};

export default Main;
