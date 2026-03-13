"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";

export const CheckboxInputEvents = () => {
  const handleChange = (e: boolean) => {
    console.log(e);
  };
  return (
    <Field orientation="horizontal">
      <Checkbox onCheckedChange={handleChange} />
      <Label>Enable email notifications</Label>
    </Field>
  );
};
