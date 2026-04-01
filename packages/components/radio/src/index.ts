import { Radio as RadioRoot } from "./radio";
import { RadioContext, useRadioContext } from "./radio-context";
import { RadioGroup as RadioGroupRoot } from "./radio-group";
import { RadioGroupContext, useRadioGroupContext } from "./radio-group-context";
import { RadioIndicator } from "./radio-indicator";
import { RadioInput } from "./radio-input";

export {
  RadioContext,
  RadioGroupContext,
  useRadioContext,
  useRadioGroupContext,
};

export const RadioGroup = RadioGroupRoot;

export const Radio = Object.assign(RadioRoot, {
  Group: RadioGroupRoot,
  Indicator: RadioIndicator,
  Input: RadioInput,
});

export namespace Radio {
  export interface Props extends RadioRoot.Props {}
  export interface Group extends RadioGroupRoot.Props {}
  export interface Indicator extends RadioIndicator.Props {}
}

export namespace RadioGroup {
  export interface Props extends RadioGroupRoot.Props {}
}
