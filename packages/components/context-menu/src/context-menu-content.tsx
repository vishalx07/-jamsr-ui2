"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuContent = (props: ContextMenuContent.Props) => {
  const { getContentProps } = useContextMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};
export namespace ContextMenuContent {
  export interface Props extends UIProps<"div"> {}
}
