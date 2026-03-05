"use client";

import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { useState } from "react";
import { Field } from "jamsrui/textfield";

export const SwitchControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Switch checked={isChecked} onCheckedChange={setIsChecked} />
      <Field.Content>
        <Label>Are you ok?</Label>
        <Description>{isChecked ? "Checked" : "Unchecked"}</Description>
      </Field.Content>
    </Field>
  );
};
