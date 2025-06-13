import React from "react";
import { Plus } from "./svg/icons";

const AddNew = () => {
  return (
    <button className="py-3 px-6 rounded-lg bg-gradient-to-r from-[#6C68C0] to-[#8581E7] flex items-center gap-3">
      <Plus />
      <p className="text-white font-semibold">Add New</p>
    </button>
  );
};

export default AddNew;
