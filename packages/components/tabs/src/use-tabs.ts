"use client";
import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev } from "@jamsrui/utils";

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
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("tabs"),
      className,
      children,
    }),
    [elementProps, className, children],
  );

  const getTabListProps: PropGetter<TabList.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("tab-list"),
    }),
    [],
  );

  const getTabProps: PropGetter<Tab.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("tab"),
    }),
    [],
  );

  const getIndicatorProps: PropGetter<TabIndicator.Props> = useCallback(
    (props) => ({
      layoutId: "indicator",
      ...props,
      "data-slot": dataAttrDev("indicator"),
    }),
    [],
  );

  const getPanelProps: PropGetter<TabPanel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("tab-panel"),
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
