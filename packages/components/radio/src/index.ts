import { Radio as RadioRoot } from "./radio";
import { RadioContent } from "./radio-content";
import { RadioContext, useRadioContext } from "./radio-context";
import { RadioControl } from "./radio-control";
import { RadioGroup as RadioGroupRoot } from "./radio-group";
import { RadioGroupContext, useRadioGroupContext } from "./radio-group-context";
import { RadioIndicator } from "./radio-indicator";
import { useRadio } from "./use-radio";
import { useRadioGroup } from "./use-radio-group";

export {
  RadioContent,
  RadioContext,
  RadioControl,
  RadioGroupContext,
  RadioIndicator,
  useRadio,
  useRadioContext,
  useRadioGroup,
  useRadioGroupContext,
};

export const RadioGroup = RadioGroupRoot;

export const Radio = Object.assign(RadioRoot, {
  Group: RadioGroupRoot,
  Content: RadioContent,
  Control: RadioControl,
  Indicator: RadioIndicator,
});

export namespace Radio {
  export interface Props extends RadioRoot.Props {}
  export interface Group extends RadioGroupRoot.Props {}
  export interface Content extends RadioContent.Props {}
  export interface Control extends RadioControl.Props {}
  export interface Indicator extends RadioIndicator.Props {}
}

export namespace RadioGroup {
  export interface Props extends RadioGroupRoot.Props {}
}
