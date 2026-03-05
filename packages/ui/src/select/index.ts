import {
  Select as SelectRoot,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
} from "./select";

export const Select = Object.assign(SelectRoot, {
  Content: SelectContent,
  Indicator: SelectIndicator,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  Trigger: SelectTrigger,
  Value: SelectValue,
});

export namespace Select {
  export interface Props extends SelectRoot.Props {}
}

export {
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
};
