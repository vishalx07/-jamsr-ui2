"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxControl = (props: CheckboxControl.Props) => {
  const { getControlProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getControlProps(props)],
  });
  return renderElement;
};

export namespace CheckboxControl {
  export interface Props extends UIProps<"div"> {}
}
