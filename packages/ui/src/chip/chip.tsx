import { Chip as ChipUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { chipStyles } from "./styles";

type ChipVariants = VariantProps<typeof chipStyles>;

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
  return <ChipUI {...restProps} className={cn(styles.root(), className)} />;
};

export namespace Chip {
  export interface Props extends ChipUI.Props, ChipVariants {}
}

export const ChipDot = (props: ChipUI.Dot) => {
  const styles = chipStyles();
  return (
    <ChipUI.Dot {...props} className={cn(styles.dot(), props.className)} />
  );
};
