"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { usePopoverContext } from "./popover-context";
import { FloatingFocusManager } from "@floating-ui/react";

export const PopoverContainer = (props: PopoverContainer.Props) => {
  const { getContainerProps, getFloatingFocusManagerProps } =
    usePopoverContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });
  return (
    <FloatingFocusManager {...getFloatingFocusManagerProps()}>
      {renderElement}
    </FloatingFocusManager>
  );
};

export namespace PopoverContainer {
  export interface Props extends UIProps<"div"> {}
}
