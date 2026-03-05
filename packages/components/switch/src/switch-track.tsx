"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchControl = (props: SwitchControl.Props) => {
  const { getTrackProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getTrackProps(props)],
  });
  return renderElement;
};

export namespace SwitchControl {
  export interface Props extends UIProps<"div"> {}
}
