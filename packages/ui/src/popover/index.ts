import {
  PopoverArrow,
  PopoverContent,
  Popover as PopoverRoot,
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
}
