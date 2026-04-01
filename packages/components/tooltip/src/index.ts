import { Tooltip as TooltipRoot, TooltipGroup } from "./tooltip";
import { TooltipArrow } from "./tooltip-arrow";
import { TooltipContent } from "./tooltip-content";
import { TooltipPortal } from "./tooltip-portal";
import { TooltipPositioner } from "./tooltip-positioner";
import { TooltipTrigger } from "./tooltip-trigger";

export { TooltipGroup };

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Arrow: TooltipArrow,
  Portal: TooltipPortal,
});

export namespace Tooltip {
  export interface Props extends TooltipRoot.Props {}
  export interface Trigger extends TooltipTrigger.Props {}
  export interface Content extends TooltipContent.Props {}
  export interface Arrow extends TooltipArrow.Props {}
  export interface Positioner extends TooltipPositioner.Props {}
}
