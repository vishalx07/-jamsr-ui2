"use client";
import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";


import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Tab } from "./tab";
import type { TabIndicator } from "./tab-indicator";
import type { TabList } from "./tab-list";
import type { TabPanel } from "./tab-panel";
import type { Tabs } from "./tabs";

export const useTabs = (props: useTabs.Props) => {
  const {
    defaultValue,
    value: propValue,
    onValueChange,
    children,
    className,
    ...elementProps
  } = props;

  const [value, setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: propValue,
  });

  const getRootProps: PropGetter<Tabs.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": "root",
      "data-component": "tabs",
      className,
      children,
    }),
    [elementProps, className, children],
  );

  const getTabListProps: PropGetter<TabList.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "tab-list",
    }),
    [],
  );

  const getTabProps: PropGetter<Tab.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "tab",
    }),
    [],
  );

  const getIndicatorProps: PropGetter<TabIndicator.Props> = useCallback(
    (props) => ({
      layoutId: "indicator",
      ...props,
      "data-slot": "indicator",
    }),
    [],
  );

  const getPanelProps: PropGetter<TabPanel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "tab-panel",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getTabListProps,
      getTabProps,
      getIndicatorProps,
      value,
      setValue,
      getPanelProps,
    }),
    [
      getIndicatorProps,
      getPanelProps,
      getRootProps,
      getTabListProps,
      getTabProps,
      setValue,
      value,
    ],
  );
};

export namespace useTabs {
  export interface Props extends UIProps<"div"> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
  }
}
