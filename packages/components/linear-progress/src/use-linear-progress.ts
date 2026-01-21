"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { LinearProgress } from "./linear-progress";
import type { LinearProgressBar } from "./linear-progress-bar";

export const useLinearProgress = (props: useLinearProgress.Props) => {
  const {
    progress: progressProp = 0,
    isIntermediate = true,
    ...elementProps
  } = props;

  const progress = isIntermediate
    ? progressProp || 50
    : Math.min(progressProp, 100);

  const getRootProps: PropGetter<LinearProgress.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      ...elementProps,
    }),
    [elementProps],
  );

  const getBarProps: PropGetter<LinearProgressBar.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("bar"),
      initial: {
        width: isIntermediate ? `${progress}%` : 0,
      },
      animate: {
        width: `${progress}%`,
      },
    }),
    [isIntermediate, progress],
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
