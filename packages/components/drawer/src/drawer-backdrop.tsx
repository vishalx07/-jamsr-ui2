"use client";
import { FloatingOverlay } from "@floating-ui/react";

import { ComponentProps } from "react";
import { useDrawerContext } from "./drawer-context";

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
