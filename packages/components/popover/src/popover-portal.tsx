"use client";

import { FloatingPortal, FloatingPortalProps } from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { usePopoverContext } from "./popover-context";

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
