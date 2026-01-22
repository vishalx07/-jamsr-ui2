"use client";

import { useCallback } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import { useFocusVisible, useMergeRefs, usePress } from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import { useRadioGroupContext } from "./radio-group-context";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { RadioContent } from "./radio-content";
import type { RadioControl } from "./radio-control";
import type { RadioIndicator } from "./radio-indicator";
import type { RadioInput } from "./radio-input";
import type { RadioRoot } from "./radio-root";

export const useRadio = (props: useRadio.Props) => {
  const {
    name: inputName,
    handleInputChange,
    value,
    isDisabled: isGroupDisabled,
    inputProps: groupInputProps,
  } = useRadioGroupContext();
  const fieldA11yCtx = useFieldA11yContext();

  const {
    disabled: isDisabled = isGroupDisabled,
    readonly: isReadonly = false,
    value: $value,
    inputProps,
    className,
    ...elementProps
  } = props;

  const { isFocusVisible, ref: focusVisibleRef } = useFocusVisible({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({ isDisabled });
  const inputRefs = useMergeRefs([focusVisibleRef, pressRef]);
  const isChecked = value === $value;

  const getRootProps = useCallback(
    (): RadioRoot.Props => ({
      ...elementProps,
      className,
      "data-slot": "root",
      "data-component": "radio",
      "data-selected": dataAttr(isChecked),
      "data-disabled": dataAttr(isDisabled),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
    }),
    [elementProps, className, isChecked, isDisabled, isFocusVisible, isPressed],
  );
  const getInputProps: PropGetter<RadioInput.Props> = useCallback(
    (props) => ({
      ...fieldA11yCtx?.getInputProps(),
      ...mergeProps(groupInputProps, inputProps, props, {
        onChange: (e) => handleInputChange(e, $value),
      }),
      value: $value,
      "data-slot": "input",
      type: "radio",
      ref: inputRefs,
      disabled: isDisabled,
      readOnly: isReadonly,
      name: inputName,
    }),
    [
      fieldA11yCtx,
      groupInputProps,
      inputProps,
      $value,
      inputRefs,
      isDisabled,
      isReadonly,
      inputName,
      handleInputChange,
    ],
  );
  const getControlProps: PropGetter<RadioControl.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "control",
    }),
    [],
  );
  const getIndicatorProps: PropGetter<RadioIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "indicator",
    }),
    [],
  );
  const getContentProps: PropGetter<RadioContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  return {
    isChecked,
    getRootProps,
    getInputProps,
    getControlProps,
    getContentProps,
    getIndicatorProps,
  };
};

export namespace useRadio {
  export interface Props extends UIProps<"div"> {
    disabled?: boolean;
    readonly?: boolean;
    value: string | number;
    inputProps?: RadioInput.Props;
  }
}
