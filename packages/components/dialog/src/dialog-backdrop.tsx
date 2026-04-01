"use client";

import { FloatingFocusManager, FloatingOverlay } from "@floating-ui/react";

import { useDialogContext } from "./dialog-context";

import type { ComponentProps } from "react";

export const DialogBackdrop = (props: DialogBackdrop.Props) => {
  const { getFocusManagerProps, getOverlayProps } = useDialogContext();
  return (
    <FloatingOverlay {...getOverlayProps(props)}>
      <FloatingFocusManager {...getFocusManagerProps()}>
        {props.children}
      </FloatingFocusManager>
    </FloatingOverlay>
  );
};

export namespace DialogBackdrop {
  export interface Props extends ComponentProps<typeof FloatingOverlay> {
    children: React.ReactElement;
  }
}
