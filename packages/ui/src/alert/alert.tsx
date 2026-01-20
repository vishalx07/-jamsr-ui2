import { Alert as AlertUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { alertStyles } from "./styles";

type AlertVariants = VariantProps<typeof alertStyles>;

export const Alert = (props: Alert.Props) => {
  const { variant, status, className, ...restProps } = props;
  const styles = alertStyles({ variant, status });
  return (
    <AlertUI
      {...restProps}
      status={status}
      className={cn(styles.root(), className)}
    />
  );
};

export namespace Alert {
  export interface Props extends AlertUI.Props, AlertVariants {}
}

export const AlertContent = (props: AlertUI.Content) => {
  const styles = alertStyles();
  return (
    <AlertUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};

export const AlertIcon = (props: AlertUI.Icon) => {
  const styles = alertStyles();
  return (
    <AlertUI.Icon {...props} className={cn(styles.icon(), props.className)} />
  );
};

export const AlertTitle = (props: AlertUI.Title) => {
  const styles = alertStyles();
  return (
    <AlertUI.Title {...props} className={cn(styles.title(), props.className)} />
  );
};

export const AlertDescription = (props: AlertUI.Description) => {
  const styles = alertStyles();
  return (
    <AlertUI.Description
      {...props}
      className={cn(styles.description(), props.className)}
    />
  );
};
