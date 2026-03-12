import {
  Drawer as DrawerRoot,
  DrawerBody,
  DrawerCloseButton,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./drawer";

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
  CloseButton: DrawerCloseButton,
  CloseTrigger: DrawerCloseTrigger,
});

export namespace Drawer {
  export interface Props extends DrawerRoot.Props {}
  export interface Trigger extends DrawerTrigger.Props {}
  export interface Content extends DrawerContent.Props {}
  export interface Header extends DrawerHeader.Props {}
  export interface Body extends DrawerBody.Props {}
  export interface Footer extends DrawerFooter.Props {}
  export interface CloseButton extends DrawerCloseButton.Props {}
  export interface CloseTrigger extends DrawerCloseTrigger.Props {}
}

export {
  DrawerBody,
  DrawerCloseButton,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
};
