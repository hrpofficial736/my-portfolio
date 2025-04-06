import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

const Sociogram: React.FC = () => {
  return (
    <div className="bg-red-500 md:min-w-[350px] h-[250px] text-white text-2xl max-w-[350px] font-[Poppins] rounded-xl gap-x-2 flex justify-center items-center">
      <MdConnectWithoutContact />
      Sociogram
    </div>
  );
};

export default Sociogram;
