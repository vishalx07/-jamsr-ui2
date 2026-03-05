"use client";

import type { UIProps } from "@jamsrui/utils";

export const FieldContent = (props: FieldContent.Props) => {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
};

export namespace FieldContent {
  export interface Props extends UIProps<"div"> {}
}
