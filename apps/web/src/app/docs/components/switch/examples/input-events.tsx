"use client";

import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import React, { useState } from "react";
import { Field } from "jamsrui/textfield";

export const SwitchInputEvents = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <Field orientation="horizontal">
      <Switch
        inputProps={{
          onChange,
        }}
      />
      <Label>Switch is {checked ? "on" : "off"}</Label>
    </Field>
  );
};
