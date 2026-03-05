"use client";
import { useCallback, useId, useMemo } from "react";

import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
  usePress,
} from "@jamsrui/hooks";
import { dataAttr, mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { SwitchContent } from "./switch-content";
import type { SwitchInput } from "./switch-input";
import type { SwitchRoot } from "./switch-root";
import type { SwitchThumb } from "./switch-thumb";
import type { SwitchControl } from "./switch-track";

export const useSwitch = (props: useSwitch.Props) => {
  const {
    checked: propIsChecked,
    defaultChecked,
    onCheckedChange,
    disabled = false,
    inputProps,
    className,
    ...elementProps
  } = props;

  const [isChecked, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
    prop: propIsChecked,
  });

  const isDisabled = disabled;
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const { isPressed, ref: pressRef } = usePress<HTMLInputElement>({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover<HTMLInputElement>({
    isDisabled,
  });

  const inputRef = inputProps?.ref;
  const inputRefs = useMergeRefs<HTMLInputElement>([
    inputRef,
    focusVisibleRef,
    pressRef,
    hoverRef,
  ]);
  const layoutId = useId();

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled) {
        setIsChecked(event.target.checked);
      }
    },
    [isDisabled, setIsChecked],
  );

  const getRootProps = useCallback(
    (): SwitchRoot.Props => ({
      ...elementProps,
      className,
      "data-slot": "root",
      "data-component": "switch",
      "data-checked": dataAttr(isChecked),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-disabled": dataAttr(isDisabled),
      "data-hovered": dataAttr(isHovered),
    }),
    [
      elementProps,
      className,
      isChecked,
      isDisabled,
      isFocusVisible,
      isPressed,
      isHovered,
    ],
  );

  const getInputProps: PropGetter<SwitchInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, inputProps, {
        onChange: handleInputChange,
      }),
      ref: inputRefs,
      type: "checkbox",
      "data-slot": "input",
      disabled: isDisabled,
    }),
    [handleInputChange, inputProps, inputRefs, isDisabled],
  );

  const getTrackProps: PropGetter<SwitchControl.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "track",
    }),
    [],
  );

  const getThumbProps: PropGetter<SwitchThumb.Props> = useCallback(
    (props) => ({
      ...props,
      layoutId: layoutId,
      "data-slot": "thumb",
    }),
    [layoutId],
  );

  const getContentProps: PropGetter<SwitchContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  return useMemo(
    () => ({
      isChecked,
      getRootProps,
      getThumbProps,
      getContentProps,
      getTrackProps,
      getInputProps,
    }),
    [
      isChecked,
      getRootProps,
      getThumbProps,
      getContentProps,
      getTrackProps,
      getInputProps,
    ],
  );
};

export namespace useSwitch {
  export interface Props extends SwitchRoot.Props {
    defaultChecked?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onCheckedChange?: (value: boolean) => void;
    children?: React.ReactNode;
    inputProps?: UIProps<"input">;
    name?: string;
    form?: string;
  }
}
