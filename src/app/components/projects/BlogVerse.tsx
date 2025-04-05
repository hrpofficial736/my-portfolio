import React from "react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: "600",
});

const BlogVerse = () => {
  return (
    <div
      className={`bg-white min-w-[350px] h-[250px] text-5xl text-blue-500 ${dancingScript.className} rounded-xl flex justify-center items-center`}
    >
      BlogVerse
    </div>
  );
};

export default BlogVerse;
