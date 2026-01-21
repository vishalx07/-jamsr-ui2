"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Divider } from "./divider";

export const useDivider = (props: useDivider.Props) => {
  const { ...elementProps } = props;

  const getRootProps: PropGetter<Divider.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-component": dataAttrDev("divider"),
      "data-slot": "root",
    }),
    [elementProps],
  );

  const getDividerProps: PropGetter<Divider.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "divider",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getDividerProps,
    }),
    [getRootProps, getDividerProps],
  );
};
export namespace useDivider {
  export interface Props extends UIProps<"div"> {}
}
