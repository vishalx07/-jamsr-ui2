"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAlertDialogContext } from "./alert-dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertDialogContainer = (props: AlertDialogContainer.Props) => {
  const { getContainerProps } = useAlertDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });
  return renderElement;
};

export namespace AlertDialogContainer {
  export interface Props extends UIProps<"div"> {}
}
