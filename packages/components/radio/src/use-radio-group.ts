"use client";

import { useCallback, useId } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { radioGroupVariant } from "./styles";

import type { Radio } from "./radio";
import type { RadioGroupRoot } from "./radio-group-root";
import type { RadioInput } from "./radio-input";
import type { RadioGroupVariants, RadioVariants } from "./styles";

export const useRadioGroup = (props: useRadioGroup.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    radioGroupVariant.variantKeys
  );

  const {
    value: propValue,
    defaultValue,
    onValueChange,
    name,
    disabled: isDisabled = false,
    color,
    size,
    inputProps,
    ...restProps
  } = $props;

  const styles = radioGroupVariant(variantProps);
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
      ...restProps,
      className: styles.root({
        className: props.className,
      }),
    }),
    [restProps, styles, props.className]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, inputValue: Radio.Value) => {
      const isNumericInput = typeof inputValue === "number";
      const value = isNumericInput
        ? Number(event.target.value)
        : event.target.value;
      setValue(value);
    },
    [setValue]
  );

  return {
    getRootProps,
    handleInputChange,
    value,
    name: inputName,
    isDisabled,
    color,
    size,
    inputProps,
  };
};

export namespace useRadioGroup {
  export interface Props
    extends RadioGroupVariants,
      RadioVariants,
      RadioGroupRoot.Props {
    value?: Radio.Value;
    onValueChange?: (value: Radio.Value) => void;
    defaultValue?: Radio.Value;
    children?: React.ReactNode;
    name?: string;
    disabled?: boolean;
    inputProps?: RadioInput.Props;
  }
}
