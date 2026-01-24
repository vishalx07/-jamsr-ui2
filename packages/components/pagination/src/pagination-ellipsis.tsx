"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";

export const PaginationEllipsis = (props: PaginationEllipsis.Props) => {
  const renderElement = useRenderElement("span", {
    props: [props],
  });
  return renderElement;
};

export namespace PaginationEllipsis {
  export interface Props extends UIProps<"span"> {}
}
