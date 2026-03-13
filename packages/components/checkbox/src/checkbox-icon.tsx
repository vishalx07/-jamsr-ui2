"use client";
import { motion } from "motion/react";

import type { CheckboxIndicatorState } from "@base-ui/react";
import type { Variants } from "motion/react";

const tickVariants: Variants = {
  pressed: {
    pathLength: 0.5,
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const CheckboxIcon = (props: CheckboxIndicatorState) => {
  const { checked, indeterminate } = props;
  return (
    <motion.svg
      animate={checked || indeterminate ? "checked" : "unchecked"}
      fill="none"
      initial={false}
      stroke="currentColor"
      strokeWidth="4"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={indeterminate ? "M5 12h14" : "M4.5 12.75l6 6 9-13.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
      />
    </motion.svg>
  );
};
