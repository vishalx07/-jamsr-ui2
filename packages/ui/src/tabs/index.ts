import { Tab, TabIndicator, TabList, TabPanel, Tabs as TabsRoot } from "./tabs";

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Indicator: TabIndicator,
  Panel: TabPanel,
});

export namespace Tabs {
  export interface Props extends TabsRoot.Props {}
  export interface List extends TabList.Props {}
  export interface Indicator extends TabIndicator.Props {}
  export interface Panel extends TabPanel.Props {}
}

export { Tab, TabIndicator, TabList, TabPanel };
