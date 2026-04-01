"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTooltipContext } from "./tooltip-context";

import type { UIProps } from "@jamsrui/utils";

export const TooltipContent = (props: TooltipContent.Props) => {
  const { getContentProps } = useTooltipContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace TooltipContent {
  export interface Props extends UIProps<"div"> {}
}
