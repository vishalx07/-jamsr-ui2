"use client";

import { Switch as SwitchUI } from "@jamsrui/react";
import { createContext, useContext } from "react";
import { switchStyles } from "./styles";
import type { SwitchVariants } from "./styles";

const SwitchStyleContext = createContext<{
  styles: ReturnType<typeof switchStyles>;
} | null>(null);

const useSwitchStyleContext = () => {
  return useContext(SwitchStyleContext) || { styles: switchStyles() };
};

export const Switch = (props: Switch.Props) => {
  const { color, size, isInvalid, className, ...restProps } = props;
  const styles = switchStyles({ color, size, isInvalid });

  return (
    <SwitchStyleContext.Provider value={{ styles }}>
      <SwitchUI {...restProps} className={styles.root({ className })} />
    </SwitchStyleContext.Provider>
  );
};

export namespace Switch {
  export interface Props extends SwitchUI.Props, SwitchVariants {}
}

export const SwitchTrack = (props: SwitchUI.Track) => {
  const { styles } = useSwitchStyleContext();
  return (
    <SwitchUI.Track
      {...props}
      className={styles.track({ className: props.className })}
    />
  );
};

export const SwitchThumb = (props: SwitchUI.Thumb) => {
  const { styles } = useSwitchStyleContext();
  return (
    <SwitchUI.Thumb
      {...props}
      className={styles.thumb({ className: props.className })}
    />
  );
};

export const SwitchContent = (props: SwitchUI.Content) => {
  const { styles } = useSwitchStyleContext();
  return (
    <SwitchUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};
