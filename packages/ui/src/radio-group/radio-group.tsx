"use client";

import { RadioGroup as RadioGroupUI, Radio as RadioUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import type { RadioGroupVariants, RadioVariants } from "./styles";
import { radioGroupStyles, radioStyles } from "./styles";

const RadioStyleContext = createContext<{
  styles: ReturnType<typeof radioStyles>;
} | null>(null);

const useRadioStyleContext = () => {
  const ctx = use(RadioStyleContext);
  if (!ctx) {
    throw new Error("useRadioContext must be used within a Radio");
  }
  return ctx;
};

const RadioGroupContext = createContext<RadioVariants | null>(null);

const useRadioGroupContext = () => {
  const ctx = use(RadioGroupContext);
  if (!ctx) {
    throw new Error("useRadioContext must be used within a Radio");
  }
  return ctx;
};

export const RadioGroup = (props: RadioGroup.Props) => {
  const { color, size, className, ...restProps } = props;
  const styles = radioGroupStyles({});
  const value: RadioVariants = useMemo(() => ({ color, size }), [color, size]);
  return (
    <RadioGroupContext value={value}>
      <RadioGroupUI {...restProps} className={styles.root({ className })} />
    </RadioGroupContext>
  );
};

export namespace RadioGroup {
  export interface Props
    extends RadioGroupUI.Props, RadioVariants, RadioGroupVariants {}
}

export const Radio = (props: Radio.Props) => {
  const group = useRadioGroupContext();
  const {
    color = group.color,
    size = group.size,
    className,
    ...restProps
  } = props;
  const styles = radioStyles({
    color,
    size,
  });

  const value = useMemo(
    () => ({
      styles,
    }),
    [styles],
  );
  return (
    <RadioStyleContext.Provider value={value}>
      <RadioUI {...restProps} className={styles.root({ className })} />
    </RadioStyleContext.Provider>
  );
};

export namespace Radio {
  export interface Props extends RadioUI.Props, RadioVariants {}
}

export const RadioControl = (props: RadioUI.Control) => {
  const { styles } = useRadioStyleContext();
  const { children = <RadioIndicator />, className, ...restProps } = props;
  return (
    <RadioUI.Control
      {...restProps}
      className={styles.control({ className: props.className })}
    >
      <RadioUI.Input className={styles.input()} />
      {children}
    </RadioUI.Control>
  );
};

export const RadioIndicator = (props: RadioUI.Indicator) => {
  const { styles } = useRadioStyleContext();
  return (
    <RadioUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const RadioContent = (props: RadioUI.Content) => {
  const { styles } = useRadioStyleContext();
  return (
    <RadioUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};
