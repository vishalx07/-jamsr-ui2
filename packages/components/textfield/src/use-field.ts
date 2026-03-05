"use client";

import { useCallback, useMemo } from "react";

import { dataAttr } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { FieldRoot } from "./field-root";

export const useField = (props: useField.Props) => {
  const {
    disabled: isDisabled = false,
    isInvalid,
    orientation = "vertical",
    ...restProps
  } = props;

  const getRootProps: PropGetter<FieldRoot.Props> = useCallback(
    () => ({
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "aria-invalid": dataAttr(isInvalid),
      "data-slot": "textfield",
      "data-orientation": orientation,
      ...restProps,
    }),
    [isDisabled, isInvalid, orientation, restProps],
  );

  return useMemo(() => {
    return {
      isDisabled,
      isInvalid,
      orientation,
      getRootProps,
    };
  }, [isDisabled, isInvalid, orientation, getRootProps]);
};

export namespace useField {
  export interface Props extends FieldRoot.Props {
    disabled?: boolean;
    isInvalid?: boolean;
    orientation?: "horizontal" | "vertical";
  }
}
