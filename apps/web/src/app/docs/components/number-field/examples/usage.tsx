import { NumberField } from "jamsrui/number-field";

export const NumberFieldUsage = () => {
  return (
    <div className="w-full max-w-48">
      <NumberField defaultValue={100}>
        <NumberField.ScrubArea>Amount</NumberField.ScrubArea>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
      </NumberField>
    </div>
  );
};
