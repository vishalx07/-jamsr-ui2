"use client";

import { Description } from "jamsrui/description";
import { FieldError } from "jamsrui/field-error";
import { Input } from "jamsrui/input";
import { Label } from "jamsrui/label";
import { Field } from "jamsrui/textfield";
import { useState } from "react";

export const InputErrorState = () => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <Field>
      <Label>Username</Label>
      <Input
        placeholder="Enter your username"
        value={value}
        onValueChange={setValue}
        isInvalid={isInvalid}
      />
      <Description>Please use a unique username</Description>
      {isInvalid && <FieldError>Username is required</FieldError>}
    </Field>
  );
};
