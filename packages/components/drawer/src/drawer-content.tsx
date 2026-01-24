"use client";
import { motion } from "motion/react";

import { useDrawerContext } from "./drawer-context";

import type { HTMLMotionProps } from "motion/react";

export const DrawerContent = (props: DrawerContent.Props) => {
  const { children } = props;
  const { getContentProps } = useDrawerContext();
  return <motion.div {...getContentProps(props)}>{children}</motion.div>;
};

export namespace DrawerContent {
  export interface Props extends Omit<HTMLMotionProps<"div">, "children"> {
    children: React.ReactNode;
  }
}
