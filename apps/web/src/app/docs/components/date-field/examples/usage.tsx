"use client";

import { DateField } from "jamsrui/date-field";

export const DateInputUsage = () => {
  return (
    <DateField>
      <DateField.Input>
        {(segment) => <DateField.Segment segment={segment} />}
      </DateField.Input>
    </DateField>
  );
};
