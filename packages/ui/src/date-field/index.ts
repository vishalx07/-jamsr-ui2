import {
  DateField as DateFieldRoot,
  DateFieldSeparator,
  DateInput,
  DateSegment,
} from "./date-field";

export const DateField = Object.assign(DateFieldRoot, {
  Input: DateInput,
  Segment: DateSegment,
  Separator: DateFieldSeparator,
});

export namespace DateField {
  export interface Props extends DateFieldRoot.Props {}
  export interface Input extends DateInput.Props {}
  export interface Segment extends DateSegment.Props {}
  export interface Separator extends DateFieldSeparator.Props {}
}

export { DateFieldSeparator, DateInput, DateSegment };
