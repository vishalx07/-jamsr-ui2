import {
  ContextMenu as ContextMenuRoot,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./context-menu";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
});

export namespace ContextMenu {
  export interface Props extends ContextMenuRoot.Props {}
}

export { ContextMenuContent, ContextMenuItem, ContextMenuTrigger };
