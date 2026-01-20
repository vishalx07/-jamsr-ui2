"use client";
import { useCallback, useMemo } from "react";

import { useHover, useMergeRefs, usePress } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";
import type { ButtonRoot } from "./button";

export const useButton = (props: useButton.Props) => {
  const { disabled = false, isLoading = false, ref, ...restProps } = props;
  const isDisabled = disabled || isLoading;

  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const mergedRefs = useMergeRefs([ref, hoverRef, pressRef]);

  const getButtonProps: PropGetter<ButtonRoot.Props> = useCallback(
    () => ({
      ...restProps,
      ref: mergedRefs,
      disabled: isDisabled,
      "data-loading": dataAttr(isLoading),
      "data-pressed": dataAttr(isPressed),
      "data-hover": dataAttr(isHovered),
    }),
    [isDisabled, isHovered, isLoading, isPressed, mergedRefs, restProps],
  );

  return useMemo(
    () => ({
      getButtonProps,
      isLoading,
    }),
    [getButtonProps, isLoading],
  );
};

export namespace useButton {
  export interface Props extends UIProps<"button"> {
    /**
     * If `true`, the button will show a spinner and be non-interactive.
     * Useful for indicating a loading state during async operations.
     */
    isLoading?: boolean;
  }
}
