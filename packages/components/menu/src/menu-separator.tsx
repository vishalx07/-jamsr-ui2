"use client";

import { Separator } from "@jamsrui/separator";

export const MenuSeparator = (props: MenuSeparator.Props) => {
  return <Separator {...props} />;
};

export namespace MenuSeparator {
  export interface Props extends Separator.Props {}
}
