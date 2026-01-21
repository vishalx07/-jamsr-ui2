"use client";

import { DateField } from "jamsrui/date-field";
import { DateInput, DateSegment } from "jamsrui/date-field";

export const DateInputUsage = () => {
  return (
    <DateField>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
    </DateField>
  );
};
