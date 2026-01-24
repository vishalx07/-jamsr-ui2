"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { SelectContext } from "./select-context";
import { useSelect } from "./use-select";

export const Select = (props: Select.Props) => {
  const ctx = useSelect(props);
  const { getRootProps } = ctx;
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return <SelectContext value={ctx}>{renderElement}</SelectContext>;
};

export namespace Select {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Value = any;
  export interface Props extends useSelect.Props {}
}
