import {
  Popover as PopoverRoot,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

export const Popover = Object.assign(PopoverRoot, {
  Arrow: PopoverArrow,
  Content: PopoverContent,
  Trigger: PopoverTrigger,
});

export { PopoverArrow, PopoverContent, PopoverTrigger };

export namespace Popover {
  export interface Props extends PopoverRoot.Props {}
  export interface Arrow extends PopoverArrow.Props {}
  export interface Content extends PopoverContent.Props {}
  export interface Trigger extends PopoverTrigger.Props {}
}
