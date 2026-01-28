import { Text as TextUI } from "@jamsrui/react";

import { textStyles } from "./styles";

import type { TextVariants } from "./styles";

export const Text = (props: Text.Props) => {
  const { variant, leading, className, ...restProps } = props;
  const styles = textStyles({ variant, leading, className });

  return <TextUI {...restProps} className={styles} />;
};

export namespace Text {
  export interface Props extends TextUI.Props, TextVariants {}
}
