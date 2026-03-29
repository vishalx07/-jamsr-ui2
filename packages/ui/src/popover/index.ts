import {
  Popover as PopoverRoot,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

import type { Popover as PopoverPrimitive } from "@base-ui/react/popover";

export const Popover = Object.assign(PopoverRoot, {
  Arrow: PopoverArrow,
  Content: PopoverContent,
  Trigger: PopoverTrigger,
  Title: PopoverTitle,
  Description: PopoverDescription,
});

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Positioner extends PopoverPrimitive.Positioner.Props {}
}
