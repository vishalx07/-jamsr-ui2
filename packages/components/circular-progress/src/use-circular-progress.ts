"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { CircularProgress } from "./circular-progress";

export const useCircularProgress = (props: useCircularProgress.Props) => {
  const {
    value = 40,
    size = 40,
    strokeWidth,
    progressWidth = strokeWidth ?? 3,
    trackWidth = strokeWidth ?? 3,
    showLabel = false,
    labelFormatter = (value) => `${value}%`,
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
      "data-component": dataAttrDev("circular-progress"),
      "data-slot": dataAttrDev("root"),
    }),
    [elementProps, size],
  );

  const getTrackProps: PropGetter<useCircularProgress.TrackProps> = useCallback(
    (props) => ({
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: trackWidth,
      ...props,
      "data-slot": dataAttrDev("track"),
    }),
    [radius, size, trackWidth],
  );

  const getProgressProps: PropGetter<useCircularProgress.ProgressProps> =
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
        transform: `rotate(-90) ${size / 2} ${size / 2}`,
        ...props,
        "data-slot": dataAttrDev("progress"),
      }),
      [circumference, progressOffset, progressWidth, radius, size],
    );

  const getLabelProps: PropGetter<useCircularProgress.LabelProps> = useCallback(
    (props) => ({
      x: "50%",
      y: "50%",
      textAnchor: "middle",
      dy: "0.3em",
      fontSize: "18",
      ...props,
      "data-slot": dataAttrDev("label"),
    }),
    [],
  );

  const label = labelFormatter ? labelFormatter(value) : value;

  return useMemo(
    () => ({
      getRootProps,
      getProgressProps,
      getTrackProps,
      getLabelProps,
      showLabel,
      label,
    }),
    [
      getLabelProps,
      getProgressProps,
      getRootProps,
      getTrackProps,
      label,
      showLabel,
    ],
  );
};

export namespace useCircularProgress {
  export interface TrackProps extends React.SVGProps<SVGCircleElement> {}
  export interface ProgressProps extends React.SVGProps<SVGCircleElement> {}
  export interface LabelProps extends React.SVGProps<SVGTextElement> {}

  export interface Props extends Omit<React.SVGProps<SVGSVGElement>, "color"> {
    value?: number; // Progress value (0 - 100)
    size?: number; // Diameter of the circle
    trackWidth?: number; // Width of the circular track
    progressWidth?: number; // Width of the progress arc
    showLabel?: boolean; // Show progress label
    strokeWidth?: number; // Stroke width for both track and progress
    isIntermediate?: boolean;
    labelFormatter?: (value: number) => string;
  }
}
