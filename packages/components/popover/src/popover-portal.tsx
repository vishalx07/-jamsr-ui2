"use client";

import { FloatingPortal } from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { usePopoverContext } from "./popover-context";

import type { FloatingPortalProps } from "@floating-ui/react";

export const PopoverPortal = (props: PopoverPortal.Props) => {
  const { isOpen, getAnimatePresenceProps } = usePopoverContext();
  return (
    <AnimatePresence {...getAnimatePresenceProps()}>
      {!!isOpen && <FloatingPortal {...props} />}
    </AnimatePresence>
  );
};

export namespace PopoverPortal {
  export interface Props extends FloatingPortalProps {}
}
