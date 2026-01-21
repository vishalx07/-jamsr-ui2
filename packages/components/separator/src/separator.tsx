"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { UIProps } from "@jamsrui/utils";

export const Separator = (props: Separator.Props) => {
  const { orientation, ...restProps } = props;

  const renderElement = useRenderElement("div", {
    props: [
      {
        "data-orientation": orientation,
        "data-slot": "separator",
      },
      restProps,
    ],
  });
  return renderElement;
};

export namespace Separator {
  export interface Props extends UIProps<"div"> {
    orientation?: "horizontal" | "vertical";
  }
}
