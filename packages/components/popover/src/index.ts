import { Popover as PopoverRoot } from "./popover";
import { PopoverArrow } from "./popover-arrow";
import { PopoverContent, PopoverContentWithDialog } from "./popover-content";
import { PopoverContext, usePopoverContext } from "./popover-context";
import { PopoverDialog } from "./popover-dialog";
import { PopoverTrigger } from "./popover-trigger";
import { usePopover } from "./use-popover";

export {
  PopoverArrow,
  PopoverContent,
  PopoverContentWithDialog,
  PopoverContext,
  PopoverDialog,
  PopoverTrigger,
  usePopover,
  usePopoverContext,
};

export const Popover = Object.assign(PopoverRoot, {
  Content: PopoverContentWithDialog,
  ContentRoot: PopoverContent,
  Trigger: PopoverTrigger,
  Dialog: PopoverDialog,
  Arrow: PopoverArrow,
});

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Content extends PopoverContentWithDialog.Props {}
  export interface ContentRoot extends PopoverContent.Props {}
  export interface Trigger extends PopoverTrigger.Props {}
  export interface Dialog extends PopoverDialog.Props {}
  export interface Arrow extends PopoverArrow.Props {}
}
