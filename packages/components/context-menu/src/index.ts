import { ContextMenu as ContextMenuRoot } from "./context-menu";
import { ContextMenuPositioner } from "./context-menu-container";
import { ContextMenuContent } from "./context-menu-content";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuPortal } from "./context-menu-portal";
import { ContextMenuTrigger } from "./context-menu-trigger";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Container: ContextMenuPositioner,
  Portal: ContextMenuPortal,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
});

export namespace ContextMenu {
  export interface Props extends ContextMenuRoot.Props {}
  export interface Trigger extends ContextMenuTrigger.Props {}
  export interface Content extends ContextMenuContent.Props {}
  export interface Item extends ContextMenuItem.Props {}
}
