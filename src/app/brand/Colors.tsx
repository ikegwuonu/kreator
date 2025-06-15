import AddNew from "@/components/AddNew";
import { ArrowBack, Plus2, Trash } from "@/components/svg/icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fonts } from "@/lib/data";
import React from "react";
import ColorPalette from "./ColorPalette";
import { BrandProps } from "@/lib/types";

const Colors = ({ setTab }: BrandProps) => {
  return (
    <div className="pt-[10px] p-6 bg-white border border-border rounded-2xl flex-1">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setTab((prev) => !prev)}
          className="flex gap-[10px] items-center"
        >
          <ArrowBack />
          <p className="text-[#31353F] text-[18px] font-semibold">Back</p>
        </button>
        <AddNew />
      </div>
      <p className="text-dark text-[18px] font-bold leading-[125%] pt-3 pb-2 ">
        Colours
      </p>
      <p className="text-[#667085] font-[500] text-[16px] leading-[150%] max-w-[75ch] ">
        Our color palette is a key element of our visual identity. Use the
        colors below for consistency across all materials
      </p>
      <ColorPalette />
      <div>
        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <div>
            <p className="text-dark font-bold text-[18px] pb-3 leading-[125%]">
              Typography
            </p>
            <p className="font-[500] text-[#667085] text-[16px] leading-[150%] max-w-[75ch]">
              The font used in all our branding materials ensures legibility and
              consistency
            </p>
          </div>
          <AddNew />
        </div>
        <div className="mt-6 mb-4 rounded-2xl border border-border p-4 bg-grey flex justify-between items-center">
          <p className="text-[#344054] text-sm">Primary Font</p>
          <div className="flex gap-6 items-center">
            <Plus2 />
            <Trash />
          </div>
        </div>
        <div className="mt-6 mb-4 rounded-2xl border border-border p-4 bg-grey ">
          <div className="flex justify-between items-center border-b border-border pb-4 ">
            <p className="text-[#344054] text-sm">Secondary Font</p>
            <div className="flex gap-6 items-center">
              <Plus2 />
              <Trash />
            </div>
          </div>
          <div className="pt-6 flex justify-between md:flex-row flex-col gap-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-white shadow-none">
                <SelectValue
                  className="text-sm text-grey bg-white"
                  placeholder="Choose a font"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {fonts.map((font) => (
                    <SelectItem key={font.label} value={font.value}>
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex sm:items-center gap-3 flex-col sm:flex-row items-start">
              <button className="py-2  px-3 bg-white rounded-lg text-[#374151] border border-[#D1D5DB]">
                Cancel
              </button>
              <button className="text-white font-semibold py-2 px-6 gradient-bg rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
