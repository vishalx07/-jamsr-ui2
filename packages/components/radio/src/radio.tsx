"use client";

import { RadioContext } from "./radio-context";
import { RadioRoot } from "./radio-root";
import { useRadio } from "./use-radio";

export const Radio = (props: Radio.Props) => {
  const ctx = useRadio(props);
  return (
    <RadioContext value={ctx}>
      <RadioRoot />
    </RadioContext>
  );
};

export namespace Radio {
  export type Value = any;
  export interface Props extends useRadio.Props {}
}
