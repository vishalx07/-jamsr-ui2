"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useScrollAreaContext } from "./scroll-area-context";

import type { UIProps } from "@jamsrui/utils";

export const ScrollAreaContent = (props: ScrollAreaContent.Props) => {
  const { render, children, className, ...restProps } = props;
  const { contentRef } = useScrollAreaContext();

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      ref: contentRef,
      render,
    },
  });
  return renderElement;
};

export namespace ScrollAreaContent {
  export interface Props extends UIProps<"div"> {}
}
