"use client";
import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useMergeRefs, useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";
import { useContextMenuFloatingContext } from "./context-menu-floating-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuItem = (props: ContextMenuItem.Props) => {
  const { getMenuItemProps } = useContextMenuContext();
  const tree = useFloatingTree();
  const {
    textValue,
    children,
    disabled: isDisabled,
    preventCloseOnClick,
    ...elementProps
  } = props;

  const parentCtx = useContextMenuFloatingContext();
  const item = useListItem({
    label: textValue ?? (typeof children === "string" ? children : undefined),
  });
  const isActive = item.index === parentCtx.activeIndex;
  const refs = useMergeRefs([item.ref]);

  const renderElement = useRenderElement("button", {
    props: [
      getMenuItemProps(elementProps),
      {
        children,
        disabled: isDisabled,
        "data-disabled": isDisabled,
        "data-active": isActive,
        "aria-disabled": isDisabled,
        ref: refs,
        tabIndex: isActive ? 0 : -1,
        onClick() {
          if (preventCloseOnClick) {
            return;
          }
          tree?.events.emit("click");
        },
        onMouseEnter() {
          parentCtx.setHasFocusInside(true);
        },
      },
    ],
  });
  return renderElement;
};

export namespace ContextMenuItem {
  export interface Props extends UIProps<"button"> {
    textValue?: string;
    disabled?: boolean;
    preventCloseOnClick?: boolean;
  }
}
