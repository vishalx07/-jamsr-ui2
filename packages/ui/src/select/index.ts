import {
  Select as SelectRoot,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
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
  export interface Props extends SelectRoot.Props {}
  export interface Content extends SelectContent.Props {}
  // export interface Indicator extends SelectIcon.Props {}
  // export interface Item extends SelectItem.Props {}
  // export interface ItemIndicator extends SelectItemIndicator.Props {}
  // export interface Trigger extends SelectTrigger.Props {}
  // export interface Value extends SelectValue.Props {}
}
