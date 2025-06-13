import { Categories } from "@/lib/data";
import React from "react";

const Category = () => {
  return (
    <div className="py-[14px] px-[15px] bg-white h-[610px] rounded-2xl w-[220px] border-[##EAECF0] flex flex-col gap-6">
      {Categories.map((item) => (
        <div
          key={item.name}
          className="flex gap-3 py-2 px-3 hover:bg-[#F2F2FC] text-[#667085] items-center rounded-lg cursor-pointer"
        >
          {item.icon}
          <p className="text-sm"> {item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
