import { Tabs as TabsRoot, Tab, TabIndicator, TabList, TabPanel } from "./tabs";

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Indicator: TabIndicator,
  Panel: TabPanel,
});

export namespace Tabs {
  export interface Props extends TabsRoot.Props {}
}

export { Tab, TabIndicator, TabList, TabPanel };
