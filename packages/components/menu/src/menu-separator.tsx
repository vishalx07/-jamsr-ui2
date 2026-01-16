"use client";

import { Divider } from "@jamsrui/divider";
import { cn } from "@jamsrui/utils";

export const MenuSeparator = (props: MenuSeparator.Props) => {
  const {className,...restProps}= props
  return <Divider className={cn("my-1.5",className)} {...restProps}  />;
};

export namespace MenuSeparator {
  export interface Props extends Divider.Props {}
}
