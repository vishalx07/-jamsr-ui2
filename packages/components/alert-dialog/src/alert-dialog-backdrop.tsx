"use client";
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { AnimatePresence } from "motion/react";
import { ComponentProps } from "react";
import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogBackdrop = (props: AlertDialogBackdrop.Props) => {
  const { getOverlayProps, getFocusManagerProps, isOpen } =
    useAlertDialogContext();
  const { children, ...restProps } = props;
  return (
    <AnimatePresence>
      {isOpen && (
        <FloatingPortal>
          <FloatingOverlay {...getOverlayProps()} {...restProps}>
            <FloatingFocusManager {...getFocusManagerProps()}>
              {children}
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </AnimatePresence>
  );
};

export namespace AlertDialogBackdrop {
  export interface Props extends Omit<
    ComponentProps<typeof FloatingOverlay>,
    "children"
  > {
    children: React.ReactElement;
  }
}
