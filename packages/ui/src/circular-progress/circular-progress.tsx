"use client";

import { CircularProgress as CircularProgressUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { circularProgressStyles } from "./styles";

type CircularProgressVariants = VariantProps<typeof circularProgressStyles>;

const CircularProgressContext = createContext<{
  styles: ReturnType<typeof circularProgressStyles>;
} | null>(null);

const useCircularProgressContext = () => {
  const ctx = use(CircularProgressContext);
  if (!ctx) {
    throw new Error(
      "useCircularProgressContext must be used within a CircularProgress",
    );
  }
  return ctx;
};

export const CircularProgress = (props: CircularProgress.Props) => {
  const {
    isIntermediate,
    color,
    className,
    children = (
      <>
        <CircularProgressTrack />
        <CircularProgressProgress />
      </>
    ),
    ...restProps
  } = props;
  const styles = circularProgressStyles({ isIntermediate, color });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <CircularProgressContext value={value}>
      <CircularProgressUI {...restProps} className={styles.root({ className })}>
        {children}
      </CircularProgressUI>
    </CircularProgressContext>
  );
};

export namespace CircularProgress {
  export interface Props
    extends Omit<CircularProgressUI.Props, "color">, CircularProgressVariants {}
}

export const CircularProgressTrack = (props: CircularProgressUI.Track) => {
  const { styles } = useCircularProgressContext();
  return (
    <CircularProgressUI.Track
      {...props}
      className={styles.track({ className: props.className })}
    />
  );
};

export const CircularProgressProgress = (
  props: CircularProgressUI.Progress,
) => {
  const { styles } = useCircularProgressContext();
  return (
    <CircularProgressUI.Progress
      {...props}
      className={styles.progress({ className: props.className })}
    />
  );
};

export const CircularProgressLabel = (props: CircularProgressUI.Label) => {
  const { styles } = useCircularProgressContext();
  return (
    <CircularProgressUI.Label
      {...props}
      className={styles.label({ className: props.className })}
    />
  );
};
