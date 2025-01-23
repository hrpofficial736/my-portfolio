"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Next } from "../exports/assets/exports";

export const LogoAnimation: React.FC = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDiv((prev) => (prev === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {activeDiv === 1 ? (
        <motion.div
          animate={{
            y: ["+100%", "0%", "0%", "-100%"],
          }}
          transition={{
            duration: 3,
            times: [0, 0.4, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image alt="logo" src={Next} className="w-[20px] h-[20px]" />
        </motion.div>
      ) : (
        <motion.div
          animate={{
            y: ["+100%", "0%", "0%", "-100%"],
          }}
          transition={{
            duration: 3,
            times: [0, 0.4, 1],
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          ♥️
        </motion.div>
      )}
    </>
  );
};
