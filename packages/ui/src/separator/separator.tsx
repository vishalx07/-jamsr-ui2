"use client";

import { Separator as SeparatorUI } from "@jamsrui/react";

import { separatorStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";


type SeparatorVariants = VariantProps<typeof separatorStyles>;

export const Separator = (props: Separator.Props) => {
  const { orientation, variant, className, ...restProps } = props;
  const styles = separatorStyles({ orientation, variant, className });
  return <SeparatorUI {...restProps} className={styles} />;
};

export namespace Separator {
  export interface Props extends SeparatorUI.Props, SeparatorVariants {}
}
