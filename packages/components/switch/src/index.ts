import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

export const Switch = Object.assign(SwitchPrimitive.Root, {
  Thumb: SwitchPrimitive.Thumb,
});

export namespace Switch {
  export interface Props extends SwitchPrimitive.Root.Props {}
  export interface Thumb extends SwitchPrimitive.Thumb.Props {}
}
