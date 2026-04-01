import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from "./meter";

export const Meter = Object.assign(MeterRoot, {
  Label: MeterLabel,
  Value: MeterValue,
  Track: MeterTrack,
  Indicator: MeterIndicator,
});
