"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useInputGroupContext } from "./input-group-context";

import type { UIProps } from "@jamsrui/utils";

export const InputGroupRoot = (_props: InputGroupRoot.Props) => {
  const { getRootProps } = useInputGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps()],
  });
  return renderElement;
};

export namespace InputGroupRoot {
  export interface Props extends UIProps<"div"> {}
}
