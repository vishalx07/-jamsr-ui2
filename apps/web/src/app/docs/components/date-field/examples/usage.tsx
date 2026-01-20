"use client";

import { DateField, DateInput, DateSegment } from "jamsrui";

export const DateInputUsage = () => {
  return (
    <DateField>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
    </DateField>
  );
};
