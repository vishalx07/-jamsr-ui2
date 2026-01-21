import { Tab } from "./tab";
import { TabIndicator } from "./tab-indicator";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { Tabs as TabsRoot } from "./tabs";
import { TabsContext, useTabsContext } from "./tabs-context";

export { Tab, TabIndicator, TabList, TabPanel, TabsContext, useTabsContext };

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panel: TabPanel,
  Indicator: TabIndicator,
});

export namespace Tabs {
  export interface Props extends TabsRoot.Props {}
  export interface List extends TabList.Props {}
  export interface Tab extends Tab.Props {}
  export interface Panel extends TabPanel.Props {}
  export interface Indicator extends TabIndicator.Props {}
}
