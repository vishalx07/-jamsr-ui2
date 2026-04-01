import {
  TimeField as TimeFieldRoot,
  TimeFieldSeparator,
  TimeInput,
  TimeSegment,
} from "./time-field";

export const TimeField = Object.assign(TimeFieldRoot, {
  Input: TimeInput,
  Segment: TimeSegment,
  Separator: TimeFieldSeparator,
});

export namespace TimeField {
  export interface Props extends TimeFieldRoot.Props {}
  export interface Input extends TimeInput.Props {}
  export interface Segment extends TimeSegment.Props {}
  export interface Separator extends TimeFieldSeparator.Props {}
}

export { TimeFieldSeparator, TimeInput, TimeSegment };
