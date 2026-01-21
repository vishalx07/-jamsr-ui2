"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import { FloatingFocusManager } from "@floating-ui/react";
import type { UIProps } from "@jamsrui/utils";

export const MenuContainer = (props: MenuContainer.Props) => {
  const { getContainerProps, getFocusManagerProps } = useMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });
  return (
    <FloatingFocusManager {...getFocusManagerProps()}>
      {renderElement}
    </FloatingFocusManager>
  );
};

export namespace MenuContainer {
  export interface Props extends UIProps<"div"> {}
}
