import { TooltipGroup } from "@jamsrui/react";

import {
  Tooltip as TooltipRoot,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip";

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  Group: TooltipGroup,
});

export namespace Tooltip {
  export interface Props extends TooltipRoot.Props {}
  export interface Trigger extends TooltipTrigger.Props {}
  export interface Content extends TooltipContent.Props {}
  export interface Arrow extends TooltipArrow.Props {}
}

export { TooltipArrow, TooltipContent, TooltipGroup, TooltipTrigger };
