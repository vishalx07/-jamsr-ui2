"use client";

import { useFloatingTree, useListItem } from "@floating-ui/react";
import { useHover, useMergeRefs, useRenderElement } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import { useMenuContext } from "./menu-context";
import { useMenuFloatingContext } from "./menu-floating-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuItem = (props: MenuItem.Props) => {
  const { getMenuItemProps } = useMenuContext();
  const tree = useFloatingTree();
  const {
    textValue,
    children,
    disabled: isDisabled = false,
    preventCloseOnClick,
    ...elementProps
  } = props;

  const parentCtx = useMenuFloatingContext();
  const item = useListItem({
    label: isDisabled ? null : textValue,
  });
  const isActive = item.index === parentCtx.activeIndex;
  const { isHovered, ref: hoverRef } = useHover<HTMLButtonElement>({
    isDisabled,
  });

  const refs = useMergeRefs<HTMLButtonElement>([item.ref, hoverRef]);

  const renderElement = useRenderElement("button", {
    props: [
      getMenuItemProps(elementProps),
      parentCtx.getItemProps() as any,
      {
        children: children,
        disabled: isDisabled,
        "data-disabled": dataAttr(isDisabled),
        "data-active": dataAttr(isActive),
        "data-hovered": dataAttr(isHovered),
        "aria-disabled": dataAttr(isDisabled),
        ref: refs,
        tabIndex: isActive ? 0 : -1,
        onClick() {
          if (preventCloseOnClick) {
            return;
          }
          tree?.events.emit("click");
        },
        onFocus() {
          parentCtx.setHasFocusInside(true);
        },
      },
    ],
  });
  return renderElement;
};

export namespace MenuItem {
  export interface Props extends UIProps<"button"> {
    textValue: string;
    disabled?: boolean;
    preventCloseOnClick?: boolean;
  }
}
