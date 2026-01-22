"use client";

import { useCallback, useMemo } from "react";

import {
  useFocus,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { InputGroupPrefix } from "./input-group-prefix";
import type { InputGroupRoot } from "./input-group-root";
import type { InputGroupSuffix } from "./input-group-suffix";

export const useInputGroup = (props: useInputGroup.Props) => {
  const { ref, ...elementProps } = props;
  const isDisabled = false;

  const { isFocused, ref: focusRef } = useFocus<HTMLInputElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const { isHovered, ref: hoverRef } = useHover<HTMLDivElement>({
    isDisabled,
  });
  const inputRefs = useMergeRefs([ref, focusRef, focusVisibleRef, hoverRef]);

  const handleOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // return if direct clicked on input, textarea
    if (target.closest("input, textarea")) {
      return;
    }

    const input = e.currentTarget.querySelector<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    if (input) {
      input.focus();
      e.preventDefault();
    }
  };

  const getRootProps = useCallback(
    (): InputGroupRoot.Props => ({
      "data-component": "input-group",
      "data-slot": "root",
      "data-focused": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      onMouseDown: handleOnMouseDown,
      ...elementProps,
    }),
    [elementProps, isDisabled, isFocusVisible, isFocused, isHovered],
  );

  const getPrefixProps: PropGetter<InputGroupPrefix.Props> = useCallback(
    (props) => ({
      "data-slot": "prefix",
      ...props,
    }),
    [],
  );

  const getSuffixProps: PropGetter<InputGroupSuffix.Props> = useCallback(
    (props) => ({
      "data-slot": "suffix",
      ...props,
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getPrefixProps,
      getSuffixProps,
    }),
    [getRootProps, getPrefixProps, getSuffixProps],
  );
};

export namespace useInputGroup {
  export interface Props extends UIProps<"div"> {}
}
