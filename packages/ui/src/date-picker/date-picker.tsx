import { DatePicker as DatePickerUI } from "@jamsrui/react";
import { datePickerStyles } from "./styles";

export const DatePicker = (props: DatePicker.Props) => {
  const { className, ...rest } = props;
  const styles = datePickerStyles();
  return <DatePickerUI {...rest} className={styles.root({ className })} />;
};

export namespace DatePicker {
  export interface Props extends DatePickerUI.Props {}
}
