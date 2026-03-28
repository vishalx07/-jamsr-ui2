import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

export const Tabs = Object.assign(TabsPrimitive.Root, {
  List: TabsPrimitive.List,
  Tab: TabsPrimitive.Tab,
  Panel: TabsPrimitive.Panel,
  Indicator: TabsPrimitive.Indicator,
});

export namespace Tabs {
  export interface Props extends TabsPrimitive.Root.Props {}
  export interface List extends TabsPrimitive.List.Props {}
  export interface Tab extends TabsPrimitive.Tab.Props {}
  export interface Panel extends TabsPrimitive.Panel.Props {}
  export interface Indicator extends TabsPrimitive.Indicator.Props {}
}
