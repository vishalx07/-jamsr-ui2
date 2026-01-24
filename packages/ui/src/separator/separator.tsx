"use client";

import { Separator as SeparatorUI } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { separatorStyles } from "./styles";

type SeparatorVariants = VariantProps<typeof separatorStyles>;

export const Separator = (props: Separator.Props) => {
  const { orientation, variant, className, ...restProps } = props;
  const styles = separatorStyles({ orientation, variant, className });
  return <SeparatorUI {...restProps} className={styles} />;
};

export namespace Separator {
  export interface Props extends SeparatorUI.Props, SeparatorVariants {}
}
