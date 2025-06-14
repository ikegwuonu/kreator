"use client";
import { Categories } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Category = () => {
  const pathname = usePathname();
  const categoryClass = (name: string) => {
    if (name.includes("Brand") && pathname.includes("brand")) {
      return "bg-[#F2F2FC] text-[#101828] ";
    }
    if (name.includes("Template") && !pathname.includes("brand")) {
      return "bg-[#F2F2FC] text-[#101828] ";
    } else {
      return "";
    }
  };

  return (
    <div className="py-[14px] px-[15px] bg-white h-[610px] rounded-2xl w-[220px] border-[##EAECF0] flex flex-col gap-6">
      {Categories.map((item) => (
        <Link
          href={item.link}
          key={item.name}
          className={
            categoryClass(item.name) +
            "flex gap-3 py-2 px-3 hover:bg-[#F2F2FC] text-[#667085] items-center rounded-lg cursor-pointer"
          }
        >
          {item.icon}
          <p className="text-sm"> {item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Category;
