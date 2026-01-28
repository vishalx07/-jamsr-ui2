"use client";
import { useCallback, useRef, useState } from "react";

import type { PropGetter } from "@jamsrui/utils";

import type { DateSegment } from "./date-segment";
import type { DateFieldSeparator } from "./date-field-separator";

type Segments = Record<DateSegment.Segment, string>;

import { DateFieldRoot } from "./date-field-root";

export const useDateField = (props: useDateField.Props) => {
  const [segments, setSegments] = useState<Segments>({
    day: "",
    month: "",
    year: "",
  });
  const [activeSegment, setActiveSegment] =
    useState<DateSegment.Segment>("day");

  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getRootProps: PropGetter<DateFieldRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-component": "date-field",
      "data-slot": "root",
    }),
    [],
  );

  const getInputProps: PropGetter<DateFieldRoot.Props> = useCallback(
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

  const getSeparatorProps: PropGetter<DateFieldSeparator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "separator",
    }),
    [],
  );

  return {
    Component: DateFieldRoot,
    segments,
    activeSegment,

    getRootProps,
    getInputProps,
    getSeparatorProps,
    setActiveSegment,
    segmentList: ["day", "month", "year"] as const,
    children: null,
  };
};

export namespace useDateField {
  export interface Props {}
}
