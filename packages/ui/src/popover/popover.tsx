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

export const PopoverTrigger = (props: PopoverTrigger.Props) => {
  return <PopoverUI.Trigger {...props} />;
};

export const PopoverContent = (props: PopoverContent.Props) => {
  const { styles } = usePopoverContext();
  const { slotProps, ...restProps } = props;
  return (
    <PopoverUI.Portal {...slotProps?.portal}>
      <PopoverUI.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: slotProps?.backdrop?.className,
        })}
      />
      <PopoverUI.Positioner
        {...slotProps?.positioner}
        className={styles.positioner({
          className: slotProps?.positioner?.className,
        })}
      >
        <PopoverUI.Content
          {...restProps}
          className={styles.content({ className: restProps.className })}
        />
      </PopoverUI.Positioner>
    </PopoverUI.Portal>
  );
};
export namespace PopoverContent {
  export interface Props extends PopoverUI.Content {
    slotProps?: {
      portal?: React.ComponentProps<typeof PopoverUI.Portal>;
      backdrop?: React.ComponentProps<typeof PopoverUI.Backdrop>;
      positioner?: React.ComponentProps<typeof PopoverUI.Positioner>;
    };
  }
}

export const PopoverArrow = (props: PopoverArrow.Props) => {
  const { styles } = usePopoverContext();
  return (
    <PopoverUI.Arrow
      {...props}
      className={styles.arrow({ className: props.className })}
    />
  );
};

export namespace PopoverTrigger {
  export interface Props extends PopoverUI.Trigger {}
}

export namespace PopoverArrow {
  export interface Props extends PopoverUI.Arrow {}
}
