"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { useState } from "react";

export const CheckboxControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox checked={isChecked} onCheckedChange={setIsChecked}>
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>
          {isChecked
            ? "I agree to receive marketing emails"
            : "Agree to receive marketing emails"}
        </Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
