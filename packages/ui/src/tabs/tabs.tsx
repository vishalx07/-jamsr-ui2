"use client";

import { Tabs as TabsUI } from "@jamsrui/react";
import { createContext, useContext } from "react";
import { tabsStyles } from "./styles";
import type { TabsVariants } from "./styles";

const TabsStyleContext = createContext<{
  styles: ReturnType<typeof tabsStyles>;
} | null>(null);

const useTabsStyleContext = () => {
  return useContext(TabsStyleContext) || { styles: tabsStyles() };
};

export const Tabs = (props: Tabs.Props) => {
  const {
    variant,
    color,
    size,
    radius,
    fullWidth,
    disableAnimation,
    className,
    ...restProps
  } = props;
  const styles = tabsStyles({
    variant,
    color,
    size,
    radius,
    fullWidth,
    disableAnimation,
  });

  return (
    <TabsStyleContext.Provider value={{ styles }}>
      <TabsUI {...restProps} className={styles.root({ className })} />
    </TabsStyleContext.Provider>
  );
};

export namespace Tabs {
  export interface Props extends TabsUI.Props, TabsVariants {}
}

export const TabList = (props: TabsUI.List) => {
  const { styles } = useTabsStyleContext();
  return (
    <TabsUI.List
      {...props}
      className={styles.list({ className: props.className })}
    />
  );
};

export const Tab = (props: TabsUI.Tab) => {
  const { styles } = useTabsStyleContext();
  return (
    <TabsUI.Tab
      {...props}
      className={styles.tab({ className: props.className })}
    />
  );
};

export const TabIndicator = (props: TabsUI.Indicator) => {
  const { styles } = useTabsStyleContext();
  return (
    <TabsUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const TabPanel = (props: TabsUI.Panel) => {
  const { styles } = useTabsStyleContext();
  return (
    <TabsUI.Panel
      {...props}
      className={styles.panel({ className: props.className })}
    />
  );
};
