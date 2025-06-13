import React from "react";
import { ArrowDown, ArrowRight, Bell } from "./svg/icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-6 py-5 flex justify-between items-center bg-white border-b border-[#EAECF0]">
      <div className="flex items-center gap-4">
        <p className="text-black text-xl font-semibold">Content Studio</p>
        <ArrowRight />
        <p className="font-[500] text-[18px] text-[#667085]">
          Template Library
        </p>
      </div>
      <div className="flex items-center gap-4">
        <p className="p-3 border border-[#EAECF0] bg-[#F7F7F7] rounded-lg">
          <Bell width={20} height={20} />
        </p>
        <Image src={"/Profile.png"} width={44} height={44} alt="Profile" />
        <ArrowDown />
      </div>
    </div>
  );
};

export default Navbar;
