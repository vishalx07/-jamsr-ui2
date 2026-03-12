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
  export interface Content extends SelectContent.Props {}
  export interface Indicator extends SelectIndicator.Props {}
  export interface Item extends SelectItem.Props {}
  export interface ItemIndicator extends SelectItemIndicator.Props {}
  export interface Trigger extends SelectTrigger.Props {}
  export interface Value extends SelectValue.Props {}
}

export {
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
};
