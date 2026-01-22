"use client";

import {
  Textarea as TextareaUI,
  useInputGroupContextOpt,
} from "@jamsrui/react";
import { inputGroupInputStyles, inputStyles } from "../input/styles";
import type { TextareaVariants } from "./styles";

export const Textarea = (props: Textarea.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const ctx = useInputGroupContextOpt();
  const styles = ctx
    ? inputGroupInputStyles({ variant, className })
    : inputStyles({ variant, size, radius, isInvalid, className });
  return <TextareaUI {...restProps} className={styles} />;
};

export namespace Textarea {
  export interface Props extends TextareaUI.Props, TextareaVariants {}
}
