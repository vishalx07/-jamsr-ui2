"use client";
import { useCallback, useMemo, useRef } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Accordion } from "./accordion";

export const useAccordion = (props: useAccordion.Props) => {
  const {
    value: valueProp,
    defaultValue,
    disabled: isDisabled = false,
    onValueChange,
    isMultiple,
    loop,
    className,
    ...restProps
  } = props;

  const [value = [], setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const handleValueChange = useCallback(() => {}, []);

  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  const handleAccordionOpen = useCallback(
    (idx: string) => {
      const isOpen = value.includes(idx);
      if (isMultiple) {
        const newValue = new Set(value);
        if (isOpen) newValue.delete(idx);
        else newValue.add(idx); // toggle
        setValue(Array.from(newValue));
      } else {
        setValue(isOpen ? [] : [idx]);
        onValueChange?.(isOpen ? [] : [idx]);
      }
    },
    [isMultiple, onValueChange, setValue, value],
  );

  const getRootProps: PropGetter<Accordion.Props> = useCallback(
    (props) => ({
      ...restProps,
      ...props,
      "data-slot": "root",
      className: cn(className, props?.className),
    }),
    [restProps, className],
  );

  return useMemo(
    () => ({
      getRootProps,
      handleValueChange,
      value,
      isDisabled,
      handleAccordionOpen,
      elementRefs,
    }),
    [
      getRootProps,
      handleAccordionOpen,
      handleValueChange,
      isDisabled,
      value,
      elementRefs,
    ],
  );
};

export namespace useAccordion {
  export type AccordionValue = string[];
  export interface Props extends UIProps<"div"> {
    value?: AccordionValue;
    defaultValue?: AccordionValue;
    disabled?: boolean;
    onValueChange?: (value: AccordionValue) => void;
    isMultiple?: boolean;
    loop?: boolean;
  }
}
