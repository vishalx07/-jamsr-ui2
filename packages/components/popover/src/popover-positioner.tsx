"use client";

import { FloatingFocusManager } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { usePopoverContext } from "./popover-context";

import type { UIProps } from "@jamsrui/utils";

export const PopoverPositioner = (props: PopoverPositioner.Props) => {
  const { getPositionerProps, getFloatingFocusManagerProps } =
    usePopoverContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return (
    <FloatingFocusManager {...getFloatingFocusManagerProps()}>
      {renderElement}
    </FloatingFocusManager>
  );
};

export namespace PopoverPositioner {
  export interface Props extends UIProps<"div"> {}
}
