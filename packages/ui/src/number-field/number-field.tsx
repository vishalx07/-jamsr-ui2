"use client";

import { NumberField as NumberFieldUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { numberFieldStyles } from "./styles";

const NumberFieldContext = createContext<{
  styles: ReturnType<typeof numberFieldStyles>;
} | null>(null);

const useNumberFieldContext = () => {
  const ctx = use(NumberFieldContext);
  if (!ctx) {
    throw new Error("useNumberFieldContext must be used within a NumberField");
  }
  return ctx;
};

export const NumberField = (props: NumberField.Props) => {
  const { className, ...rest } = props;
  const styles = numberFieldStyles();
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <NumberFieldContext value={value}>
      <NumberFieldUI {...rest} className={className} />
    </NumberFieldContext>
  );
};

export namespace NumberField {
  export interface Props extends NumberFieldUI.Props {}
}

export const NumberFieldGroup = (props: NumberFieldUI.Group) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Group {...rest} className={styles.root({ className })} />
  );
};

export const NumberFieldInput = (props: NumberFieldUI.Input) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Input {...rest} className={styles.input({ className })} />
  );
};

export const NumberFieldIncrement = (props: NumberFieldUI.Increment) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Increment
      {...rest}
      className={styles.button({ className })}
    />
  );
};

export const NumberFieldDecrement = (props: NumberFieldUI.Decrement) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Decrement
      {...rest}
      className={styles.button({ className })}
    />
  );
};
