"use client";

import { FloatingArrow } from "@floating-ui/react";

import { useTooltipContext } from "./tooltip-context";

import type { FloatingArrowProps } from "@floating-ui/react";

export const TooltipArrow = (props: TooltipArrow.Props) => {
  const { getArrowProps, isOpen } = useTooltipContext();
  if (!isOpen) return null;
  return <FloatingArrow {...getArrowProps(props)} {...props} />;
};

export namespace TooltipArrow {
  export interface Props extends Omit<FloatingArrowProps, "context"> {}
}
