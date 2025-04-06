import { IoCloseCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectComponent } from "../../../exports/components/exports";
import {
  Next,
  Zustand,
  Recoil,
  Flutter,
  Nest,
  Node,
  Express,
  Prisma,
  Supabase,
  Neon,
  ReactIcon,
} from "../../../exports/assets/exports";
import { useEffect, useState } from "react";
import Sociogram from "./projects/Sociogram";
import BlogVerse from "./projects/BlogVerse";
import FlashCV from "./projects/FlashCV";
import Resq from "./projects/Resq";

interface WindowProps {
  callback: () => void;
  isHidden?: boolean;
}

export const Window: React.FC<WindowProps> = ({
  callback,
  isHidden,
}) => {
  const [visible, setVisible] = useState(!isHidden);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth - 50,
    height: window.innerHeight - 100
  });

  const handleResize = () => {
    setDimensions(() => {
     return { width: window.innerWidth - 50,
      height: window.innerHeight - 100}
    })
  }
  useEffect (() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, [])
  useEffect(() => {
    if (!isHidden) {
      setVisible(true);
    }
  }, [isHidden]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setVisible(false)}>
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
            style={{ width: dimensions.width, height: dimensions.height }}
            className="bg-gradient-to-tr from-black to-black/60 rounded-xl flex flex-col gap-y-10 px-5 py-3 no-scrollbar overflow-y-scroll"
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
            <div className="md:w-[80%] md:mx-auto flex flex-col max-md:items-center max-md:justify-center gap-y-5 rounded-md md:px-3 md:py-2">
              <ProjectComponent
                title="FlashCV"
                description="FlashCV is a fast and intuitive resume builder web app designed to help users create professional resumes with ease. Built with a clean UI and customizable templates, FlashCV allows users to input their details and instantly generate downloadable, well-formatted resumes. Ideal for job seekers and students, it simplifies the resume creation process and ensures a polished final product."
                isLive={true}
                stack={[ReactIcon, Zustand, Node, Nest, Prisma, Supabase]}
                githubLink={"https://github.com/hrpofficial736/flashcv-client"}
                liveLink={"https://flashcv.vercel.app"}
                imageComponent={<FlashCV />}
              />
              <ProjectComponent
                title="resQ"
                description="resQ is a comprehensive mobile application designed to enhance user safety during adverse weather conditions. It provides real-time weather updates, temperature, air quality index (AQI), and location-based alerts. resQ also features nearby shelter listings, emergency SOS functionality, and a clean, intuitive interface. The app aims to assist users in making informed decisions and staying safe during natural emergencies and disasters."
                isLive={false}
                stack={[Flutter]}
                githubLink={"https://github.com/hrpofficial736/resq"}
                imageComponent={<Resq />}
              />
              <ProjectComponent
                title="Sociogram"
                description="Sociogram is a modern mobile social networking app that enables users to connect, share posts, follow others, and engage through likes and comments. Designed with a smooth and responsive UI using Flutter, it offers real-time updates, secure authentication, and a feed-based layout to deliver an engaging social experience on mobile."
                isLive={false}
                stack={[Flutter, Supabase]}
                githubLink={"https://github.com/hrpofficial736/sociogram"}
                imageComponent={<Sociogram />}
              />
              <ProjectComponent
                title="BlogVerse"
                description="BlogVerse is a minimal and elegant blogging website where users can publish, read, and manage blog posts seamlessly. The platform supports rich text editing, user authentication, and a clean content management interface, making it perfect for writers and readers who value simplicity and functionality."
                isLive={true}
                stack={[Next, Recoil, Node, Express, Prisma, Neon, Supabase]}
                githubLink={
                  "https://github.com/hrpofficial736/blogverse-client"
                }
                liveLink={"https://blogverse-sigma.vercel.app"}
                imageComponent={<BlogVerse />}
              />
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
