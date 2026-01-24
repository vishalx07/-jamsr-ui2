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
