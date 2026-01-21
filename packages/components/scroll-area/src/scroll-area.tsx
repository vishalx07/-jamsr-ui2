"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { ScrollAreaProvider } from "./scroll-area-context";
import { useScrollArea } from "./use-scroll-area";

import type { UIProps } from "@jamsrui/utils";

const Root = (props: ScrollArea.Props) => {
  const { render, children, className, type, scrollHideDelay, ...restProps } =
    props;
  const context = useScrollArea({ type, scrollHideDelay });

  const renderElement = useRenderElement("div", {
    props: {
      ...restProps,
      children,
      render,
    },
  });

  return (
    <ScrollAreaProvider value={context}>{renderElement}</ScrollAreaProvider>
  );
};

export const ScrollArea = Root;

export namespace ScrollArea {
  export interface Props extends UIProps<"div"> {
    type?: "auto" | "always" | "scroll" | "hover";
    scrollHideDelay?: number;
  }
}
