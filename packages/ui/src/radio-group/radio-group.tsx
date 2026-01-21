"use client";

import { Radio as RadioUI, RadioGroup as RadioGroupUI } from "@jamsrui/react";
import { createContext, useContext } from "react";
import { radioStyles, radioGroupStyles } from "./styles";
import type { RadioVariants, RadioGroupVariants } from "./styles";

// Radio Style Context
const RadioStyleContext = createContext<{
  styles: ReturnType<typeof radioStyles>;
} | null>(null);

const useRadioStyleContext = () => {
  return useContext(RadioStyleContext) || { styles: radioStyles() };
};

// RadioGroup Style Context
const RadioGroupStyleContext = createContext<{
  styles: ReturnType<typeof radioGroupStyles>;
  radioStyles: ReturnType<typeof radioStyles>;
} | null>(null);

const useRadioGroupStyleContext = () => {
  return (
    useContext(RadioGroupStyleContext) || {
      styles: radioGroupStyles(),
      radioStyles: radioStyles(),
    }
  );
};

// RadioGroup
export const RadioGroup = (props: RadioGroup.Props) => {
  const { color, size, className, ...restProps } = props;
  const styles = radioGroupStyles({});
  const radStyles = radioStyles({ color, size });

  return (
    <RadioGroupStyleContext.Provider value={{ styles, radioStyles: radStyles }}>
      <RadioGroupUI {...restProps} className={styles.root({ className })} />
    </RadioGroupStyleContext.Provider>
  );
};

export namespace RadioGroup {
  export interface Props
    extends RadioGroupUI.Props, RadioVariants, RadioGroupVariants {}
}

// Radio
export const Radio = (props: Radio.Props) => {
  const { color, size, className, ...restProps } = props;
  const { radioStyles: groupRadioStyles } = useRadioGroupStyleContext();
  // Use group styles if no individual styles provided
  const styles = radioStyles({
    color: color ?? undefined,
    size: size ?? undefined,
  });
  // Merge with group styles (group provides defaults)
  const finalStyles = color || size ? styles : groupRadioStyles;

  return (
    <RadioStyleContext.Provider value={{ styles: finalStyles }}>
      <RadioUI {...restProps} className={finalStyles.root({ className })} />
    </RadioStyleContext.Provider>
  );
};

export namespace Radio {
  export interface Props extends RadioUI.Props, RadioVariants {}
}

// RadioControl
export const RadioControl = (props: RadioUI.Control) => {
  const { styles } = useRadioStyleContext();
  return (
    <RadioUI.Control
      {...props}
      className={styles.control({ className: props.className })}
    />
  );
};

// RadioIndicator
export const RadioIndicator = (props: RadioUI.Indicator) => {
  const { styles } = useRadioStyleContext();
  return (
    <RadioUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

// RadioContent
export const RadioContent = (props: RadioUI.Content) => {
  const { styles } = useRadioStyleContext();
  return (
    <RadioUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};
