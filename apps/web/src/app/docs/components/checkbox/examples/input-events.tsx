"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";
import React from "react";

export const CheckboxInputEvents = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };
  return (
    <Field orientation="horizontal">
      <Checkbox
        inputProps={{
          onChange: handleChange,
        }}
      />
      <Label>Enable email notifications</Label>
    </Field>
  );
};
