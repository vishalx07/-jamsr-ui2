"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { AlertContextProvider } from "./alert-context";
import { useAlert } from "./use-alert";

import type { UIProps } from "@jamsrui/utils";

export const Alert = (props: Alert.Props) => {
  const ctx = useAlert(props);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
  });
  return <AlertContextProvider ctx={ctx}>{renderElement}</AlertContextProvider>;
};

export namespace Alert {
  export type Status = "success" | "warning" | "info" | "error" | "neutral";
  export interface Props extends useAlert.Props {}
}
