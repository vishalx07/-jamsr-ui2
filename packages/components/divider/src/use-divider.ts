"use client";
import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { dividerVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Divider } from "./divider";
import type { DividerVariants } from "./styles";

export const useDivider = (props: useDivider.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    dividerVariants.variantKeys,
  );
  const styles = dividerVariants(variantProps);
  const { ...elementProps } = $props;

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
  export interface Props extends UIProps<"div">, DividerVariants {}
}
