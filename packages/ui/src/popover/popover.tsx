"use client";

import { createContext, use } from "react";

import { Popover as PopoverUI } from "@jamsrui/react";

import { popoverStyles } from "./styles";

import type { PopoverVariants } from "./styles";


const PopoverStylesContext = createContext<{
  styles: ReturnType<typeof popoverStyles>;
  backdrop?: PopoverVariants["backdrop"];
} | null>(null);

const usePopoverContext = () => {
  const ctx = use(PopoverStylesContext);
  if (!ctx) {
    throw new Error("usePopoverContext must be used within a Popover");
  }
  return ctx;
};

export const Popover = (props: Popover.Props) => {
  const { radius, backdrop, ...restProps } = props;
  const styles = popoverStyles({ radius, backdrop });
  return (
    <PopoverStylesContext.Provider value={{ styles, backdrop }}>
      <PopoverUI {...restProps} />
    </PopoverStylesContext.Provider>
  );
};

export namespace Popover {
  export interface Props extends PopoverUI.Props, PopoverVariants {}
}

export const PopoverTrigger = (props: PopoverUI.Trigger) => {
  return <PopoverUI.Trigger {...props} />;
};

export const PopoverContent = (props: PopoverUI.Content) => {
  const { styles } = usePopoverContext();
  return (
    <PopoverUI.Portal>
      <PopoverUI.Backdrop className={styles.backdrop()} />
      <PopoverUI.Container className={styles.container()}>
        <PopoverUI.Content
          {...props}
          className={styles.content({ className: props.className })}
        />
      </PopoverUI.Container>
    </PopoverUI.Portal>
  );
};

export const PopoverArrow = (props: PopoverUI.Arrow) => {
  const { styles } = usePopoverContext();
  return (
    <PopoverUI.Arrow
      {...props}
      className={styles.arrow({ className: props.className })}
    />
  );
};
