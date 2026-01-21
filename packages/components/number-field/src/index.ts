import { NumberField as NumberFieldRoot } from "./number-field";
import { NumberFieldDecrement } from "./number-field-decrement";
import { NumberFieldGroup } from "./number-field-group";
import { NumberFieldIncrement } from "./number-field-increment";
import { NumberFieldInput } from "./number-field-input";
import { useNumberField } from "./use-number-field";

export {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  useNumberField,
};

export const NumberField = Object.assign(NumberFieldRoot, {
  Group: NumberFieldGroup,
  Input: NumberFieldInput,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
});

export namespace NumberField {
  export interface Props extends NumberFieldRoot.Props {}
  export interface Group extends NumberFieldGroup.Props {}
  export interface Increment extends NumberFieldIncrement.Props {}
  export interface Decrement extends NumberFieldDecrement.Props {}
  export interface Input extends NumberFieldInput.Props {}
}
