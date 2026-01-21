"use client";

import { TimeField, TimeInput, TimeSegment } from "jamsrui/time-field";

export const TimeFieldUsage = () => {
  return (
    <TimeField>
      <TimeInput>{(segment) => <TimeSegment segment={segment} />}</TimeInput>
    </TimeField>
  );
};
