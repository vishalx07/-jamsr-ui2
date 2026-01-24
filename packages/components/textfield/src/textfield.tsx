"use client";
import { FieldA11yContext, useFieldA11y } from "@jamsrui/context";
import { useRenderElement } from "@jamsrui/hooks";
import { TextFieldContext } from "./textfield-context";
import { useTextField } from "./use-textfield";

export const TextField = (props: TextField.Props) => {
  const ctx = useTextField(props);
  const fieldA11yCtx = useFieldA11y();
  const renderElement = useRenderElement("div", {
    props: [ctx.getRootProps({})],
  });
  return (
    <TextFieldContext value={ctx}>
      <FieldA11yContext value={fieldA11yCtx}>{renderElement}</FieldA11yContext>
    </TextFieldContext>
  );
};

export namespace TextField {
  export interface Props extends useTextField.Props {}
}
