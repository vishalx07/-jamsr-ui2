"use client";

import { createContext, use, useMemo } from "react";

import { Tabs as TabsUI } from "@jamsrui/react";

import { tabsStyles } from "./styles";

import type { TabsVariants } from "./styles";

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

export const TabList = (props: TabList.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.List
      {...props}
      className={styles.list({ className: props.className })}
    />
  );
};

export const Tab = (props: Tabs.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.Tab
      {...props}
      className={styles.tab({ className: props.className })}
    />
  );
};
export namespace Tabs {
  export interface Props extends TabsUI.Props, TabsVariants {}
}

export const TabIndicator = (props: TabIndicator.Props) => {
  const { styles } = useTabsContext();
  console.log(styles.indicator());
  return (
    <TabsUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const TabPanel = (props: TabPanel.Props) => {
  const { styles } = useTabsContext();
  return (
    <TabsUI.Panel
      {...props}
      className={styles.panel({ className: props.className })}
    />
  );
};

export namespace TabList {
  export interface Props extends TabsUI.List {}
}

export namespace TabIndicator {
  export interface Props extends TabsUI.Indicator {}
}

export namespace TabPanel {
  export interface Props extends TabsUI.Panel {}
}
