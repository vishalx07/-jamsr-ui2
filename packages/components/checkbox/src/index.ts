import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { CheckboxIndicator } from "./checkbox-indicator";

export const Checkbox = Object.assign(CheckboxPrimitive.Root, {
  Indicator: CheckboxIndicator,
});

export namespace Checkbox {
  export interface Props extends CheckboxPrimitive.Root.Props {}
  export interface Indicator extends CheckboxIndicator.Props {}
}
