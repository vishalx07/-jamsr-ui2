"use client";

import { FloatingOverlay } from "@floating-ui/react";

import { ComponentProps } from "react";
import { usePopoverContext } from "./popover-context";

export const PopoverBackdrop = (props: PopoverBackdrop.Props) => {
  const { getOverlayProps } = usePopoverContext();
  return <FloatingOverlay {...getOverlayProps(props)} />;
};

export namespace PopoverBackdrop {
  export interface Props extends ComponentProps<typeof FloatingOverlay> {}
}
