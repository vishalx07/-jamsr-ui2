"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  useControlledState,
  useFocus,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { OtpInputCaret } from "./otp-input-caret";
import type { OtpInputGroup } from "./otp-input-group";
import type { OtpInputInput } from "./otp-input-input";
import type { OtpInputSeparator } from "./otp-input-separator";

export const useOtpInput = (props: useOtpInput.Props) => {
  const {
    value: valueProp,
    onValueChange,
    defaultValue,
    disabled: isDisabled = false,
    maxLength,
    onComplete,
    placeholder,
    pattern,
    ref,
    isInvalid = false,
    ...restProps
  } = props;
  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: valueProp,
    onChange: onValueChange,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref: hoverRef, isHovered } = useHover({ isDisabled });
  const { ref: focusRef, isFocused } = useFocus({ isDisabled });
  const inputRefs = useMergeRefs([inputRef, hoverRef, focusRef, ref]);

  const inputMetadataRef = useRef<
    [number | null, number | null, "none" | "forward" | "backward" | null]
  >([
    inputRef.current?.selectionStart ?? null,
    inputRef.current?.selectionEnd ?? null,
    inputRef.current?.selectionDirection ?? "none",
  ]);
  const regexp = useMemo(
    () => (pattern ? new RegExp(pattern) : null),
    [pattern],
  );
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

  const handleOnBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setSelectionStart(null);
    setSelectionEnd(null);
  }, []);

  const handleOnFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (inputRef.current) {
        const start = Math.min(inputRef.current.value.length, maxLength - 1);
        const end = inputRef.current.value.length;
        inputRef.current.setSelectionRange(start, end);
        setSelectionStart(start);
        setSelectionEnd(end);
      }
    },
    [maxLength],
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value.slice(0, maxLength);
      if (newValue.length > 0 && regexp && !regexp.test(newValue)) {
        e.preventDefault();
        return;
      }

      setValue(newValue);
      if (newValue.length === maxLength) {
        onComplete?.(newValue);
      }
    },
    [maxLength, onComplete, regexp, setValue],
  );

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    inputMetadataRef.current = [
      input.selectionStart,
      input.selectionEnd,
      input.selectionDirection,
    ];

    function onDocumentSelectionChange() {
      if (!input) return;

      if (document.activeElement !== input) {
        setSelectionStart(null);
        setSelectionEnd(null);
        return;
      }

      const selectionStart = input.selectionStart;
      const selectionEnd = input.selectionEnd;
      const selectionDirection = input.selectionDirection;
      const prev = inputMetadataRef.current;
      let start = -1;
      let end = -1;
      let direction: "none" | "forward" | "backward" | undefined = undefined;

      if (
        value.length !== 0 &&
        selectionStart !== null &&
        selectionEnd !== null
      ) {
        const isSingleCaret = selectionStart === selectionEnd;
        if (isSingleCaret) {
          if (selectionStart === 0) {
            start = 0;
            end = 1;
          } else if (selectionStart === maxLength) {
            start = maxLength - 1;
            end = maxLength;
          } else if (maxLength > 1 && value.length > 1) {
            let offset = 0;
            if (prev[0] !== null && prev[1] !== null) {
              direction = selectionStart < prev[1] ? "backward" : "forward";
              const wasPreviouslyInserting =
                prev[0] === prev[1] && prev[0] < selectionStart;
              if (direction === "backward" && !wasPreviouslyInserting) {
                offset = -1;
              }
            }
            start = selectionStart + offset;
            end = start + 1;
          }
        }
        if (start != -1 && end !== -1 && start !== end) {
          input.setSelectionRange(start, end, direction);
        }
      }

      const s = start !== -1 ? start : selectionStart;
      const e = end !== -1 ? end : selectionEnd;
      const dir = direction ?? selectionDirection;
      setSelectionStart(s);
      setSelectionEnd(e);
      inputMetadataRef.current = [s, e, dir];
    }

    document.addEventListener("selectionchange", onDocumentSelectionChange, {
      capture: true,
    });
    return () => {
      document.removeEventListener(
        "selectionchange",
        onDocumentSelectionChange,
        {
          capture: true,
        },
      );
    };
  }, [maxLength, value]);

  const slots = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, index) => {
        const char = value[index] ?? null;
        const placeholderChar = placeholder?.[index];
        const isActive =
          selectionStart !== null &&
          selectionEnd !== null &&
          ((selectionStart === selectionEnd && selectionStart === index) ||
            (selectionStart <= index && selectionEnd > index));
        return {
          char,
          placeholderChar,
          isActive,
        };
      }),
    [placeholder, selectionEnd, selectionStart, value],
  );

  const getRootProps = useCallback(
    () => ({
      "data-slot": "root",
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-invalid": dataAttr(isInvalid),
      ...restProps,
    }),
    [isDisabled, isHovered, isFocused, isInvalid, restProps],
  );

  const getGroupProps: PropGetter<OtpInputGroup.Props> = useCallback(
    (props) => ({
      "data-slot": "group",
      ...props,
    }),
    [],
  );

  const getSeparatorProps: PropGetter<OtpInputSeparator.Props> = useCallback(
    (props) => ({
      "data-slot": "separator",
      ...props,
    }),
    [],
  );

  const getInputProps: PropGetter<OtpInputInput.Props> = useCallback(
    (props): OtpInputInput.Props => ({
      ...mergeProps(props, {
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
      }),
      ref: inputRefs,
      "data-slot": "input",
      value,
      maxLength,
      disabled: isDisabled,
      pattern: regexp?.source,
    }),
    [
      value,
      handleOnChange,
      handleOnBlur,
      handleOnFocus,
      inputRefs,
      maxLength,
      isDisabled,
      regexp?.source,
    ],
  );

  const getCaretProps: PropGetter<OtpInputCaret.Props> = useCallback(
    (props) => ({
      "data-slot": "caret",
      ...props,
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getGroupProps,
      getSeparatorProps,
      getInputProps,
      getCaretProps,
      slots,
    }),
    [
      getRootProps,
      getGroupProps,
      getSeparatorProps,
      getInputProps,
      getCaretProps,
      slots,
    ],
  );
};

export namespace useOtpInput {
  export interface Props extends UIProps<"div"> {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    maxLength: number;
    onComplete?: (value: string) => void;
    isInvalid?: boolean;
    disabled?: boolean;
    placeholder?: string;
    pattern?: string;
  }
}
