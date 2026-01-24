"use client";

import { ChipContext } from "./chip-context";
import { ChipRoot } from "./chip-root";
import { useChip } from "./use-chip";

export const Chip = (props: Chip.Props) => {
  const ctx = useChip(props);

  return (
    <ChipContext value={ctx}>
      <ChipRoot>{props.children}</ChipRoot>
    </ChipContext>
  );
};

export namespace Chip {
  export interface Props extends useChip.Props {}
}
