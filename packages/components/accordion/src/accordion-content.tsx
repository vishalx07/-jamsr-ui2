"use client";

import { useRender } from "@base-ui/react/use-render";

export const AccordionContent = (props: AccordionContent.Props) => {
  const { render, ...restProps } = props;
  const element = useRender({
    defaultTagName: "div",
    render,
    props: restProps,
  });
  return element;
};

export namespace AccordionContent {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
