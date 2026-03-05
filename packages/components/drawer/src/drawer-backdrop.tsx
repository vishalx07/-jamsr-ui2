"use client";

import { FloatingOverlay } from "@floating-ui/react";

import { useDrawerContext } from "./drawer-context";

import type { ComponentProps } from "react";

export const DrawerBackdrop = (props: DrawerBackdrop.Props) => {
  const { children, ...restProps } = props;
  const { getBackdropProps } = useDrawerContext();
  return (
    <FloatingOverlay {...getBackdropProps(restProps)}>
      {children}
    </FloatingOverlay>
  );
};

export namespace DrawerBackdrop {
  export interface Props extends ComponentProps<typeof FloatingOverlay> {
    children: React.ReactNode;
  }
}
