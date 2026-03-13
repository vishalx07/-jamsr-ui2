"use client";

import { createContext, use, useMemo } from "react";

import { Checkbox as CheckboxUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";

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
  const {
    size,
    radius,
    isInvalid,
    className,
    children = <CheckboxIndicator />,
    ...restProps
  } = props;
  const styles = checkboxStyles({ size, radius, isInvalid });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <CheckboxContext value={value}>
      <CheckboxUI
        {...restProps}
        className={styles.root({ className: cn(className) })}
      >
        {children}
      </CheckboxUI>
    </CheckboxContext>
  );
};

export namespace Checkbox {
  export interface Props extends CheckboxUI.Props, CheckboxVariants {}
}

export const CheckboxIndicator = (props: CheckboxIndicator.Props) => {
  const { styles } = useCheckboxContext();
  return (
    <CheckboxUI.Indicator
      {...props}
      className={styles.indicator({ className: cn(props.className) })}
    />
  );
};

export namespace CheckboxIndicator {
  export interface Props extends CheckboxUI.Indicator {}
}
