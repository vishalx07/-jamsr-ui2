import { Switch as SwitchRoot } from "./switch";
import { SwitchContent } from "./switch-content";
import { SwitchContext, useSwitchContext } from "./switch-context";
import { SwitchThumb } from "./switch-thumb";
import { SwitchTrack } from "./switch-track";
import { useSwitch } from "./use-switch";

export {
  SwitchContent,
  SwitchContext,
  SwitchThumb,
  SwitchTrack,
  useSwitch,
  useSwitchContext,
};

export const Switch = Object.assign(SwitchRoot, {
  Content: SwitchContent,
  Track: SwitchTrack,
  Thumb: SwitchThumb,
});

export namespace Switch {
  export interface Props extends SwitchRoot.Props {}
  export interface Content extends SwitchContent.Props {}
  export interface Track extends SwitchTrack.Props {}
  export interface Thumb extends SwitchThumb.Props {}
}
