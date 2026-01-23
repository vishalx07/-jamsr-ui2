"use client";

import { Chip } from "jamsrui/chip";

export const ChipWithClose = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <Chip>Click me</Chip>;
};
