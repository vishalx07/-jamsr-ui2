import {
  Switch as SwitchRoot,
  SwitchContent,
  SwitchThumb,
  SwitchTrack,
} from "./switch";

export const Switch = Object.assign(SwitchRoot, {
  Content: SwitchContent,
  Track: SwitchTrack,
  Thumb: SwitchThumb,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
}

export { SwitchContent, SwitchThumb, SwitchTrack };
