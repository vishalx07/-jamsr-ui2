import { TimeField as TimeFieldUI } from "@jamsrui/react";

import { timeFieldStyles } from "./styles";

const styles = timeFieldStyles();

export const TimeInput = (props: TimeInput.Props) => {
  const { className, ...rest } = props;
  return <TimeFieldUI.Input {...rest} className={styles.root({ className })} />;
};

export const TimeSegment = (props: TimeSegment.Props) => {
  const { className, ...rest } = props;
  return (
    <TimeFieldUI.Segment {...rest} className={styles.segment({ className })} />
  );
};

export const TimeFieldSeparator = (props: TimeFieldSeparator.Props) => {
  const { className, ...rest } = props;
  return (
    <TimeFieldUI.Separator
      {...rest}
      className={styles.separator({ className })}
    />
  );
};

export const TimeField = (props: TimeField.Props) => {
  const { ...rest } = props;
  return <TimeFieldUI {...rest} />;
};

export namespace TimeField {
  export interface Props extends TimeFieldUI.Props {}
}

export namespace TimeInput {
  export interface Props extends TimeFieldUI.Input {}
}

export namespace TimeSegment {
  export interface Props extends TimeFieldUI.Segment {}
}

export namespace TimeFieldSeparator {
  export interface Props extends TimeFieldUI.Separator {}
}
