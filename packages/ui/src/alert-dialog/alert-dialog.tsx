import { AlertDialog as AlertDialogUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { alertDialogStyles } from "./styles";
import { Button } from "../button";

type AlertDialogVariants = VariantProps<typeof alertDialogStyles>;

export const AlertDialog = (props: AlertDialog.Props) => {
  const { radius, backdrop, ...restProps } = props;
  return <AlertDialogUI {...restProps} />;
};

export namespace AlertDialog {
  export interface Props extends AlertDialogUI.Props, AlertDialogVariants {}
}

export const AlertDialogTrigger = (props: AlertDialogUI.Trigger) => {
  return <AlertDialogUI.Trigger {...props} />;
};

const AlertDialogBackdrop = (props: AlertDialogUI.Backdrop) => {
  const styles = alertDialogStyles();
  return <AlertDialogUI.Backdrop {...props} className={styles.backdrop()} />;
};

export const AlertDialogContent = (props: AlertDialogUI.Content) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogBackdrop>
      <AlertDialogUI.Container className={styles.container()}>
        <AlertDialogUI.Content
          {...props}
          className={cn(styles.content(), props.className)}
        />
      </AlertDialogUI.Container>
    </AlertDialogBackdrop>
  );
};

export const AlertDialogBody = (props: AlertDialogUI.Body) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogUI.Body
      {...props}
      className={cn(styles.body(), props.className)}
    />
  );
};

export const AlertDialogFooter = (props: AlertDialogUI.Footer) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogUI.Footer
      {...props}
      className={cn(styles.footer(), props.className)}
    />
  );
};

export const AlertDialogTitle = (props: AlertDialogUI.Title) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogUI.Title
      {...props}
      className={cn(styles.title(), props.className)}
    />
  );
};

export const AlertDialogDescription = (props: AlertDialogUI.Description) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogUI.Description
      {...props}
      className={cn(styles.description(), props.className)}
    />
  );
};

export const AlertDialogCancel = (props: AlertDialogUI.Cancel) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogUI.Cancel
      render={<Button color="default" variant="soft" />}
      {...props}
      className={cn(styles.cancel(), props.className)}
    />
  );
};

export const AlertDialogAction = (props: AlertDialogUI.Action) => {
  const styles = alertDialogStyles();
  return (
    <AlertDialogUI.Action
      render={<Button color="danger" variant="solid" />}
      {...props}
      className={cn(styles.action(), props.className)}
    />
  );
};
