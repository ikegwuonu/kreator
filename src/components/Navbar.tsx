"use client";
import React from "react";
import { ArrowDown, ArrowRight, Bell, Chart, Search } from "./svg/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isBrandPage = pathname.includes("brand");
  const category = isBrandPage ? "Brand Identity Kit" : "Template Library";
  return (
    <div className="px-6 py-5 flex justify-between items-center bg-white border-b border-[#EAECF0]">
      <div className="flex items-center gap-4">
        <p className="text-black text-xl font-semibold">Content Studio</p>
        <ArrowRight />
        <p className="font-[500] text-[18px] text-[#667085]">{category}</p>
      </div>
      <div className="flex items-center gap-4">
        {isBrandPage && <BrandNavbar />}
        <button className="p-3 border border-[#EAECF0] bg-[#F7F7F7] rounded-lg">
          <Bell width={20} height={20} />
        </button>
        <Image src={"/Profile.png"} width={44} height={44} alt="Profile" />
        <ArrowDown className="cursor-pointer" />
      </div>
    </div>
  );
};

const BrandNavbar = () => {
  return (
    <div className="lg:flex gap-4 items-center hidden ">
      <div className="px-4 py-3 flex gap-4 items-center rounded-lg border border-border bg-[#F7F7F7] max-w-[343px] w-full">
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm text-[#344054] bg-[#F7F7F7] w-[200px] placeholder:text-[#667085] placeholder:text-base"
        />
      </div>
      <button className="px-4 py-3 flex text-[#667085] text-base gap-4 items-center rounded-lg border border-border bg-[#F7F7F7]">
        <Chart width={20} height={20} />
        <p>Analytics</p>
      </button>
    </div>
  );
};

export default Navbar;
