"use client";

import { Description } from "jamsrui/description";
import { FieldError } from "jamsrui/field-error";
import { Label } from "jamsrui/label";
import { Textarea } from "jamsrui/textarea";
import { Field } from "jamsrui/textfield";
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
        isInvalid={isInvalid}
      />
      <Description>Please use a unique username</Description>
      {isInvalid && <FieldError>Username is required</FieldError>}
    </Field>
  );
};
