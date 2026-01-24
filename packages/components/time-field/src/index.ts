import { TimeField as TimeFieldRoot } from "./time-field";
import { TimeFieldSeparator } from "./time-field-separator";
import { TimeInput } from "./time-input";
import { TimeSegment } from "./time-segment";
import { useTimeField } from "./use-time-field";
import { useTimeSegment } from "./use-time-segment";

export { useTimeField, useTimeSegment };

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
