"use client";

import { createContext, use } from "react";

import { Switch as SwitchUI } from "@jamsrui/react";

import { switchStyles } from "./styles";

import type { SwitchVariants } from "./styles";

const SwitchContext = createContext<{
  styles: ReturnType<typeof switchStyles>;
} | null>(null);

const useSwitchContext = () => {
  const ctx = use(SwitchContext);
  if (!ctx) {
    throw new Error("useSwitchContext must be used within a SwitchContext");
  }
  return ctx;
};

export const Switch = (props: Switch.Props) => {
  const {
    color,
    size,
    isInvalid,
    className,
    children = <SwitchThumb />,
    ...restProps
  } = props;
  const styles = switchStyles({ color, size, isInvalid });
  return (
    <SwitchContext value={{ styles }}>
      <SwitchUI {...restProps} className={styles.root({ className })}>
        <SwitchUI.Input className={styles.input()} />
        {children}
      </SwitchUI>
    </SwitchContext>
  );
};

export namespace Switch {
  export interface Props extends SwitchUI.Props, SwitchVariants {}
}

export const SwitchThumb = (props: SwitchThumb.Props) => {
  const { styles } = useSwitchContext();
  return (
    <SwitchUI.Thumb
      {...props}
      className={styles.thumb({ className: props.className })}
    />
  );
};

export namespace SwitchThumb {
  export interface Props extends SwitchUI.Thumb {}
}
