import { Textarea as TextareaUI } from "@jamsrui/react";
import { textareaStyles } from "./styles";
import type { TextareaVariants } from "./styles";

export const Textarea = (props: Textarea.Props) => {
  const { variant, size, radius, isInvalid, className, ...restProps } = props;
  const styles = textareaStyles({
    variant,
    size,
    radius,
    isInvalid,
    className,
  });

  return <TextareaUI {...restProps} className={styles} />;
};

export namespace Textarea {
  export interface Props extends TextareaUI.Props, TextareaVariants {}
}
