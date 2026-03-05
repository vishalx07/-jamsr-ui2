import {
  Switch as SwitchRoot,
  SwitchContent,
  SwitchControl,
  SwitchThumb,
} from "./switch";

export const Switch = Object.assign(SwitchRoot, {
  Content: SwitchContent,
  Control: SwitchControl,
  Thumb: SwitchThumb,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
}

export { SwitchContent, SwitchControl, SwitchThumb };
