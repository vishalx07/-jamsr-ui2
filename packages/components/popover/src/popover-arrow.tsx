"use client";

import { FloatingArrow } from "@floating-ui/react";

import { usePopoverContext } from "./popover-context";

import type { FloatingArrowProps } from "@floating-ui/react";

export const PopoverArrow = (props: PopoverArrow.Props) => {
  const { getArrowProps } = usePopoverContext();
  return <FloatingArrow {...getArrowProps(props)} />;
};

export namespace PopoverArrow {
  export interface Props extends Omit<FloatingArrowProps, "context"> {}
}
