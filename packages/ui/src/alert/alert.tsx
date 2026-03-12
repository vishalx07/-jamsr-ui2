"use client";

import { createContext, use, useMemo } from "react";

import { Alert as AlertUI } from "@jamsrui/react";

import { alertStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

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
        className={styles.root({ className })}
        status={status}
      />
    </AlertContext>
  );
};

export namespace Alert {
  export interface Props extends AlertUI.Props, AlertVariants {}
}

export const AlertContent = (props: AlertContent.Props) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};

export const AlertIcon = (props: AlertIcon.Props) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Icon
      {...props}
      className={styles.icon({ className: props.className })}
    />
  );
};

export const AlertTitle = (props: AlertTitle.Props) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Title
      {...props}
      className={styles.title({ className: props.className })}
    />
  );
};

export const AlertDescription = (props: AlertDescription.Props) => {
  const { styles } = useAlertContext();
  return (
    <AlertUI.Description
      {...props}
      className={styles.description({ className: props.className })}
    />
  );
};

export namespace AlertContent {
  export interface Props extends AlertUI.Content {}
}

export namespace AlertIcon {
  export interface Props extends AlertUI.Icon {}
}

export namespace AlertTitle {
  export interface Props extends AlertUI.Title {}
}

export namespace AlertDescription {
  export interface Props extends AlertUI.Description {}
}
