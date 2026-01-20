import { Checkbox as CheckboxUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { checkboxStyles } from "./styles";

type CheckboxVariants = VariantProps<typeof checkboxStyles>;

export const Checkbox = (props: Checkbox.Props) => {
  const { size, radius, isInvalid, className, ...restProps } = props;
  const styles = checkboxStyles({ size, radius, isInvalid });
  return <CheckboxUI {...restProps} className={cn(styles.root(), className)} />;
};

export namespace Checkbox {
  export interface Props extends CheckboxUI.Props, CheckboxVariants {}
}

export const CheckboxControl = (props: CheckboxUI.Control) => {
  const styles = checkboxStyles();
  return (
    <CheckboxUI.Control
      {...props}
      className={cn(styles.control(), props.className)}
    />
  );
};

export const CheckboxIndicator = (props: CheckboxUI.Indicator) => {
  const styles = checkboxStyles();
  return (
    <CheckboxUI.Indicator
      {...props}
      className={cn(styles.indicator(), props.className)}
    />
  );
};

export const CheckboxContent = (props: CheckboxUI.Content) => {
  const styles = checkboxStyles();
  return (
    <CheckboxUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};
