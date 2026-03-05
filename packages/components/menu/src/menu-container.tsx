"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import { FloatingFocusManager } from "@floating-ui/react";
import type { UIProps } from "@jamsrui/utils";

export const MenuContainer = (props: MenuContainer.Props) => {
  const { getPositionerProps, getFocusManagerProps } = useMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
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
