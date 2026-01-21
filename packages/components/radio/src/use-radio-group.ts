"use client";

import { useCallback, useId } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttr, dataAttrDev } from "@jamsrui/utils";

import type { Radio } from "./radio";
import type { RadioGroupRoot } from "./radio-group-root";
import type { RadioInput } from "./radio-input";

export const useRadioGroup = (props: useRadioGroup.Props) => {
  const {
    value: propValue,
    defaultValue,
    onValueChange,
    name,
    disabled: isDisabled = false,
    inputProps,
    isInvalid = false,
    className,
    ...restProps
  } = props;

  const inputNameId = useId();
  const inputName = name ?? inputNameId;

  const [value, setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const getRootProps = useCallback(
    (): RadioGroupRoot.Props => ({
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("radio-group"),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      ...restProps,
      className,
    }),
    [isDisabled, isInvalid, restProps, className],
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, inputValue: Radio.Value) => {
      const isNumericInput = typeof inputValue === "number";
      const value = isNumericInput
        ? Number(event.target.value)
        : event.target.value;
      setValue(value);
    },
    [setValue],
  );

  return {
    getRootProps,
    handleInputChange,
    value,
    name: inputName,
    isDisabled,
    inputProps,
  };
};

export namespace useRadioGroup {
  export interface Props extends RadioGroupRoot.Props {
    value?: Radio.Value;
    onValueChange?: (value: Radio.Value) => void;
    defaultValue?: Radio.Value;
    children?: React.ReactNode;
    name?: string;
    disabled?: boolean;
    inputProps?: RadioInput.Props;
    isInvalid?: boolean;
  }
}
