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
}

export { DateFieldSeparator, DateInput, DateSegment };
