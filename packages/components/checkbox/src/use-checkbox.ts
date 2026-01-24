"use client";
import { useCallback, useMemo } from "react";

import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
  usePress,
} from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { CheckboxContent } from "./checkbox-content";
import type { CheckboxControl } from "./checkbox-control";
import { CheckboxIndicator } from "./checkbox-indicator";
import type { CheckboxInput } from "./checkbox-input";
import type { CheckboxRoot } from "./checkbox-root";

export const useCheckbox = (props: useCheckbox.Props) => {
  const {
    checked: isCheckedProp,
    onCheckedChange,
    defaultChecked,
    isIntermediate,
    disabled = false,
    isInvalid,
    inputProps,
    className,
    ...elementProps
  } = props;

  const isDisabled = disabled;
  const [isChecked = false, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    prop: isCheckedProp,
    onChange: onCheckedChange,
  });

  const { isFocusVisible, ref: focusVisibleRef } = useFocusVisible({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const inputRef = useMergeRefs([focusVisibleRef, pressRef, hoverRef]);

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked],
  );

  const getRootProps = useCallback(
    (): CheckboxRoot.Props => ({
      ...elementProps,
      className,
      "data-slot": "root",
      "data-component": "checkbox",
      "data-checked": dataAttr(isChecked || isIntermediate),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
    }),
    [
      elementProps,
      className,
      isChecked,
      isDisabled,
      isFocusVisible,
      isHovered,
      isIntermediate,
      isPressed,
      isInvalid,
    ],
  );

  const getInputProps: PropGetter<CheckboxInput.Props> = useCallback(
    (props) => ({
      onChange: handleInputOnChange,
      ...mergeProps(props, inputProps, {
        onChange: handleInputOnChange,
      }),
      disabled: isDisabled,
      "aria-disabled": dataAttr(isDisabled),
      ref: inputRef,
      type: "checkbox",
      "data-slot": "input",
    }),
    [handleInputOnChange, isDisabled, inputRef, inputProps],
  );

  const getContentProps: PropGetter<CheckboxContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getControlProps: PropGetter<CheckboxControl.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "control",
    }),
    [],
  );

  const getIndicatorProps: PropGetter<CheckboxIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "indicator",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getInputProps,
      getContentProps,
      getControlProps,
      getIndicatorProps,
      onCheckedChange,
      defaultChecked,
      isChecked,
      isIntermediate,
    }),
    [
      defaultChecked,
      getContentProps,
      getInputProps,
      getRootProps,
      getControlProps,
      getIndicatorProps,
      isChecked,
      isIntermediate,
      onCheckedChange,
    ],
  );
};

export namespace useCheckbox {
  export interface Props extends CheckboxRoot.Props {
    defaultChecked?: boolean;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    isIntermediate?: boolean;
    disabled?: boolean;
    isInvalid?: boolean;
    inputProps?: UIProps<"input">;
    name?: string;
    form?: string;
  }
}
