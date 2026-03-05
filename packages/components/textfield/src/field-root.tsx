"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useFieldContext } from "./field-context";

import type { UIProps } from "@jamsrui/utils";

export const FieldRoot = () => {
  const ctx = useFieldContext();
  const renderElement = useRenderElement("div", {
    props: [ctx?.getRootProps({}) ?? {}],
  });
  return renderElement;
};

export namespace FieldRoot {
  export interface Props extends UIProps<"div"> {}
}
