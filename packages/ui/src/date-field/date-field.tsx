import { DateField as DateFieldUI } from "@jamsrui/react";
import { dateFieldStyles } from "./styles";

const styles = dateFieldStyles();

export const DateInput = (props: DateFieldUI.Input) => {
  const { className, ...rest } = props;
  return <DateFieldUI.Input {...rest} className={styles.root({ className })} />;
};

export const DateSegment = (props: DateFieldUI.Segment) => {
  const { className, ...rest } = props;
  return (
    <DateFieldUI.Segment {...rest} className={styles.segment({ className })} />
  );
};

export const DateFieldSeparator = (props: DateFieldUI.Separator) => {
  const { className, ...rest } = props;
  return (
    <DateFieldUI.Separator
      {...rest}
      className={styles.separator({ className })}
    />
  );
};

export const DateField = (props: DateField.Props) => {
  const { ...rest } = props;
  return <DateFieldUI {...rest} />;
};

export namespace DateField {
  export interface Props extends DateFieldUI.Props {}
}
