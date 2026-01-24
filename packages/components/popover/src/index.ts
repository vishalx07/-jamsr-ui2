import { Popover as PopoverRoot } from "./popover";
import { PopoverArrow } from "./popover-arrow";
import { PopoverBackdrop } from "./popover-backdrop";
import { PopoverContainer } from "./popover-container";
import { PopoverContent } from "./popover-content";
import { PopoverPortal } from "./popover-portal";
import { PopoverTrigger } from "./popover-trigger";

export const Popover = Object.assign(PopoverRoot, {
  Content: PopoverContent,
  Trigger: PopoverTrigger,
  Arrow: PopoverArrow,
  Portal: PopoverPortal,
  Backdrop: PopoverBackdrop,
  Container: PopoverContainer,
});

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Content extends PopoverContent.Props {}
  export interface Trigger extends PopoverTrigger.Props {}
  export interface Arrow extends PopoverArrow.Props {}
  export interface Portal extends PopoverPortal.Props {}
  export interface Backdrop extends PopoverBackdrop.Props {}
  export interface Container extends PopoverContainer.Props {}
}
