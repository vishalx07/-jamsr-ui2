"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useScrollAreaContext } from "./scroll-area-context";

import type { UIProps } from "@jamsrui/utils";

export const ScrollAreaViewport = (props: ScrollAreaViewport.Props) => {
  const { render, children, className, ...restProps } = props;

  // Get context
  const { viewportRef, handleScroll } = useScrollAreaContext();

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children: props.children,
      ref: viewportRef,
      onScroll: handleScroll,
      render: props.render,
    },
  });
  return renderElement;
};

export namespace ScrollAreaViewport {
  export interface Props extends UIProps<"div"> {}
}
