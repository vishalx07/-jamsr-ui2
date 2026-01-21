import {
  NumberField as NumberFieldUI,
  NumberFieldDecrement as NumberFieldDecrementUI,
  NumberFieldGroup as NumberFieldGroupUI,
  NumberFieldIncrement as NumberFieldIncrementUI,
  NumberFieldInput as NumberFieldInputUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { numberFieldStyles } from "./styles";

const styles = numberFieldStyles();

export const NumberFieldGroup = (props: NumberFieldGroupUI.Props) => {
  const { className, ...rest } = props;
  return (
    <NumberFieldGroupUI {...rest} className={cn(styles.root(), className)} />
  );
};

export const NumberFieldInput = (props: NumberFieldInputUI.Props) => {
  const { className, ...rest } = props;
  return (
    <NumberFieldInputUI {...rest} className={cn(styles.input(), className)} />
  );
};

export const NumberFieldIncrement = (props: NumberFieldIncrementUI.Props) => {
  const { className, ...rest } = props;
  return (
    <NumberFieldIncrementUI
      {...rest}
      className={cn(styles.button(), className)}
    />
  );
};

export const NumberFieldDecrement = (props: NumberFieldDecrementUI.Props) => {
  const { className, ...rest } = props;
  return (
    <NumberFieldDecrementUI
      {...rest}
      className={cn(styles.button(), className)}
    />
  );
};

export const NumberField = (props: NumberField.Props) => {
  const { className, ...rest } = props;
  return <NumberFieldUI {...rest} className={className} />;
};

export namespace NumberField {
  export interface Props extends NumberFieldUI.Props {}
}
