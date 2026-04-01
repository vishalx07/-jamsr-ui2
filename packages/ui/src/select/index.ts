import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./select";

export const Select = Object.assign(SelectRoot, {
  Content: SelectContent,
  Icon: SelectIcon,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  Trigger: SelectTrigger,
  Value: SelectValue,
  ItemText: SelectItemText,
});

export namespace Select {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = SelectRoot.Props<Value, Multiple>;
}
