"use client";

import { PlusIcon } from "@jamsrui/icons";
import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";
import { useState } from "react";

export const CheckboxCustomIndicator = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Checkbox checked={checked} onCheckedChange={setChecked}>
        <Checkbox.Indicator>{checked ? <PlusIcon /> : null}</Checkbox.Indicator>
      </Checkbox>
      <Field.Content>
        <Label>Enable email notifications</Label>
      </Field.Content>
    </Field>
  );
};
