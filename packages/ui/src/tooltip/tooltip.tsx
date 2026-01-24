"use client";

import { Tooltip as TooltipUI } from "@jamsrui/react";
import { createContext, useContext, useMemo } from "react";
import type { TooltipVariants } from "./styles";
import { tooltipStyles } from "./styles";

const TooltipStyleContext = createContext<{
  styles: ReturnType<typeof tooltipStyles>;
} | null>(null);

const useTooltipStyleContext = () => {
  return useContext(TooltipStyleContext) || { styles: tooltipStyles() };
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
      <TooltipUI.Content
        {...props}
        className={styles.content({ className: props.className })}
      />
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
