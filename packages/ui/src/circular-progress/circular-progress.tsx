import { CircularProgress as CircularProgressUI } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { circularProgressStyles } from "./styles";

type CircularProgressVariants = VariantProps<typeof circularProgressStyles>;

export const CircularProgress = (props: CircularProgress.Props) => {
  const { isIntermediate, color, className, ...restProps } = props;
  const styles = circularProgressStyles({ isIntermediate, color });
  return (
    <CircularProgressUI
      {...restProps}
      isIntermediate={isIntermediate}
      className={styles.root({ className })}
    />
  );
};

export namespace CircularProgress {
  export interface Props
    extends Omit<CircularProgressUI.Props, "color">, CircularProgressVariants {}
}
