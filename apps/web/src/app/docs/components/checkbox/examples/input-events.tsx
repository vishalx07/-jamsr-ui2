"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";

export const CheckboxInputEvents = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };
  return (
    <Checkbox
      inputProps={{
        onChange: handleChange,
      }}
    >
      <Checkbox.Control />
      <Checkbox.Content>
        <Label>Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>
  );
};
