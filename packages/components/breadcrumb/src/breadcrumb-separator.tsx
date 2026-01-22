"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";

export const BreadcrumbSeparator = (props: BreadcrumbSeparator.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace BreadcrumbSeparator {
  export interface Props extends UIProps<"div"> {}
}
