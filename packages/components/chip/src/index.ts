import { Chip as ChipRoot } from "./chip";
import { ChipDot } from "./chip-dot";

export const Chip = Object.assign(ChipRoot, {
  Root: ChipRoot,
  Dot: ChipDot,
});

export namespace Chip {
  export interface Props extends ChipRoot.Props {}
  export interface Dot extends ChipDot.Props {}
}
