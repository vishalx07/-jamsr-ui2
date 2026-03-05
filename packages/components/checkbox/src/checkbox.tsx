"use client";

import { CheckboxContext } from "./checkbox-context";
import { CheckboxRoot } from "./checkbox-root";
import { useCheckbox } from "./use-checkbox";

export const Checkbox = (props: Checkbox.Props) => {
  const ctx = useCheckbox(props);
  return (
    <CheckboxContext value={ctx}>
      <CheckboxRoot>{props.children}</CheckboxRoot>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {}
}
