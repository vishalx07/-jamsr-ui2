import {
  TimeField as TimeFieldUI,
  TimeFieldSeparator as TimeFieldSeparatorUI,
  TimeInput as TimeInputUI,
  TimeSegment as TimeSegmentUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { timeFieldStyles } from "./styles";

const styles = timeFieldStyles();

export const TimeInput = (props: TimeInputUI.Props) => {
  const { className, ...rest } = props;
  return <TimeInputUI {...rest} className={cn(styles.root(), className)} />;
};

export const TimeSegment = (props: TimeSegmentUI.Props) => {
  const { className, ...rest } = props;
  return (
    <TimeSegmentUI {...rest} className={cn(styles.segment(), className)} />
  );
};

export const TimeFieldSeparator = (props: TimeFieldSeparatorUI.Props) => {
  const { className, ...rest } = props;
  return (
    <TimeFieldSeparatorUI
      {...rest}
      className={cn(styles.separator(), className)}
    />
  );
};

export const TimeField = (props: TimeField.Props) => {
  const { className, ...rest } = props;
  return <TimeFieldUI {...rest} className={className} />;
};

export namespace TimeField {
  export interface Props extends TimeFieldUI.Props {}
}
