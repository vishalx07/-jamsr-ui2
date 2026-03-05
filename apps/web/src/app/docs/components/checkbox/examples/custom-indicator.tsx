"use client";

import { PlusIcon } from "@jamsrui/icons";
import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxCustomIndicator = () => {
  return (
    <Field orientation="horizontal">
      <Checkbox>
        <Checkbox.Indicator>
          {({ isChecked }) =>
            isChecked ? <PlusIcon className="size-3" /> : null
          }
        </Checkbox.Indicator>
      </Checkbox>
      <Field.Content>
        <Label>Enable email notifications</Label>
      </Field.Content>
    </Field>
  );
};
