"use client";

import { motion } from "motion/react";

import { usePopoverContext } from "./popover-context";

import type { HTMLMotionProps } from "motion/react";

export const PopoverContent = (props: PopoverContent.Props) => {
  const { children, ...restProps } = props;
  const { getContentProps } = usePopoverContext();
  return <motion.div {...getContentProps(restProps)}>{children}</motion.div>;
};

export namespace PopoverContent {
  export interface Props extends HTMLMotionProps<"div"> {}
}
