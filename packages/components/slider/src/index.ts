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
  export interface ControlProps extends SliderControl.Props {}
  export interface TrackProps extends SliderTrack.Props {}
  export interface IndicatorProps extends SliderIndicator.Props {}
  export interface ThumbProps extends SliderThumb.Props {}
  export interface ValueProps extends SliderValue.Props {}
}
