import {
  Radio as RadioRoot,
  RadioGroup as RadioGroupRoot,
  RadioIndicator,
} from "./radio-group";

export const Radio = Object.assign(RadioRoot, {
  Indicator: RadioIndicator,
});

export namespace Radio {
  export interface Props extends RadioRoot.Props {}
}

export const RadioGroup = RadioGroupRoot;

export namespace RadioGroup {
  export interface Props extends RadioGroupRoot.Props {}
}
