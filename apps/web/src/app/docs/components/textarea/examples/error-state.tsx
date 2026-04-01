"use client";

import { Description } from "jamsrui/description";
import { Field } from "jamsrui/field";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { useState } from "react";

export const TextareaErrorState = () => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <Field>
      <Label>Username</Label>
      <Textarea
        placeholder="Enter your username"
        value={value}
        onValueChange={setValue}
        // isInvalid={isInvalid}
      />
      <Description>Please use a unique username</Description>
      {isInvalid && <Field.Error match>Username is required</Field.Error>}
    </Field>
  );
};
