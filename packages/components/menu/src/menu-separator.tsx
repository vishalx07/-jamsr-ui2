"use client";

import { Separator } from "@jamsrui/separator";
import { cn } from "@jamsrui/utils";

export const MenuSeparator = (props: MenuSeparator.Props) => {
  const { className, ...restProps } = props;
  return <Separator className={cn("my-1.5", className)} {...restProps} />;
};

export namespace MenuSeparator {
  export interface Props extends Separator.Props {}
}
