import {
  DateField as DateFieldUI,
  DateFieldSeparator as DateFieldSeparatorUI,
  DateInput as DateInputUI,
  DateSegment as DateSegmentUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { dateFieldStyles } from "./styles";

const styles = dateFieldStyles();

export const DateInput = (props: DateInputUI.Props) => {
  const { className, ...rest } = props;
  return <DateInputUI {...rest} className={cn(styles.root(), className)} />;
};

export const DateSegment = (props: DateSegmentUI.Props) => {
  const { className, ...rest } = props;
  return (
    <DateSegmentUI {...rest} className={cn(styles.segment(), className)} />
  );
};

export const DateFieldSeparator = (props: DateFieldSeparatorUI.Props) => {
  const { className, ...rest } = props;
  return (
    <DateFieldSeparatorUI
      {...rest}
      className={cn(styles.separator(), className)}
    />
  );
};

export const DateField = (props: DateField.Props) => {
  const { className, ...rest } = props;
  return <DateFieldUI {...rest} className={className} />;
};

export namespace DateField {
  export interface Props extends DateFieldUI.Props {}
}
