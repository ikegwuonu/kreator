"use client";
import { ArrowBack, ArrowDown, Pencil } from "@/components/svg/icons";
import { Checkbox } from "@/components/ui/checkbox";

import { Select } from "@/components/ui/select";

import { checkboxOptions, fonts, typographyScale } from "@/lib/data";

import React from "react";
import Typography from "./Typography";
import Colors from "./Colors";

const Page = () => {
  const [isColorsTab, setIsColorsTab] = React.useState(false);

  return isColorsTab ? (
    <Colors setTab={setIsColorsTab} />
  ) : (
    <Typography setTab={setIsColorsTab} />
  );
};

export default Page;
