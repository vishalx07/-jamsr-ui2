"use client";

import { Dialog as DialogUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { dialogStyles } from "./styles";
import { createContext, use, useMemo } from "react";
import { IconButton } from "../icon-button";
import { CloseIcon } from "@jamsrui/icons";

type DialogVariants = VariantProps<typeof dialogStyles>;

const DialogContext = createContext<{
  styles: ReturnType<typeof dialogStyles>;
} | null>(null);

const useDialogContext = () => {
  const ctx = use(DialogContext);
  if (!ctx) {
    throw new Error("useDialogContext must be used within a DialogContext");
  }
  return ctx;
};

export const Dialog = (props: Dialog.Props) => {
  const {
    radius,
    fullWidth,
    backdrop,
    isBordered,
    scrollBehavior,
    ...restProps
  } = props;
  const styles = dialogStyles({
    backdrop,
    isBordered,
    scrollBehavior,
    fullWidth,
    radius,
  });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <DialogUI {...restProps}>
      <DialogContext value={value}>{props.children}</DialogContext>
    </DialogUI>
  );
};

export namespace Dialog {
  export interface Props extends DialogUI.Props, DialogVariants {}
}

export const DialogTrigger = (props: DialogUI.Trigger) => {
  return <DialogUI.Trigger {...props} />;
};

export const DialogContent = (props: DialogUI.Content) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Portal>
      <DialogUI.Backdrop className={styles.backdrop()}>
        <DialogUI.Container className={styles.container()}>
          <DialogUI.Content
            {...props}
            className={styles.content({ className: props.className })}
          />
        </DialogUI.Container>
      </DialogUI.Backdrop>
    </DialogUI.Portal>
  );
};

export const DialogHeader = (props: DialogUI.Header) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Header
      {...props}
      className={cn(styles.header(), props.className)}
    />
  );
};

export const DialogBody = (props: DialogUI.Body) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Body {...props} className={cn(styles.body(), props.className)} />
  );
};

export const DialogFooter = (props: DialogUI.Footer) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Footer
      {...props}
      className={cn(styles.footer(), props.className)}
    />
  );
};

export const DialogCloseButton = (props: Partial<IconButton.Props>) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.CloseButton>
      <IconButton
        label="Close Dialog"
        size="sm"
        radius="full"
        {...props}
        className={styles.closeButton({ className: props.className })}
      >
        <CloseIcon className="size-4" />
      </IconButton>
    </DialogUI.CloseButton>
  );
};

export const DialogCloseTrigger = (props: DialogUI.CloseTrigger) => {
  return <DialogUI.CloseTrigger {...props} />;
};

export const DialogContainer = (props: DialogUI.Container) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Container
      {...props}
      className={cn(styles.container(), props.className)}
    />
  );
};
