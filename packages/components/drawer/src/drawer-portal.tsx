"use client";
import { FloatingPortal } from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { useDrawerContext } from "./drawer-context";

export const DrawerPortal = (props: DrawerPortal.Props) => {
  const { children } = props;
  const { isOpen } = useDrawerContext();
  return (
    <AnimatePresence>
      {isOpen ? <FloatingPortal>{children}</FloatingPortal> : null}
    </AnimatePresence>
  );
};

export namespace DrawerPortal {
  export interface Props {
    children: React.ReactNode;
  }
}
