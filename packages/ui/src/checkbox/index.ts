import {
  Checkbox as CheckboxRoot,
  CheckboxContent,
  CheckboxControl,
  CheckboxIndicator,
} from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Content: CheckboxContent,
});

export namespace Checkbox {
  export interface Props extends CheckboxRoot.Props {}
}

export { CheckboxContent, CheckboxControl, CheckboxIndicator };
