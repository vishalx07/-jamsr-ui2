"use client";

import { createContext, use, useMemo } from "react";

import { Tooltip as TooltipUI } from "@jamsrui/react";

import { tooltipStyles } from "./styles";

import type { TooltipVariants } from "./styles";

const TooltipStyleContext = createContext<{
  styles: ReturnType<typeof tooltipStyles>;
} | null>(null);

const useTooltipStyleContext = () => {
  const ctx = use(TooltipStyleContext);
  if (!ctx) {
    throw new Error("useTooltipStyleContext must be used within a Tooltip");
  }
  return ctx;
};

export const Tooltip = (props: Tooltip.Props) => {
  const { radius, ...restProps } = props;
  const styles = tooltipStyles({ radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <TooltipStyleContext.Provider value={value}>
      <TooltipUI {...restProps} />
    </TooltipStyleContext.Provider>
  );
};

export namespace Tooltip {
  export interface Props extends TooltipUI.Props, TooltipVariants {}
}

export const TooltipTrigger = (props: TooltipUI.Trigger) => {
  return <TooltipUI.Trigger {...props} />;
};

export const TooltipContent = (props: TooltipUI.Content) => {
  const { styles } = useTooltipStyleContext();
  return (
    <TooltipUI.Portal>
      <TooltipUI.Positioner className={styles.positioner()}>
        <TooltipUI.Content
          {...props}
          className={styles.content({ className: props.className })}
        />
      </TooltipUI.Positioner>
    </TooltipUI.Portal>
  );
};

export const TooltipArrow = (props: TooltipUI.Arrow) => {
  const { styles } = useTooltipStyleContext();
  return (
    <TooltipUI.Arrow
      {...props}
      className={styles.arrow({ className: props.className })}
    />
  );
};
