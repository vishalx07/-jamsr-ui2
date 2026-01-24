"use client";

import { Tabs as TabsUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import type { TabsVariants } from "./styles";
import { tabsStyles } from "./styles";

const TabsContext = createContext<{
  styles: ReturnType<typeof tabsStyles>;
} | null>(null);

const useTabsContext = () => {
  const ctx = use(TabsContext);
  if (!ctx) {
    throw new Error("useTabsContext must be used within a TabsContext");
  }
  return ctx;
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

  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <TabsContext.Provider value={value}>
      <TabsUI {...restProps} className={styles.root({ className })} />
    </TabsContext.Provider>
  );
};

export namespace Tabs {
  export interface Props extends TabsUI.Props, TabsVariants {}
}

export const TabList = (props: TabsUI.List) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.List
      {...props}
      className={styles.list({ className: props.className })}
    />
  );
};

export const Tab = (props: TabsUI.Tab) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.Tab
      {...props}
      className={styles.tab({ className: props.className })}
    />
  );
};

export const TabIndicator = (props: TabsUI.Indicator) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const TabPanel = (props: TabsUI.Panel) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.Panel
      {...props}
      className={styles.panel({ className: props.className })}
    />
  );
};
