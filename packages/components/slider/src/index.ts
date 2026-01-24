import { Slider as SliderRoot } from "./slider";
import { useSliderContext } from "./slider-context";
import { SliderControl } from "./slider-control";
import { SliderIndicator } from "./slider-indicator";
import { SliderThumb } from "./slider-thumb";
import { SliderTrack } from "./slider-track";
import { SliderValue } from "./slider-value";

export { useSliderContext };

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
