import { Drawer as DrawerRoot } from "./drawer";
import { DrawerBackdrop } from "./drawer-backdrop";
import { DrawerBody } from "./drawer-body";
import { DrawerCloseTrigger } from "./drawer-close-trigger";
import { DrawerContent } from "./drawer-content";
import { DrawerFooter } from "./drawer-footer";
import { DrawerHeader } from "./drawer-header";
import { DrawerPopover } from "./drawer-popover";
import { DrawerPortal } from "./drawer-portal";
import { DrawerTrigger } from "./drawer-trigger";

export const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  positioner: DrawerPopover,
  Backdrop: DrawerBackdrop,
});

export namespace Drawer {
  export interface Props extends DrawerRoot.Props {}
  export interface Body extends DrawerBody.Props {}
  export interface CloseTrigger extends DrawerCloseTrigger.Props {}
  export interface Content extends DrawerContent.Props {}
  export interface Footer extends DrawerFooter.Props {}
  export interface Header extends DrawerHeader.Props {}
  export interface Trigger extends DrawerTrigger.Props {}
}
