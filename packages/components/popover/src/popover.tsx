"use client";

import { PopoverContext } from "./popover-context";
import { usePopover } from "./use-popover";

export const Popover = (props: Popover.Props) => {
  const { children, ...restProps } = props;
  const ctx = usePopover(restProps);
  return <PopoverContext value={ctx}>{children}</PopoverContext>;
};

export namespace Popover {
  export interface Props extends usePopover.Props {
    children: React.ReactNode;
  }
}
