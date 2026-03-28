import { Checkbox as CheckboxRoot, CheckboxIndicator } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export interface Props extends CheckboxRoot.Props {}
  export interface Indicator extends CheckboxIndicator.Props {}
}
