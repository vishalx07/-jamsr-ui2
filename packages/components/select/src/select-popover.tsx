"use client";

import { FloatingFocusManager, FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectPopover = (props: SelectPopover.Props) => {
  const { children } = props;
  const { getPopoverProps, isOpen, getFocusManagerProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getPopoverProps(props)],
  });

  if (!isOpen) {
    // Render children hidden so SelectItem components can mount
    // and register their labels for the trigger display
    return <div hidden>{children}</div>;
  }

  return (
    <FloatingPortal>
      <FloatingFocusManager {...getFocusManagerProps()}>
        {renderElement}
      </FloatingFocusManager>
    </FloatingPortal>
  );
};

export namespace SelectPopover {
  export interface Props extends UIProps<"div"> {}
}
