"use client";
import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";
import { useRenderElement } from "@jamsrui/hooks";

import { FieldContext } from "./field-context";
import { useField } from "./use-field";

export const Field = (props: Field.Props) => {
  const ctx = useField(props);
  const fieldA11yCtx = useFieldA11y();
  const renderElement = useRenderElement("div", {
    props: [ctx.getRootProps({})],
  });
  return (
    <FieldContext value={ctx}>
      <FieldA11yContext value={fieldA11yCtx}>{renderElement}</FieldA11yContext>
    </FieldContext>
  );
};

export namespace Field {
  export interface Props extends useField.Props {}
}
