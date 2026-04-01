"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const DialogPositioner = (props: DialogPositioner.Props) => {
  const { getPositionerProps } = useDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};
export namespace DialogPositioner {
  export interface Props extends UIProps<"div"> {}
}
