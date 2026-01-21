"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { type UIProps } from "@jamsrui/utils";
import { useSliderContext } from "./slider-context";

export const SliderTrack = (props: SliderTrack.Props) => {
  const { render, children, ...restProps } = props;
  const { orientation, isDisabled, onTrackPointerDown, trackRef } =
    useSliderContext();

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      onPointerDown: onTrackPointerDown,
      ref: trackRef,
      render,
    },
  });
  return renderElement;
};

export namespace SliderTrack {
  export interface Props extends UIProps<"div"> {}
}
