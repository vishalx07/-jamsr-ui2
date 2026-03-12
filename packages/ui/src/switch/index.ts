import { Switch as SwitchRoot, SwitchThumb } from "./switch";

export const Switch = Object.assign(SwitchRoot, {
  Thumb: SwitchThumb,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
  export interface Thumb extends SwitchThumb.Props {}
}

export { SwitchThumb };
