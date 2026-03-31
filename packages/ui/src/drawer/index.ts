import {
  Drawer as DrawerRoot,
  DrawerBar,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerIndent,
  DrawerIndentBackground,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Close: DrawerClose,
  Indent: DrawerIndent,
  IndentBackground: DrawerIndentBackground,
  Footer: DrawerFooter,
  Bar: DrawerBar,
});

export namespace Drawer {
  export interface Props extends DrawerRoot.Props {}
}
