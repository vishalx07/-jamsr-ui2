"use client";

import { createContext, use, useMemo } from "react";

import { NumberField as NumberFieldUI } from "@jamsrui/react";

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
  const { className, isInvalid, ...rest } = props;
  const styles = numberFieldStyles({ isInvalid });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <NumberFieldContext value={value}>
      <NumberFieldUI {...rest} className={styles.root({ className })} />
    </NumberFieldContext>
  );
};

export namespace NumberField {
  export interface Props extends NumberFieldUI.Props {}
}

export const NumberFieldGroup = (props: NumberFieldGroup.Props) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Group {...rest} className={styles.group({ className })} />
  );
};

export const NumberFieldInput = (props: NumberFieldInput.Props) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Input {...rest} className={styles.input({ className })} />
  );
};

export const NumberFieldIncrement = (props: NumberFieldIncrement.Props) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Increment
      {...rest}
      className={styles.increment({ className })}
    />
  );
};

export const NumberFieldDecrement = (props: NumberFieldDecrement.Props) => {
  const { styles } = useNumberFieldContext();
  const { className, ...rest } = props;
  return (
    <NumberFieldUI.Decrement
      {...rest}
      className={styles.decrement({ className })}
    />
  );
};

export namespace NumberFieldGroup {
  export interface Props extends NumberFieldUI.Group {}
}

export namespace NumberFieldInput {
  export interface Props extends NumberFieldUI.Input {}
}

export namespace NumberFieldIncrement {
  export interface Props extends NumberFieldUI.Increment {}
}

export namespace NumberFieldDecrement {
  export interface Props extends NumberFieldUI.Decrement {}
}
