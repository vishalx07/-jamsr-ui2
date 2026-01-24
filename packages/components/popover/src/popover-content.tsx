"use client";

import { HTMLMotionProps, motion } from "motion/react";
import { usePopoverContext } from "./popover-context";

export const PopoverContent = (props: PopoverContent.Props) => {
  const { children, ...restProps } = props;
  const { getContentProps } = usePopoverContext();
  return <motion.div {...getContentProps(restProps)}>{children}</motion.div>;
};

export namespace PopoverContent {
  export interface Props extends HTMLMotionProps<"div"> {}
}
