"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTooltipContext } from "./tooltip-context";

import type { UIProps } from "@jamsrui/utils";

export const TooltipPositioner = (props: TooltipPositioner.Props) => {
  const { getPositionerProps } = useTooltipContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};

export namespace TooltipPositioner {
  export interface Props extends UIProps<"div"> {}
}
