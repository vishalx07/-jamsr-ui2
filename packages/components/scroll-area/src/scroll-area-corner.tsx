"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useScrollAreaContext } from "./scroll-area-context";

import type { UIProps } from "@jamsrui/utils";

export const ScrollAreaCorner = (props: ScrollAreaCorner.Props) => {
  const { render, className, ...restProps } = props;
  const { hasScrollX, hasScrollY } = useScrollAreaContext();

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      render,
    },
  });
  if (!hasScrollX || !hasScrollY) return null;
  return renderElement;
};

export namespace ScrollAreaCorner {
  export interface Props extends UIProps<"div"> {}
}
