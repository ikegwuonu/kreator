"use client";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Categories } from "@/lib/data";
import { categoryDrawerAtom } from "@/store";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Category = () => {
  const [open, setOpen] = useAtom(categoryDrawerAtom);

  const pathname = usePathname();
  const isMobile = useIsMobile();
  const categoryClass = (name: string) => {
    if (name.includes("Brand") && pathname.includes("brand")) {
      return "bg-[#F2F2FC] text-[#5E5CA4] font-bold color-[#5E5CA4] stroke-[#5E5CA4] ";
    }
    if (name.includes("Template") && !pathname.includes("brand")) {
      return "bg-[#F2F2FC] text-[#5E5CA4] font-bold color-[#5E5CA4] stroke-[#5E5CA4] ";
    } else {
      return "";
    }
  };

  return (
    <div
      className={
        (open && isMobile ? "block" : "hidden") +
        " lg:block" +
        " py-[14px] z-10 space-y-6 fixed  lg:relative px-[15px] bg-white h-[610px] rounded-2xl w-[220px] border-[##EAECF0] flex flex-col"
      }
    >
      {Categories.map((item) => (
        <Link
          href={item.link}
          onClick={() => setOpen(false)}
          key={item.name}
          className={
            categoryClass(item.name) +
            "flex gap-3 py-2 px-3 font-[500] hover:bg-[#F2F2FC] text-[#667085] items-center rounded-lg cursor-pointer"
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
