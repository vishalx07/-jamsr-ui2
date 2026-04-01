import { Select as SelectPrimitive } from "@base-ui/react/select";

export const Select = Object.assign(SelectPrimitive.Root, {
  Item: SelectPrimitive.Item,
  Trigger: SelectPrimitive.Trigger,
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
  Portal: SelectPrimitive.Portal,
  Positioner: SelectPrimitive.Positioner,
  ItemIndicator: SelectPrimitive.ItemIndicator,
  List: SelectPrimitive.List,
  Arrow: SelectPrimitive.Arrow,
  Group: SelectPrimitive.Group,
  GroupLabel: SelectPrimitive.GroupLabel,
  ScrollUpArrow: SelectPrimitive.ScrollUpArrow,
  ScrollDownArrow: SelectPrimitive.ScrollDownArrow,
  Separator: SelectPrimitive.Separator,
  ItemText: SelectPrimitive.ItemText,
  Label: SelectPrimitive.Label,
  Backdrop: SelectPrimitive.Backdrop,
  Popup: SelectPrimitive.Popup,
});

export namespace Select {
  export interface Props extends SelectPrimitive.Root.Props {}
  export interface Item extends SelectPrimitive.Item.Props {}
  export interface Trigger extends SelectPrimitive.Trigger.Props {}
  export interface Value extends SelectPrimitive.Value.Props {}
  export interface Icon extends SelectPrimitive.Icon.Props {}
  export interface Positioner extends SelectPrimitive.Positioner.Props {}
  export interface ItemIndicator extends SelectPrimitive.ItemIndicator.Props {}
  export interface List extends SelectPrimitive.List.Props {}
}
