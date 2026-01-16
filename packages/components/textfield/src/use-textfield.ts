"use client";

import { useCallback, useMemo } from "react";

import { dataAttr, type PropGetter } from "@jamsrui/utils";

import { textFieldVariants } from "./styles";
import type { TextfieldRoot } from "./textfield-root";

export const useTextField = (props: useTextField.Props) => {
  const {
    className,
    disabled: isDisabled = false,
    isInvalid,
    ...restProps
  } = props;
  const styles = textFieldVariants({ className });

  const getRootProps: PropGetter<TextfieldRoot.Props> = useCallback(
    () => ({
      className: styles,
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "aria-invalid": dataAttr(isInvalid),
      ...restProps,
    }),
    [styles, isDisabled, isInvalid, restProps]
  );

  return useMemo(() => {
    return {
      getRootProps,
    };
  }, [getRootProps]);
};

export namespace useTextField {
  export interface Props extends TextfieldRoot.Props {
    disabled?: boolean;
    isInvalid?: boolean;
  }
}
