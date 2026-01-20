"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { Chip } from "./chip";
import type { ChipDot } from "./chip-dot";
import type { ChipRoot } from "./chip-root";

export const useChip = (props: useChip.Props) => {
  const { className, ...elementProps } = props;

  const getRootProps: PropGetter<Chip.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("chip"),
      ...elementProps,
      className,
    }),
    [elementProps, className],
  );

  const getDotProps: PropGetter<ChipDot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("dot"),
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getDotProps,
    }),
    [getDotProps, getRootProps],
  );
};
export namespace useChip {
  export interface Props extends ChipRoot.Props {}
}
