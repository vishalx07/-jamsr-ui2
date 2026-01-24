"use client";
import { DrawerContext } from "./drawer-context";
import { useDrawer } from "./use-drawer";

export const Drawer = (props: Drawer.Props) => {
  const { children } = props;
  const ctx = useDrawer(props);
  return <DrawerContext value={ctx}>{children}</DrawerContext>;
};

export namespace Drawer {
  export interface Props extends useDrawer.Props {
    children: React.ReactNode;
  }
}
