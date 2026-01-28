"use client";

import { createContext, use, useMemo } from "react";

import { LinearProgress as LinearProgressUI } from "@jamsrui/react";

import { linearProgressStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";


type LinearProgressVariants = VariantProps<typeof linearProgressStyles>;

const LinearProgressContext = createContext<{
  styles: ReturnType<typeof linearProgressStyles>;
} | null>(null);

const useLinearProgressContext = () => {
  const ctx = use(LinearProgressContext);
  if (!ctx) {
    throw new Error(
      "useLinearProgressContext must be used within a LinearProgress",
    );
  }
  return ctx;
};

export const LinearProgress = (props: LinearProgress.Props) => {
  const {
    color,
    size,
    isIntermediate = true,
    className,
    children = <LinearProgressBar />,
    ...restProps
  } = props;
  const styles = linearProgressStyles({ color, size, isIntermediate });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <LinearProgressContext value={value}>
      <LinearProgressUI {...restProps} className={styles.track({ className })}>
        {children}
      </LinearProgressUI>
    </LinearProgressContext>
  );
};

export namespace LinearProgress {
  export interface Props
    extends LinearProgressUI.Props, LinearProgressVariants {}
}

export const LinearProgressBar = (props: LinearProgressUI.Bar) => {
  const { styles } = useLinearProgressContext();
  const { className, ...rest } = props;
  return (
    <LinearProgressUI.Bar {...rest} className={styles.bar({ className })} />
  );
};
