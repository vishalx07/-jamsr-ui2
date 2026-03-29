import { Field } from "jamsrui/field";

export const FieldUsage = () => {
  return (
    <Field>
      <Field.Label>Name</Field.Label>
      <Field.Control />
      <Field.Error match="valueMissing">Please enter your name</Field.Error>
      <Field.Description>Visible on your profile</Field.Description>
    </Field>
  );
};
