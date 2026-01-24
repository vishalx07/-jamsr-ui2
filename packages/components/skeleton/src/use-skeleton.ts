"use client";
import { useCallback, useMemo } from "react";

import { dataAttr } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Skeleton } from "./skeleton";
import type { SkeletonContent } from "./skeleton-content";

export const useSkeleton = (props: useSkeleton.Props) => {
  const { isLoading = true, ...elementProps } = props;

  const getRootProps: PropGetter<Skeleton.Props> = useCallback(
    () => ({
      "data-slot": "root",
      "data-component": "skeleton",
      "data-loaded": dataAttr(!isLoading),
      ...elementProps,
    }),
    [elementProps, isLoading],
  );

  const getContentProps: PropGetter<SkeletonContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getContentProps,
    }),
    [getContentProps, getRootProps],
  );
};
export namespace useSkeleton {
  export interface Props extends UIProps<"div"> {
    isLoading?: boolean;
  }
}
