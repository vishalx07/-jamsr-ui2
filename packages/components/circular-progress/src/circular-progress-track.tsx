"use client";

import { useCircularProgressContext } from "./circular-progress-context";

import type { UIProps } from "@jamsrui/utils";

export const CircularProgressTrack = (props: CircularProgressTrack.Props) => {
  const ctx = useCircularProgressContext();
  const { getTrackProps } = ctx;
  return <circle {...getTrackProps(props)} />;
};

export namespace CircularProgressTrack {
  export interface Props extends UIProps<"circle"> {}
}
