"use client";

import { useCircularProgressContext } from "./circular-progress-context";

import type { UIProps } from "@jamsrui/utils";

export const CircularProgressProgress = (
  props: CircularProgressProgress.Props,
) => {
  const ctx = useCircularProgressContext();
  const { getProgressProps } = ctx;
  return <circle {...getProgressProps(props)} />;
};

export namespace CircularProgressProgress {
  export interface Props extends UIProps<"circle"> {}
}
