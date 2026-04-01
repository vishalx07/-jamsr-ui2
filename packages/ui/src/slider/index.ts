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
}
