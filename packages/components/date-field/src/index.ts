import { DateField as DateFieldRoot } from "./date-field";
import { DateFieldSeparator } from "./date-field-separator";
import { DateInput } from "./date-input";
import { DateSegment } from "./date-segment";
import { useDateField } from "./use-date-field";
import { useDateSegment } from "./use-date-segment";

export { useDateField, useDateSegment };

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
