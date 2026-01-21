import { TooltipGroup, Tooltip as TooltipRoot } from "./tooltip";
import { TooltipArrow } from "./tooltip-arrow";
import { TooltipContent } from "./tooltip-content";
import { TooltipTrigger } from "./tooltip-trigger";

export { TooltipArrow, TooltipContent, TooltipGroup, TooltipTrigger };

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
});

export namespace Tooltip {
  export interface Props extends TooltipRoot.Props {}
  export interface Trigger extends TooltipTrigger.Props {}
  export interface Content extends TooltipContent.Props {}
  export interface Arrow extends TooltipArrow.Props {}
}
