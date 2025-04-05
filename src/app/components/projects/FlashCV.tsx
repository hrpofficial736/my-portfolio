import Image from "next/image";
import React from "react";
import FlashCVImage from "../../../../public/assets/project-assets/images/logo.png";

const FlashCV = () => {
  return (
    <div
      className={`bg-white min-w-[350px] h-[250px] text-blue-500 rounded-xl flex justify-center items-center`}
    >
      <Image alt="FlashCV" src={FlashCVImage} width={850} height={300} />
    </div>
  );
};

export default FlashCV;
