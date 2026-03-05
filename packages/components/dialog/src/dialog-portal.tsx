"use client";

import { FloatingPortal } from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { useDialogContext } from "./dialog-context";

export const DialogPortal = (props: DialogPortal.Props) => {
  const { isOpen } = useDialogContext();
  return (
    <AnimatePresence>
      {isOpen ? <FloatingPortal>{props.children}</FloatingPortal> : null}
    </AnimatePresence>
  );
};
export namespace DialogPortal {
  export interface Props {
    children: React.ReactElement;
  }
}
