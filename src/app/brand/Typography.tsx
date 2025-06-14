import { ArrowBack, ArrowDown, Pencil } from "@/components/svg/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { checkboxOptions, fonts, typographyScale } from "@/lib/data";
import { BrandProps } from "@/lib/types";

import React from "react";

const Typography = ({ setTab }: BrandProps) => {
  return (
    <div className="bg-white border border-border py-6 px-6 rounded-2xl flex-1">
      <div className="flex gap-[10px] items-center">
        <ArrowBack />
        <p className="text-[#31353F] text-[18px] font-semibold">Back</p>
      </div>
      <div className="pl-[38px] pt-[19px] pb-[18px] flex flex-col gap-1">
        <p className="font-[700] text-[18px] text-[#111827] leading-8">
          Typography Setting
        </p>
        <p className="text-[#4B5563] pb-3">
          Configure your brand typography and font specifications
        </p>
      </div>
      <div className="border border-[#E5E7EB] rounded-xl p-[33px]">
        <p className="text-[18px] font-semibold pb-6">Primary Font</p>
        <p className="text-sm font-[500] text-[#374151] pb-4">Font Family</p>
        <Select>
          <SelectTrigger className="flex-1 bg-white shadow-none">
            <SelectValue
              className="text-sm text-grey bg-white"
              placeholder="Inter"
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
        <div className="mt-6 bg-[#E5E7EB] rounded-lg p-6">
          <p className="text-4xl text-dark pb-4">Aa Bb Cc Dd Ee Ff Gg</p>
          <p className="text-dark text-[18px]">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <p className="text-sm font-[500] text-[#374151] pb-3 pt-6">
          Available Weights
        </p>
        <div className="grid grid-cols-3 w-full">
          {checkboxOptions.map((option) => (
            <div
              key={option.value}
              className="flex items-center gap-1  cursor-pointer"
            >
              <Checkbox
                id={option.value}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#6C68C0] data-[state=checked]:to-[#9692F4] data-[state=checked]:border-[#6C68C0] data-[state=unchecked]:border-[#D1D5DB] data-[state=unchecked]:bg-white"
              />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-[46px] h-[1px] bg-[#ececec]"></div>
      <div className="border border-[#E5E7EB] rounded-xl p-[33px]">
        <p className="text-dark text-[18px] font-bold pb-6">Typography Scale</p>
        <div className="flex flex-col gap-4">
          {typographyScale.map((scale) => (
            <div
              key={scale.value}
              className="p-[17px] rounded-lg cursor-pointer border border-[##E5E7EB] flex justify-between items-center"
            >
              <div className="flex items-end gap-4">
                <p className="text-dark text-4xl leading-10">{scale.heading}</p>
                <span className="text-[#4B5563] text-2xl">{scale.value}</span>
              </div>
              <Pencil className="m-2 " />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[21px] flex gap-4 justify-end rounded-lg">
        <button className="pt-[11px] pb-[7px] px-[25px] bg-white rounded-lg text-[#374151] border border-[#D1D5DB]">
          Cancel
        </button>
        <button
          onClick={() => setTab((prev) => !prev)}
          className="text-white font-semibold py-[9px] px-3 gradient-bg rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Typography;
