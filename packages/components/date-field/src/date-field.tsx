"use client";

import { DateFieldContext } from "./date-field-context";
import { useDateField } from "./use-date-field";

export const DateField = (props: DateField.Props) => {
  const ctx = useDateField(props);
  const { Component: Root, getRootProps, children } = ctx;

  return (
    <DateFieldContext value={ctx}>
      <Root {...getRootProps({})}>{children}</Root>
    </DateFieldContext>
  );
};

export namespace DateField {
  export interface Props extends useDateField.Props {}
}
