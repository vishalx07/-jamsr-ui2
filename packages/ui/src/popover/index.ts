import {
  Popover as PopoverRoot,
  PopoverArrow,
  PopoverContent,
  PopoverContentRoot,
  PopoverDialog,
  PopoverTrigger,
} from "./popover";

export const Popover = Object.assign(PopoverRoot, {
  Arrow: PopoverArrow,
  Content: PopoverContent,
  ContentRoot: PopoverContentRoot,
  Dialog: PopoverDialog,
  Trigger: PopoverTrigger,
});

export {
  PopoverArrow,
  PopoverContent,
  PopoverContentRoot,
  PopoverDialog,
  PopoverTrigger,
};
