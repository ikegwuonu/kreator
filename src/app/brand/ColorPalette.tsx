"use client";
import ColorPicker from "@/components/ColourPicker";
import { Plus } from "lucide-react";

import React, { useState } from "react";

const ColorPalette = () => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#059669");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    console.log("Selected color:", color);
  };
  return (
    <div>
      <div className="mt-10 mb-6 bg bg-grey rounded-xl p-6 flex gap-10 ">
        <div className="flex flex-col gap-3 items-center">
          <div className="rounded-full bg-white border border-border w-20 h-20"></div>
          <p className="text-sm text-[#344054] leading-5">Primary</p>
        </div>
        <div className="relative">
          <button
            className="flex flex-col gap-3 items-center "
            onClick={() => setIsColorPickerOpen((prev) => !prev)}
          >
            <div className="rounded-full bg-white border-[2px] border-[#6C68C0] w-20 h-20 flex items-center justify-center">
              <Plus
                className="text-[#6C68C0] fill-[#6C68C0] "
                width={28}
                height={28}
                stroke="#6C68C0"
              />
            </div>
            <p className="text-sm text-[#6C68C0] leading-5">Add New</p>
          </button>
          <div className="">
            <ColorPicker
              isOpen={isColorPickerOpen}
              onClose={() => setIsColorPickerOpen(false)}
              onColorSelect={handleColorSelect}
              initialColor={selectedColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
