"use client";
import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";

import { CheckboxContext } from "./checkbox-context";
import { CheckboxRoot } from "./checkbox-root";
import { useCheckbox } from "./use-checkbox";

export const Checkbox = (props: Checkbox.Props) => {
  const ctx = useCheckbox(props);
  const fieldAllyCtx = useFieldA11y();
  return (
    <CheckboxContext value={ctx}>
      <FieldA11yContext value={fieldAllyCtx}>
        <CheckboxRoot>{props.children}</CheckboxRoot>
      </FieldA11yContext>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends useCheckbox.Props {}
}
