"use client";
import { useCallback, useRef, useState } from "react";



import type { PropGetter } from "@jamsrui/utils";

import type { TimeSegment } from "./time-segment";
import type { TimeFieldSeparator } from "./time-field-separator";

type Segments = Record<TimeSegment.Segment, string>;

import { TimeFieldRoot } from "./time-field-root";

export const useTimeField = (props: useTimeField.Props) => {
  const [segments, setSegments] = useState<Segments>({
    hour: "",
    minute: "",
    second: "",
    period: "",
  });
  const [activeSegment, setActiveSegment] =
    useState<TimeSegment.Segment>("hour");

  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getRootProps: PropGetter<TimeFieldRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-component": "time-field",
      "data-slot": "root",
    }),
    [],
  );

  const getInputProps: PropGetter<TimeFieldRoot.Props> = useCallback(
    (props) => ({
      ...props,
      contentEditable: true,
      suppressContentEditableWarning: true,
      "data-slot": "input",
      inputMode: "numeric",
      spellCheck: false,
    }),
    [],
  );

  const getSeparatorProps: PropGetter<TimeFieldSeparator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "separator",
    }),
    [],
  );

  return {
    Component: TimeFieldRoot,
    segments,
    activeSegment,

    getRootProps,
    getInputProps,
    getSeparatorProps,
    setActiveSegment,
    segmentList: ["hour", "minute", "period"] as const,
    children: null,
  };
};

export namespace useTimeField {
  export interface Props {}
}
