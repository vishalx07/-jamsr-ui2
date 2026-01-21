"use client";
import { useCallback, useMemo } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import { useControlledState } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

export const useInput = (props: useInput.Props) => {
  const fieldA11yCtx = useFieldA11yContext();

  const {
    value: valueProp,
    defaultValue,
    onValueChange,
    className,
    ...elementProps
  } = props;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const getInputProps: PropGetter<UIProps<"input">> = useCallback(
    (props) => ({
      ...fieldA11yCtx?.getInputProps(),
      ...elementProps,
      ...props,
      className: cn(className, props?.className),
      value,
      onChange: handleInputChange,
    }),
    [fieldA11yCtx, elementProps, className, value, handleInputChange],
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
