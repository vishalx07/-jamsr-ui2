"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchRoot = () => {
  const { getRootProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps()],
  });
  return renderElement;
};

export namespace SwitchRoot {
  export interface Props extends UIProps<"div"> {}
}
