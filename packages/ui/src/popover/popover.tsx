"use client";

import { Popover as PopoverUI, usePopoverContext } from "@jamsrui/react";
import { createContext, useContext } from "react";
import { popoverStyles } from "./styles";
import type { PopoverVariants } from "./styles";

const PopoverStyleContext = createContext<{
  styles: ReturnType<typeof popoverStyles>;
  backdrop?: PopoverVariants["backdrop"];
} | null>(null);

const usePopoverStyleContext = () => {
  return useContext(PopoverStyleContext) || { styles: popoverStyles() };
};

export const Popover = (props: Popover.Props) => {
  const { radius, backdrop, className, ...restProps } = props;
  const styles = popoverStyles({ radius, backdrop });

  return (
    <PopoverStyleContext.Provider value={{ styles, backdrop }}>
      <PopoverUI {...restProps} overlayClassName={styles.backdrop()} />
    </PopoverStyleContext.Provider>
  );
};

export namespace Popover {
  export interface Props extends PopoverUI.Props, PopoverVariants {}
}

export const PopoverTrigger = (props: PopoverUI.Trigger) => {
  const { backdrop: backdropVariant } = usePopoverStyleContext();
  const { isOpen, isAnimating } = usePopoverContext();

  const zIndexClass =
    backdropVariant === "blur" && (isOpen || isAnimating) ? "z-popover" : "";

  return <PopoverUI.Trigger {...props} className={zIndexClass} />;
};

export const PopoverContentRoot = (props: PopoverUI.ContentRoot) => {
  const { styles } = usePopoverStyleContext();
  return (
    <PopoverUI.ContentRoot
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};

export const PopoverDialog = (props: PopoverUI.Dialog) => {
  const { styles } = usePopoverStyleContext();
  return (
    <PopoverUI.Dialog
      {...props}
      className={styles.dialog({ className: props.className })}
    />
  );
};

export const PopoverContent = (props: PopoverUI.Dialog) => {
  return (
    <PopoverContentRoot>
      <PopoverDialog {...props} />
    </PopoverContentRoot>
  );
};

export const PopoverArrow = (props: PopoverUI.Arrow) => {
  const { styles } = usePopoverStyleContext();
  return (
    <PopoverUI.Arrow
      {...props}
      className={styles.arrow({ className: props.className })}
    />
  );
};
