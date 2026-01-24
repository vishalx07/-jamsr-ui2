"use client";

import { Chip as ChipUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { chipStyles } from "./styles";

type ChipVariants = VariantProps<typeof chipStyles>;

const ChipContext = createContext<{
  styles: ReturnType<typeof chipStyles>;
} | null>(null);

const useChipContext = () => {
  const ctx = use(ChipContext);
  if (!ctx) {
    throw new Error("useChipContext must be used within a ChipContext");
  }
  return ctx;
};

export const Chip = (props: Chip.Props) => {
  const {
    variant,
    size,
    color,
    isSquare,
    isBordered,
    radius,
    className,
    ...restProps
  } = props;
  const styles = chipStyles({
    variant,
    size,
    color,
    isSquare,
    isBordered,
    radius,
  });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <ChipContext value={value}>
      <ChipUI {...restProps} className={styles.root({ className })} />
    </ChipContext>
  );
};

export namespace Chip {
  export interface Props extends ChipUI.Props, ChipVariants {}
}

export const ChipDot = (props: ChipUI.Dot) => {
  const { styles } = useChipContext();
  return (
    <ChipUI.Dot
      {...props}
      className={styles.dot({ className: props.className })}
    />
  );
};
