import { Switch as SwitchRoot } from "./switch";
import { SwitchInput } from "./switch-input";
import { SwitchThumb } from "./switch-thumb";

export const Switch = Object.assign(SwitchRoot, {
  Thumb: SwitchThumb,
  Input: SwitchInput,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
  export interface Thumb extends SwitchThumb.Props {}
  export interface Input extends SwitchInput.Props {}
}
