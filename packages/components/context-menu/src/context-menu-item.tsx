"use client";
import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useHover, useMergeRefs, useRenderElement } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

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
    label: isDisabled ? null : textValue,
  });
  const { isHovered, ref: hoverRef } = useHover<HTMLButtonElement>({
    isDisabled,
  });

  const isActive = item.index === parentCtx.activeIndex;
  const refs = useMergeRefs<HTMLButtonElement>([item.ref, hoverRef]);

  const renderElement = useRenderElement("button", {
    props: [
      getMenuItemProps(elementProps),
      parentCtx.getItemProps() as any,
      {
        children,
        disabled: isDisabled,
        "data-disabled": dataAttr(isDisabled),
        "data-active": dataAttr(isActive),
        "aria-disabled": dataAttr(isDisabled),
        "data-hovered": dataAttr(isHovered),
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
    textValue: string;
    disabled?: boolean;
    preventCloseOnClick?: boolean;
  }
}
