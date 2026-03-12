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

export const AlertDialogTrigger = (props: AlertDialogTrigger.Props) => {
  return <AlertDialogUI.Trigger {...props} />;
};
export namespace AlertDialogTrigger {
  export interface Props extends AlertDialogUI.Trigger {}
}

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

export const AlertDialogBody = (props: AlertDialogBody.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Body
      {...props}
      className={styles.body({ className: props.className })}
    />
  );
};

export const AlertDialogFooter = (props: AlertDialogFooter.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};

export const AlertDialogTitle = (props: AlertDialogTitle.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Title
      {...props}
      className={styles.title({ className: props.className })}
    />
  );
};

export const AlertDialogDescription = (props: AlertDialogDescription.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <AlertDialogUI.Description
      {...props}
      className={styles.description({ className: props.className })}
    />
  );
};

export const AlertDialogCancel = (props: AlertDialogCancel.Props) => {
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

export const AlertDialogAction = (props: AlertDialogAction.Props) => {
  const { styles } = useAlertDialogContext();
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

export namespace AlertDialogBody {
  export interface Props extends AlertDialogUI.Body {}
}

export namespace AlertDialogFooter {
  export interface Props extends AlertDialogUI.Footer {}
}

export namespace AlertDialogTitle {
  export interface Props extends AlertDialogUI.Title {}
}

export namespace AlertDialogDescription {
  export interface Props extends AlertDialogUI.Description {}
}

export namespace AlertDialogCancel {
  export interface Props extends Button.Props {}
}

export namespace AlertDialogAction {
  export interface Props extends Button.Props {}
}
