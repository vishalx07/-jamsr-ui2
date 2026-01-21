"use client";

import { FloatingOverlay } from "@floating-ui/react";

import { useMenuContext } from "./menu-context";

import { ComponentProps } from "react";

export const MenuBackdrop = (props: MenuBackdrop.Props) => {
  const { getOverlayProps, isNested } = useMenuContext();
  return isNested ? null : <FloatingOverlay {...getOverlayProps(props)} />;
};

export namespace MenuBackdrop {
  export interface Props extends ComponentProps<typeof FloatingOverlay> {}
}
