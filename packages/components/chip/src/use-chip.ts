"use client";
import { useCallback, useMemo } from "react";

import type { PropGetter } from "@jamsrui/utils";

import type { Chip } from "./chip";
import type { ChipDot } from "./chip-dot";
import type { ChipRoot } from "./chip-root";

export const useChip = (props: useChip.Props) => {
  const { className, ...elementProps } = props;

  const getRootProps: PropGetter<Chip.Props> = useCallback(
    () => ({
      "data-slot": "root",
      "data-component": "chip",
      ...elementProps,
      className,
    }),
    [elementProps, className],
  );

  const getDotProps: PropGetter<ChipDot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "dot",
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
