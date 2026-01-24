"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";

export const SliderControl = (props: SliderControl.Props) => {
  const { render, children, className, ...restProps } = props;
  const { orientation, isDisabled } = useSliderContext();

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      className,
      render,
    },
  });
  return renderElement;
};

export namespace SliderControl {
  export interface Props extends UIProps<"div"> {}
}
