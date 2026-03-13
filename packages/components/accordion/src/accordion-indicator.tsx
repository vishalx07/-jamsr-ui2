"use client";

import { useRender } from "@base-ui/react";

import { ChevronDownIcon } from "./icons";

export const AccordionIndicator = (props: AccordionIndicator.Props) => {
  const { children = <ChevronDownIcon />, render, ...restProps } = props;
  const element = useRender({
    defaultTagName: "span",
    render,
    props: {
      children,
      ...restProps,
    },
  });
  return element;
};

export namespace AccordionIndicator {
  export interface Props extends useRender.ComponentProps<"span"> {}
}
