"use client";
import { useCallback, useId, useMemo } from "react";

import { useHover, useMergeRefs, usePress } from "@jamsrui/hooks";
import { cn, dataAttr, dataAttrDev } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import { IconButtonRoot } from "./icon-button-root";

export const useIconButton = (props: useIconButton.Props) => {
  const {
    type = "button",
    label,
    isLoading = false,
    disabled = false,
    className,
    ref,
    loadingIcon,
    ...restProps
  } = props;

  const id = useId();
  const isDisabled = isLoading || disabled;

  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const mergedRefs = useMergeRefs([ref, hoverRef, pressRef]);

  const getButtonProps = useCallback(
    (): Partial<IconButtonRoot.Props> => ({
      ...restProps,
      ref: mergedRefs,
      "data-component": dataAttrDev("icon-button"),
      className: cn(className),
      "aria-labelledby": id,
      type,
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-loading": dataAttr(isLoading),
      "data-pressed": dataAttr(isPressed),
      "data-hover": dataAttr(isHovered),
    }),
    [
      className,
      id,
      isDisabled,
      isHovered,
      isLoading,
      isPressed,
      mergedRefs,
      restProps,
      type,
    ],
  );

  const getLabelProps: PropGetter<ComponentProps<"span">> = useCallback(() => {
    return {
      "aria-hidden": true,
      id,
      className: "sr-only",
    };
  }, [id]);

  return useMemo(
    () => ({
      getButtonProps,
      getLabelProps,
      isLoading,
      isDisabled,
      label,
      loadingIcon,
    }),
    [getButtonProps, getLabelProps, isDisabled, isLoading, label, loadingIcon],
  );
};
export namespace useIconButton {
  export interface Props extends IconButtonRoot.Props {
    label: string;
    isLoading?: boolean;
    loadingIcon?: React.ReactElement;
  }
}
