"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuContainer = (props: ContextMenuContainer.Props) => {
  const { getContainerProps } = useContextMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });
  return renderElement;
};
export namespace ContextMenuContainer {
  export interface Props extends UIProps<"div"> {}
}
