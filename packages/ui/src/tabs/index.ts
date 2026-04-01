import { Tab, TabIndicator, TabList, TabPanel, Tabs as TabsRoot } from "./tabs";

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Indicator: TabIndicator,
  Panel: TabPanel,
});
