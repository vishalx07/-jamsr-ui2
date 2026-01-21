import {
  Tooltip as TooltipRoot,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip";
import { TooltipGroup } from "@jamsrui/react";

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  Group: TooltipGroup,
});

export { TooltipArrow, TooltipContent, TooltipTrigger, TooltipGroup };
