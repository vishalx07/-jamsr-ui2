import {
  NumberField as NumberFieldRoot,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "./number-field";

export const NumberField = Object.assign(NumberFieldRoot, {
  Group: NumberFieldGroup,
  Input: NumberFieldInput,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
});

export namespace NumberField {
  export interface Props extends NumberFieldRoot.Props {}
}

export {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
};
