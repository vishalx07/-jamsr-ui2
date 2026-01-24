"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  useControlledState,
  useFocusVisible,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import { NumberParser } from "./parser";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { NumberField } from "./number-field";
import type { NumberFieldDecrement } from "./number-field-decrement";
import type { NumberFieldGroup } from "./number-field-group";
import type { NumberFieldIncrement } from "./number-field-increment";
import type { NumberFieldInput } from "./number-field-input";

export const useNumberField = (props: useNumberField.Props) => {
  const {
    formatOptions = { style: "decimal" },
    locale = navigator?.language ?? "en-US",
    minValue,
    maxValue,
    step,
    isInvalid,
    onValueChange,
    value: valueProp,
    defaultValue,
    disabled: isDisabled = false,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useControlledState({
    onChange: onValueChange,
    defaultProp: defaultValue,
    prop: valueProp,
  });
  const [value, setValue] = useState("");

  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRefs = useMergeRefs([inputRef, focusVisibleRef]);

  const parser = useMemo(
    () => new NumberParser(locale, formatOptions),
    [locale, formatOptions],
  );
  const formatter = useMemo(
    () => new Intl.NumberFormat(locale, formatOptions),
    [locale, formatOptions],
  );

  const handleValueChange = useCallback(
    (value: string) => {
      setValue(value);
      const parsedValue = parser.parse(value);
      if (!isNaN(parsedValue)) {
        setInputValue(parsedValue);
      } else {
        setInputValue(0);
      }
    },
    [parser, setInputValue],
  );

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value) {
        const parsedValue = parser.parse(value);
        if (!isNaN(parsedValue)) {
          handleValueChange(value);
        }
      } else {
        handleValueChange("");
      }
    },
    [parser, handleValueChange],
  );

  const handleInputOnBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const parsedValue = parser.parse(value);
      if (!isNaN(parsedValue)) {
        handleValueChange(formatter.format(parsedValue));
      }
    },
    [formatter, handleValueChange, parser],
  );

  const handleIncrement = useCallback(() => {
    const parsedValue = parser.parse(value);
    if (isNaN(parsedValue)) {
      handleValueChange(formatter.format(1));
    } else {
      handleValueChange(formatter.format(parsedValue + 1));
    }
  }, [formatter, handleValueChange, parser, value]);

  const handleDecrement = useCallback(() => {
    const parsedValue = parser.parse(value);
    if (isNaN(parsedValue)) {
      handleValueChange(formatter.format(-1));
    } else {
      handleValueChange(formatter.format(parsedValue - 1));
    }
  }, [formatter, handleValueChange, parser, value]);

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "ArrowUp") {
        handleIncrement();
        event.preventDefault();
      } else if (event.key === "ArrowDown") {
        handleDecrement();
        event.preventDefault();
      }
    },
    [handleDecrement, handleIncrement],
  );

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const handler = (event: WheelEvent) => {
      if (
        document.activeElement !== el ||
        event.metaKey ||
        event.shiftKey ||
        event.ctrlKey ||
        event.altKey
      )
        return;

      event.preventDefault();
      if (event.deltaY > 0) {
        handleIncrement();
      } else {
        handleDecrement();
      }
    };

    el.addEventListener("wheel", handler, { passive: false });
    return () => {
      el.removeEventListener("wheel", handler);
    };
  }, [handleDecrement, handleIncrement]);

  const getRootProps: PropGetter<NumberField.Props> = useCallback(
    () => ({
      ...restProps,
      "data-slot": "root",
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
    }),
    [isDisabled, restProps],
  );

  const getInputProps: PropGetter<NumberFieldInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onChange: handleInputOnChange,
        onBlur: handleInputOnBlur,
        onKeyDown: handleInputKeyDown,
      }),
      ref: inputRefs,
      value,
      "data-slot": "input",
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-focus-visible": dataAttr(isFocusVisible),
    }),
    [
      handleInputKeyDown,
      handleInputOnBlur,
      handleInputOnChange,
      isDisabled,
      value,
      isFocusVisible,
      inputRefs,
    ],
  );

  const getIncrementProps: PropGetter<NumberFieldIncrement.Props> = useCallback(
    (props) => ({
      tabIndex: -1,
      size: "sm",
      radius: "none",
      "data-slot": "increment",
      ...mergeProps(props, {
        onClick: handleIncrement,
      }),
    }),
    [handleIncrement],
  );

  const getDecrementProps: PropGetter<NumberFieldDecrement.Props> = useCallback(
    (props) => ({
      tabIndex: -1,
      size: "sm",
      radius: "none",
      "data-slot": "decrement",
      ...mergeProps(props, {
        onClick: handleDecrement,
      }),
    }),
    [handleDecrement],
  );

  const getGroupProps: PropGetter<NumberFieldGroup.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "group",
      "data-focus-visible": dataAttr(isFocusVisible),
    }),
    [isFocusVisible],
  );

  return useMemo(
    () => ({
      getRootProps,
      getInputProps,
      getIncrementProps,
      getDecrementProps,
      getGroupProps,
    }),
    [
      getRootProps,
      getInputProps,
      getIncrementProps,
      getDecrementProps,
      getGroupProps,
    ],
  );
};

export namespace useNumberField {
  export interface Props extends UIProps<"div"> {
    formatOptions?: Intl.NumberFormatOptions;
    locale?: string;
    minValue?: number;
    maxValue?: number;
    step?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    defaultValue?: number;
    name?: string;
    form?: string;
    disabled?: boolean;
    isInvalid?: boolean;
  }
}
