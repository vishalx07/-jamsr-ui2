import { Popover as PopoverRoot } from "./popover";
import { PopoverArrow } from "./popover-arrow";
import { PopoverBackdrop } from "./popover-backdrop";
import { PopoverContent } from "./popover-content";
import { PopoverPortal } from "./popover-portal";
import { PopoverPositioner } from "./popover-positioner";
import { PopoverTrigger } from "./popover-trigger";

export const Popover = Object.assign(PopoverRoot, {
  Content: PopoverContent,
  Trigger: PopoverTrigger,
  Arrow: PopoverArrow,
  Portal: PopoverPortal,
  Backdrop: PopoverBackdrop,
  Positioner: PopoverPositioner,
});

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Content extends PopoverContent.Props {}
  export interface Trigger extends PopoverTrigger.Props {}
  export interface Arrow extends PopoverArrow.Props {}
  export interface Portal extends PopoverPortal.Props {}
  export interface Backdrop extends PopoverBackdrop.Props {}
  export interface Positioner extends PopoverPositioner.Props {}
}
