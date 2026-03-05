"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuContainer = (props: ContextMenuContainer.Props) => {
  const { getPositionerProps } = useContextMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};
export namespace ContextMenuContainer {
  export interface Props extends UIProps<"div"> {}
}
