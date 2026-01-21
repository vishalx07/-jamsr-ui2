"use client";

import { FloatingList, FloatingPortal } from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { useMenuContext } from "./menu-context";
import { MenuFloatingContext } from "./menu-floating-context";

export const MenuPortal = (props: MenuPortal.Props) => {
  const { getFloatingListProps, isOpen, floatingCtx } = useMenuContext();
  return (
    <MenuFloatingContext value={floatingCtx}>
      <FloatingList {...getFloatingListProps()}>
        <AnimatePresence>
          {isOpen ? <FloatingPortal>{props.children}</FloatingPortal> : null}
        </AnimatePresence>
      </FloatingList>
    </MenuFloatingContext>
  );
};

export namespace MenuPortal {
  export interface Props {
    children: React.ReactNode;
  }
}
