"use client";

import { LinearProgress as LinearProgressUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { linearProgressStyles } from "./styles";

type LinearProgressVariants = VariantProps<typeof linearProgressStyles>;

export const LinearProgress = (props: LinearProgress.Props) => {
  const {
    color,
    size,
    isIntermediate = true,
    className,
    progress = 0,
    ...restProps
  } = props;
  const styles = linearProgressStyles({ color, size, isIntermediate });

  const progressValue = isIntermediate
    ? progress || 50
    : Math.min(progress, 100);

  return (
    <LinearProgressUI {...restProps} className={cn(styles.track(), className)}>
      <div className={styles.bar()} style={{ width: `${progressValue}%` }} />
    </LinearProgressUI>
  );
};

export namespace LinearProgress {
  export interface Props
    extends LinearProgressUI.Props, LinearProgressVariants {
    progress?: number;
  }
}
