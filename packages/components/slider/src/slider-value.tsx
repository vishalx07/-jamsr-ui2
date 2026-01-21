"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";

export const SliderValue = (props: SliderValue.Props) => {
  const { render, children, ...restProps } = props;
  const { values, orientation, isDisabled } = useSliderContext();

  let content: React.ReactNode;
  if (typeof children === "function") {
    content = (children as any)(values);
  } else if (children) {
    content = children;
  } else {
    content = values.join(" - ");
  }

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children: content,
      render,
    },
  });
  return renderElement;
};

export namespace SliderValue {
  export interface Props extends Omit<UIProps<"div">, "children"> {
    children?: React.ReactNode | ((values: number[]) => React.ReactNode);
  }
}
