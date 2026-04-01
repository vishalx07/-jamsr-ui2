import { Toggle as ToggleRoot, ToggleGroupRoot } from "./toggle";

export const Toggle = Object.assign(ToggleRoot, {});
export const ToggleGroup = Object.assign(ToggleGroupRoot, {});

export namespace Toggle {
  export interface Props extends ToggleRoot.Props {}
}
