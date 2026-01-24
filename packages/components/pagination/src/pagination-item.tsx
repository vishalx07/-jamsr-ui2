"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";

export const PaginationItem = (props: PaginationItem.Props) => {
  const renderElement = useRenderElement("button", {
    props: [props],
  });
  return renderElement;
};

export namespace PaginationItem {
  export interface Props extends UIProps<"button"> {}
}
