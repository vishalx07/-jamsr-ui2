"use client";
import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { useFieldA11yContext } from "@jamsrui/context";

export const useTextarea = (props: useTextarea.Props) => {
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

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const getTextareaProps: PropGetter<UIProps<"textarea">> = useCallback(
    (props) => ({
      ...fieldA11yCtx?.getInputProps(),
      ...elementProps,
      ...props,
      className: cn(className, props?.className),
      value,
      onChange: handleTextareaChange,
    }),
    [fieldA11yCtx, elementProps, className, value, handleTextareaChange],
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
