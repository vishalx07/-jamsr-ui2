import { ContextMenu as ContextMenuRoot } from "./context-menu";
import { ContextMenuContent } from "./context-menu-content";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuTrigger } from "./context-menu-trigger";

export { ContextMenuContent, ContextMenuItem, ContextMenuTrigger };

export const ContextMenu = Object.assign(ContextMenuRoot, {
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
