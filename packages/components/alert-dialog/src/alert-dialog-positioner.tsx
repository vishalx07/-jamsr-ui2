"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAlertDialogContext } from "./alert-dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertDialogPositioner = (props: AlertDialogPositioner.Props) => {
  const { getPositionerProps } = useAlertDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getPositionerProps(props)],
  });
  return renderElement;
};

export namespace AlertDialogPositioner {
  export interface Props extends UIProps<"div"> {}
}
