"use client";

import { FloatingFocusManager } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuPositioner = (props: MenuPositioner.Props) => {
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

export namespace MenuPositioner {
  export interface Props extends UIProps<"div"> {}
}
