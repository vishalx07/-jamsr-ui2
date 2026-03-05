"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

export const SidebarContainer = (props: SidebarContainer.Props) => {
  const { getPositionerProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};

export namespace SidebarContainer {
  export interface Props extends UIProps<"div"> {}
}
