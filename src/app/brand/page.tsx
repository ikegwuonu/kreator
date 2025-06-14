"use client";
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
