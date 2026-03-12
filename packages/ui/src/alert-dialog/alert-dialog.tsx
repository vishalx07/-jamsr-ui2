"use client";

import { createContext, use, useMemo } from "react";

import { AlertDialog as AlertDialogUI } from "@jamsrui/react";

import { alertDialogStyles } from "./styles";
import { Button } from "../button";

import type { VariantProps } from "tailwind-variants";

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
  const { radius, backdrop, size, ...restProps } = props;
  const styles = alertDialogStyles({ radius, backdrop, size });
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
  return (
    <AlertDialogUI.Backdrop
      {...props}
      className={styles.backdrop({ className: props.className })}
    />
  );
};

export const AlertDialogContent = (props: AlertDialogContent.Props) => {
  const { styles } = useAlertDialogContext();
  const { slotProps, ...restProps } = props;
  return (
    <AlertDialogBackdrop {...slotProps?.backdrop}>
      <AlertDialogUI.Positioner
        {...slotProps?.positioner}
        className={styles.positioner({
          className: slotProps?.positioner?.className,
        })}
      >
        <AlertDialogUI.Content
          {...restProps}
          className={styles.content({ className: restProps.className })}
        />
      </AlertDialogUI.Positioner>
    </AlertDialogBackdrop>
  );
};
export namespace AlertDialogContent {
  export interface Props extends AlertDialogUI.Content {
    slotProps?: {
      backdrop?: AlertDialogUI.Backdrop;
      positioner?: AlertDialogUI.Positioner;
    };
  }
}

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

export const AlertDialogCancel = (props: Button.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Cancel
      render={
        <Button
          color="default"
          variant="solid"
          {...props}
          className={styles.cancel({ className: props.className })}
        />
      }
    />
  );
};

export const AlertDialogAction = (props: Button.Props) => {
  const { styles } = useAlertDialogContext();
  console.log({ props });
  return (
    <AlertDialogUI.Cancel
      render={
        <Button
          color="danger"
          variant="solid"
          {...props}
          className={styles.action({ className: props.className })}
        />
      }
    />
  );
};
