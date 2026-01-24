"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { TabsContext } from "./tabs-context";
import { useTabs } from "./use-tabs";

export const Tabs = (props: Tabs.Props) => {
  const ctx = useTabs(props);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
  });
  return <TabsContext value={ctx}>{renderElement}</TabsContext>;
};

export namespace Tabs {
  export interface Props extends useTabs.Props {}
}
