"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useTextFieldContext } from "./textfield-context";

import type { UIProps } from "@jamsrui/utils";

export const TextfieldRoot = () => {
  const ctx = useTextFieldContext();
  const renderElement = useRenderElement("div", {
    props: [ctx?.getRootProps({}) ?? {}],
  });
  return renderElement;
};

export namespace TextfieldRoot {
  export interface Props extends UIProps<"div"> {}
}
