import { Dialog as DialogUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { dialogStyles } from "./styles";

type DialogVariants = VariantProps<typeof dialogStyles>;

export const Dialog = (props: Dialog.Props) => {
  const {
    radius,
    fullWidth,
    backdrop,
    isBordered,
    scrollBehavior,
    ...restProps
  } = props;
  return <DialogUI {...restProps} />;
};

export namespace Dialog {
  export interface Props extends DialogUI.Props, DialogVariants {}
}

export const DialogTrigger = (props: DialogUI.Trigger) => {
  return <DialogUI.Trigger {...props} />;
};

export const DialogContent = (props: DialogUI.Content) => {
  const styles = dialogStyles();
  return (
    <DialogUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};

export const DialogHeader = (props: DialogUI.Header) => {
  const styles = dialogStyles();
  return (
    <DialogUI.Header
      {...props}
      className={cn(styles.header(), props.className)}
    />
  );
};

export const DialogBody = (props: DialogUI.Body) => {
  const styles = dialogStyles();
  return (
    <DialogUI.Body {...props} className={cn(styles.body(), props.className)} />
  );
};

export const DialogFooter = (props: DialogUI.Footer) => {
  const styles = dialogStyles();
  return (
    <DialogUI.Footer
      {...props}
      className={cn(styles.footer(), props.className)}
    />
  );
};

export const DialogCloseButton = (props: DialogUI.CloseTrigger) => {
  const styles = dialogStyles();
  return (
    <DialogUI.CloseButton
      {...props}
      className={cn(styles.closeButton(), props.className)}
    />
  );
};

export const DialogCloseTrigger = (props: DialogUI.CloseTrigger) => {
  return <DialogUI.CloseTrigger {...props} />;
};

export const DialogContainer = (props: DialogUI.Container) => {
  const styles = dialogStyles();
  return (
    <DialogUI.Container
      {...props}
      className={cn(styles.container(), props.className)}
    />
  );
};
