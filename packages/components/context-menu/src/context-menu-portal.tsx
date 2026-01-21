"use client";
import {
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";

import { useContextMenuContext } from "./context-menu-context";
import { ContextMenuFloatingContext } from "./context-menu-floating-context";

export const ContextMenuPortal = (props: ContextMenuPortal.Props) => {
  const { children } = props;
  const {
    getFloatingListProps,
    getOverlayProps,
    getFocusManagerProps,
    isOpen,
    floatingCtx,
  } = useContextMenuContext();
  return (
    <ContextMenuFloatingContext value={floatingCtx}>
      <FloatingList {...getFloatingListProps()}>
        {isOpen ? (
          <FloatingPortal>
            <FloatingOverlay {...getOverlayProps()} />
            <FloatingFocusManager {...getFocusManagerProps()}>
              {children}
            </FloatingFocusManager>
          </FloatingPortal>
        ) : null}
      </FloatingList>
    </ContextMenuFloatingContext>
  );
};

export namespace ContextMenuPortal {
  export interface Props {
    children: React.ReactElement;
  }
}
