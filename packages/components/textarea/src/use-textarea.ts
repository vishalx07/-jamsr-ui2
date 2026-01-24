"use client";
import { useCallback, useMemo } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";
import { useTextFieldContext } from "@jamsrui/textfield";

export const useTextarea = (props: useTextarea.Props) => {
  const fieldA11yCtx = useFieldA11yContext();

  const ctx = useTextFieldContext();
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

  const { isHovered, ref: hoverRef } = useHover<HTMLTextAreaElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLTextAreaElement>({
      isDisabled,
    });
  const refs = useMergeRefs([ref, hoverRef, focusVisibleRef]);

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const getTextareaProps = useCallback(
    (): UIProps<"textarea"> => ({
      ...fieldA11yCtx?.getInputProps(),
      ...mergeProps(elementProps, { onChange: handleTextareaChange }),
      value,
      ref: refs,
      "data-hovered": dataAttr(isHovered),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-invalid": dataAttr(isTextFieldInvalid),
    }),
    [
      fieldA11yCtx,
      elementProps,
      value,
      handleTextareaChange,
      refs,
      isHovered,
      isFocusVisible,
      isTextFieldInvalid,
    ],
  );

  return useMemo(
    () => ({
      getTextareaProps,
    }),
    [getTextareaProps],
  );
};

export namespace useTextarea {
  export interface Props extends UIProps<"textarea"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  }
}
