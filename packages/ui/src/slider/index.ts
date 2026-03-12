import {
  Slider as SliderRoot,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "./slider";

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Control: SliderControl,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Thumb: SliderThumb,
  Value: SliderValue,
});

export namespace Slider {
  export interface Props extends SliderRoot.Props {}
  export interface Control extends SliderControl.Props {}
  export interface Track extends SliderTrack.Props {}
  export interface Indicator extends SliderIndicator.Props {}
  export interface Thumb extends SliderThumb.Props {}
  export interface Value extends SliderValue.Props {}
}

export {
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
};
