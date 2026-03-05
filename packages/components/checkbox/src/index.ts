import { Checkbox as CheckboxRoot } from "./checkbox";
import { CheckboxIndicator } from "./checkbox-indicator";
import { CheckboxInput } from "./checkbox-input";
import { useCheckbox } from "./use-checkbox";

export { useCheckbox };

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Input: CheckboxInput,
});

export namespace Checkbox {
  export interface Props extends CheckboxRoot.Props {}
  export interface Indicator extends CheckboxIndicator.Props {}
  export interface Input extends CheckboxInput.Props {}
}
