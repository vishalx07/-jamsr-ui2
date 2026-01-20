"use client";

import { useCircularProgress } from "./use-circular-progress";

export const CircularProgress = (props: CircularProgress.Props) => {
  const ctx = useCircularProgress(props);
  const {
    showLabel,
    getRootProps,
    getTrackProps,
    getLabelProps,
    getProgressProps,
    label,
  } = ctx;

  return (
    <svg {...getRootProps({})}>
      {/* Background Track */}
      <circle {...getTrackProps({})} />
      {/* Progress Arc */}
      <circle {...getProgressProps({})} />
      {/* Text inside the circle */}
      {!!showLabel && <text {...getLabelProps({})}>{label}</text>}
    </svg>
  );
};

export namespace CircularProgress {
  export interface Props extends useCircularProgress.Props {}
}
