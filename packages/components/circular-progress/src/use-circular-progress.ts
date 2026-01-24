"use client";
import { useCallback, useMemo } from "react";

import type { PropGetter } from "@jamsrui/utils";

import type { CircularProgress } from "./circular-progress";
import type { CircularProgressLabel } from "./circular-progress-label";
import type { CircularProgressProgress } from "./circular-progress-progress";
import type { CircularProgressTrack } from "./circular-progress-track";

export const useCircularProgress = (props: useCircularProgress.Props) => {
  const {
    value = 20,
    size = 20,
    strokeWidth = 2,
    progressWidth = strokeWidth,
    trackWidth = strokeWidth,
    startAngle = -90,
    ...elementProps
  } = props;

  const radius = (size - Math.max(trackWidth, progressWidth)) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 100) * circumference;

  const getRootProps: PropGetter<CircularProgress.Props> = useCallback(
    () => ({
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      ...elementProps,
      "data-component": "circular-progress",
      "data-slot": "root",
    }),
    [elementProps, size],
  );

  const getTrackProps: PropGetter<CircularProgressTrack.Props> = useCallback(
    (props) => ({
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: trackWidth,
      ...props,
      "data-slot": "track",
    }),
    [radius, size, trackWidth],
  );

  const getProgressProps: PropGetter<CircularProgressProgress.Props> =
    useCallback(
      (props) => ({
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: progressWidth,
        strokeDasharray: circumference,
        strokeDashoffset: progressOffset,
        strokeLinecap: "round",
        transform: `rotate(${startAngle} ${size / 2} ${size / 2})`,
        ...props,
        "data-slot": "progress",
      }),
      [circumference, progressOffset, progressWidth, radius, size, startAngle],
    );

  const getLabelProps: PropGetter<CircularProgressLabel.Props> = useCallback(
    (props) => ({
      x: "50%",
      y: "50%",
      textAnchor: "middle",
      dy: "0.3em",
      ...props,
      "data-slot": "label",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getProgressProps,
      getTrackProps,
      getLabelProps,
    }),
    [getLabelProps, getProgressProps, getRootProps, getTrackProps],
  );
};

export namespace useCircularProgress {
  export interface TrackProps extends React.SVGProps<SVGCircleElement> {}
  export interface ProgressProps extends React.SVGProps<SVGCircleElement> {}
  export interface LabelProps extends React.SVGProps<SVGTextElement> {}

  export interface Props extends React.SVGProps<SVGSVGElement> {
    value?: number; // Progress value (0 - 100)
    size?: number; // Diameter of the circle
    trackWidth?: number; // Width of the circular track
    progressWidth?: number; // Width of the progress arc
    strokeWidth?: number; // Stroke width for both track and progress
    startAngle?: number; // Start angle of the progress arc
  }
}
