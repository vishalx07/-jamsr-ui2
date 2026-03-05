"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";
import { useState } from "react";

export const CheckboxControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
      <Label>
        {isChecked
          ? "I agree to receive marketing emails"
          : "Agree to receive marketing emails"}
      </Label>
    </Field>
  );
};
