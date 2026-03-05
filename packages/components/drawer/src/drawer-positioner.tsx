"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsrui/utils";

export const DrawerPositioner = (props: DrawerPositioner.Props) => {
  const { getPositionerProps } = useDrawerContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};
export namespace DrawerPositioner {
  export interface Props extends UIProps<"div"> {}
}
