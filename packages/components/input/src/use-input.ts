"use client";
import { useCallback, useMemo } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";
import { useTextFieldContext } from "@jamsrui/textfield";
import { useInputGroupContextOpt } from "@jamsrui/input-group";

export const useInput = (props: useInput.Props) => {
  const fieldA11yCtx = useFieldA11yContext();

  const ctx = useTextFieldContext();
  const inputGroupCtx = useInputGroupContextOpt();
  const isTextFieldDisabled = ctx?.isDisabled ?? false;
  const isTextFieldInvalid = ctx?.isInvalid ?? false;

  const {
    value: valueProp,
    defaultValue,
    onValueChange,
    ref,
    disabled: isDisabled = isTextFieldDisabled,
    ...elementProps
  } = props;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const { isHovered, ref: hoverRef } = useHover<HTMLInputElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const refs = useMergeRefs([
    ref,
    hoverRef,
    focusVisibleRef,
    inputGroupCtx?.inputRefs,
  ]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const getInputProps = useCallback(
    () => ({
      ...fieldA11yCtx?.getInputProps(),
      ...elementProps,
      value,
      onChange: handleInputChange,
      ref: refs,
      "data-hovered": dataAttr(isHovered),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-invalid": dataAttr(isTextFieldInvalid),
      disabled: isDisabled,
    }),
    [
      fieldA11yCtx,
      elementProps,
      value,
      handleInputChange,
      refs,
      isHovered,
      isFocusVisible,
      isDisabled,
      isTextFieldInvalid,
    ],
  );

  return useMemo(
    () => ({
      getInputProps,
    }),
    [getInputProps],
  );
};

export namespace useInput {
  export interface Props extends UIProps<"input"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  }
}
