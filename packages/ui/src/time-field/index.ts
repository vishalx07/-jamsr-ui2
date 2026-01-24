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
}

export { TimeFieldSeparator, TimeInput, TimeSegment };
