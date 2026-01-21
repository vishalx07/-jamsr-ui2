"use client";

import { TimeFieldContext } from "./time-field-context";
import { useTimeField } from "./use-time-field";

export const TimeField = (props: TimeField.Props) => {
  const ctx = useTimeField(props);
  const { Component: Root, getRootProps, children } = ctx;

  return (
    <TimeFieldContext value={ctx}>
      <Root {...getRootProps({} as any)}>{children}</Root>
    </TimeFieldContext>
  );
};

export namespace TimeField {
  export interface Props extends useTimeField.Props {}
}
