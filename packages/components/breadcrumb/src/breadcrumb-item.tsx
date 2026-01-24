"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";

export const BreadcrumbItem = (props: BreadcrumbItem.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace BreadcrumbItem {
  export interface Props extends UIProps<"div"> {}
}
