"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";

export const SliderIndicator = (props: SliderIndicator.Props) => {
  const { render, children, ...restProps } = props;
  const { orientation, isDisabled, values, getPercentageForValue, min, max } =
    useSliderContext();

  let left = 0;
  let width = 0;
  let bottom = 0;
  let height = 0;

  if (values.length === 1) {
    const percent = getPercentageForValue(values[0] ?? min);
    if (orientation === "horizontal") {
      width = percent;
    } else {
      height = percent;
    }
  } else if (values.length > 1) {
    const p1 = getPercentageForValue(values[0] ?? min);
    const p2 = getPercentageForValue(values[values.length - 1] ?? max); // Use first and last for range?
    // Typically range slider with 2 thumbs shows range between them.
    // What if 3 thumbs?
    // Base UI Slider allows multiple values.
    // If > 1 value, usually indicator connects min to max of values? Or consecutive?
    // Let's assume standard 1 or 2 thumb usage for now.
    const start = Math.min(p1, p2);
    const end = Math.max(p1, p2);

    if (orientation === "horizontal") {
      left = start;
      width = end - start;
    } else {
      bottom = start; // Assuming bottom-up
      height = end - start;
    }
  }

  const style =
    orientation === "horizontal"
      ? { left: `${left}%`, width: `${width}%` }
      : { bottom: `${bottom}%`, height: `${height}%` };

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      style: { ...restProps.style, ...style },
      render,
    },
  });
  return renderElement;
};

export namespace SliderIndicator {
  export interface Props extends UIProps<"div"> {}
}
