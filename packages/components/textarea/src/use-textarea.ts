"use client";
import { useCallback, useMemo } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import { useControlledState } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useTextarea = (props: useTextarea.Props) => {
  const fieldA11yCtx = useFieldA11yContext();

  const {
    value: valueProp,
    defaultValue,
    onValueChange,
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

  const getTextareaProps = useCallback(
    (): UIProps<"textarea"> => ({
      ...fieldA11yCtx?.getInputProps(),
      ...elementProps,
      ...mergeProps(elementProps, { onChange: handleTextareaChange }),
      value,
    }),
    [fieldA11yCtx, elementProps, value, handleTextareaChange],
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
