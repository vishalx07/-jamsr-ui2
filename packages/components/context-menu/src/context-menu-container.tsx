"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuPositioner = (props: ContextMenuPositioner.Props) => {
  const { getPositionerProps } = useContextMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};
export namespace ContextMenuPositioner {
  export interface Props extends UIProps<"div"> {}
}
