"use client";
import { useCallback, useMemo } from "react";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { LinearProgress } from "./linear-progress";
import type { LinearProgressBar } from "./linear-progress-bar";

export const useLinearProgress = (props: useLinearProgress.Props) => {
  const {
    isIntermediate = true,
    progress: progressProp = isIntermediate ? 50 : 0,
    ...elementProps
  } = props;
  const progress = Math.min(progressProp, 100);

  const getRootProps: PropGetter<LinearProgress.Props> = useCallback(
    () => ({
      "data-slot": "root",
      ...elementProps,
    }),
    [elementProps],
  );

  const getBarProps: PropGetter<LinearProgressBar.Props> = useCallback(
    () => ({
      "data-slot": "bar",
      initial: {
        width: 0,
      },
      animate: {
        width: `${progress}%`,
      },
    }),
    [progress],
  );

  return useMemo(
    () => ({
      getRootProps,
      getBarProps,
    }),
    [getBarProps, getRootProps],
  );
};

export namespace useLinearProgress {
  export interface Props extends UIProps<"div"> {
    progress?: number;
    isIntermediate?: boolean;
  }
}
