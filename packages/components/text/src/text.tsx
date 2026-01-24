"use client";
import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const Text = (props: Text.Props) => {
  const renderElement = useRenderElement("p", {
    props: [props],
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends UIProps<"p"> {}
}
