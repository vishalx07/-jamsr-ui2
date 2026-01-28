"use client";

import { createContext, use, useMemo } from "react";

import { Checkbox as CheckboxUI } from "@jamsrui/react";

import { checkboxStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";


type CheckboxVariants = VariantProps<typeof checkboxStyles>;

const CheckboxContext = createContext<{
  styles: ReturnType<typeof checkboxStyles>;
} | null>(null);

const useCheckboxContext = () => {
  const ctx = use(CheckboxContext);
  if (!ctx) {
    throw new Error("useCheckboxContext must be used within a CheckboxContext");
  }
  return ctx;
};

export const Checkbox = (props: Checkbox.Props) => {
  const { size, radius, isInvalid, className, ...restProps } = props;
  const styles = checkboxStyles({ size, radius, isInvalid });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <CheckboxContext value={value}>
      <CheckboxUI {...restProps} className={styles.root({ className })} />
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends CheckboxUI.Props, CheckboxVariants {}
}

export const CheckboxControl = (props: CheckboxUI.Control) => {
  const { styles } = useCheckboxContext();
  const {
    className,
    children = <CheckboxUI.Indicator className={styles.indicator()} />,
    ...restProps
  } = props;
  return (
    <CheckboxUI.Control
      {...restProps}
      className={styles.control({ className })}
    >
      <CheckboxUI.Input className={styles.input()} />
      {children}
    </CheckboxUI.Control>
  );
};

export const CheckboxIndicator = (props: CheckboxUI.Indicator) => {
  const { styles } = useCheckboxContext();
  return (
    <CheckboxUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const CheckboxContent = (props: CheckboxUI.Content) => {
  const { styles } = useCheckboxContext();
  return (
    <CheckboxUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};
