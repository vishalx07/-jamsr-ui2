"use client";

import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { useState } from "react";

export const SwitchControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Switch isChecked={isChecked} onCheckedChange={setIsChecked}>
      <Switch.Track />
      <Switch.Content>
        <Label>Are you ok?</Label>
        <Description>{isChecked ? "Checked" : "Unchecked"}</Description>
      </Switch.Content>
    </Switch>
  );
};
