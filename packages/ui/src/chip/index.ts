import { Chip as ChipRoot, ChipDot } from "./chip";

export const Chip = Object.assign(ChipRoot, {
  Dot: ChipDot,
});

export namespace Chip {
  export interface Props extends ChipRoot.Props {}
  export interface Dot extends ChipDot.Props {}
}
