import { Kbd as KbdUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";

import { kbdStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type KbdVariants = VariantProps<typeof kbdStyles>;

export const Kbd = (props: Kbd.Props) => {
  const { size, className, ...rest } = props;
  return <KbdUI {...rest} className={cn(kbdStyles({ size }), className)} />;
};

export namespace Kbd {
  export interface Props extends KbdUI.Props, KbdVariants {}
}
