"use client";

import { Alert as AlertUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { alertStyles } from "./styles";

type AlertVariants = VariantProps<typeof alertStyles>;

const AlertContext = createContext<{
  styles: ReturnType<typeof alertStyles>;
} | null>(null);

const useAlertContext = () => {
  const ctx = use(AlertContext);
  if (!ctx) {
    throw new Error("useAlertContext must be used within an Alert");
  }
  return ctx;
};

export const Alert = (props: Alert.Props) => {
  const { variant, status, className, ...restProps } = props;
  const styles = alertStyles({ variant, status });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AlertContext value={value}>
      <AlertUI
        {...restProps}
        status={status}
        className={styles.root({ className })}
      />
    </AlertContext>
  );
};

export namespace Alert {
  export interface Props extends AlertUI.Props, AlertVariants {}
}

export const AlertContent = (props: AlertUI.Content) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};

export const AlertIcon = (props: AlertUI.Icon) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Icon
      {...props}
      className={styles.icon({ className: props.className })}
    />
  );
};

export const AlertTitle = (props: AlertUI.Title) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Title
      {...props}
      className={styles.title({ className: props.className })}
    />
  );
};

export const AlertDescription = (props: AlertUI.Description) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Description
      {...props}
      className={styles.description({ className: props.className })}
    />
  );
};
