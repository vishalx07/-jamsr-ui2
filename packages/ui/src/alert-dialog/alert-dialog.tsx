"use client";

import { AlertDialog as AlertDialogUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { alertDialogStyles } from "./styles";
import { Button } from "../button";

type AlertDialogVariants = VariantProps<typeof alertDialogStyles>;

const AlertDialogContext = createContext<{
  styles: ReturnType<typeof alertDialogStyles>;
} | null>(null);

const useAlertDialogContext = () => {
  const ctx = use(AlertDialogContext);
  if (!ctx) {
    throw new Error("useAlertDialogContext must be used within an AlertDialog");
  }
  return ctx;
};

export const AlertDialog = (props: AlertDialog.Props) => {
  const { radius, backdrop, ...restProps } = props;
  const styles = alertDialogStyles({ radius, backdrop });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AlertDialogContext value={value}>
      <AlertDialogUI {...restProps} />
    </AlertDialogContext>
  );
};

export namespace AlertDialog {
  export interface Props extends AlertDialogUI.Props, AlertDialogVariants {}
}

export const AlertDialogTrigger = (props: AlertDialogUI.Trigger) => {
  return <AlertDialogUI.Trigger {...props} />;
};

const AlertDialogBackdrop = (props: AlertDialogUI.Backdrop) => {
  const { styles } = useAlertDialogContext();
  return <AlertDialogUI.Backdrop {...props} className={styles.backdrop()} />;
};

export const AlertDialogContent = (props: AlertDialogUI.Content) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogBackdrop>
      <AlertDialogUI.Container className={styles.container()}>
        <AlertDialogUI.Content
          {...props}
          className={styles.content({ className: props.className })}
        />
      </AlertDialogUI.Container>
    </AlertDialogBackdrop>
  );
};

export const AlertDialogBody = (props: AlertDialogUI.Body) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Body
      {...props}
      className={styles.body({ className: props.className })}
    />
  );
};

export const AlertDialogFooter = (props: AlertDialogUI.Footer) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};

export const AlertDialogTitle = (props: AlertDialogUI.Title) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Title
      {...props}
      className={styles.title({ className: props.className })}
    />
  );
};

export const AlertDialogDescription = (props: AlertDialogUI.Description) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Description
      {...props}
      className={styles.description({ className: props.className })}
    />
  );
};

export const AlertDialogCancel = (props: AlertDialogUI.Cancel) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Cancel
      render={<Button color="default" variant="soft" />}
      {...props}
      className={styles.cancel({ className: props.className })}
    />
  );
};

export const AlertDialogAction = (props: AlertDialogUI.Action) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Action
      render={<Button color="danger" variant="solid" />}
      {...props}
      className={styles.action({ className: props.className })}
    />
  );
};
