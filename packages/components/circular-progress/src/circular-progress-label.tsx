"use client";

import { useCircularProgressContext } from "./circular-progress-context";

import type { UIProps } from "@jamsrui/utils";

export const CircularProgressLabel = (props: CircularProgressLabel.Props) => {
  const ctx = useCircularProgressContext();
  const { getLabelProps } = ctx;
  return <text {...getLabelProps(props)} />;
};

export namespace CircularProgressLabel {
  export interface Props extends UIProps<"text"> {}
}
