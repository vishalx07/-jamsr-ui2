"use client";

import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { useState } from "react";

export const SwitchInputEvents = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <Switch
      inputProps={{
        onChange,
      }}
    >
      <Switch.Control />
      <Label>Switch is {checked ? "on" : "off"}</Label>
    </Switch>
  );
};
