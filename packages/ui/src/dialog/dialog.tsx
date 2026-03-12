"use client";

import { createContext, use, useMemo } from "react";

import { CloseIcon } from "@jamsrui/icons";
import { Dialog as DialogUI } from "@jamsrui/react";

import { dialogStyles } from "./styles";
import { IconButton } from "../icon-button";

import type { VariantProps } from "tailwind-variants";

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

export const DialogTrigger = (props: DialogTrigger.Props) => {
  return <DialogUI.Trigger {...props} />;
};

export const DialogContent = (props: DialogContent.Props) => {
  const { styles } = useDialogContext();
  const { slotProps, ...restProps } = props;
  return (
    <DialogUI.Portal {...slotProps?.portal}>
      <DialogUI.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: slotProps?.backdrop?.className,
        })}
      >
        <DialogUI.Positioner
          {...slotProps?.positioner}
          className={styles.positioner({
            className: slotProps?.positioner?.className,
          })}
        >
          <DialogUI.Content
            {...restProps}
            className={styles.content({ className: restProps.className })}
          />
        </DialogUI.Positioner>
      </DialogUI.Backdrop>
    </DialogUI.Portal>
  );
};
export namespace DialogContent {
  export interface Props extends DialogUI.Content {
    slotProps?: {
      portal?: React.ComponentProps<typeof DialogUI.Portal>;
      backdrop?: React.ComponentProps<typeof DialogUI.Backdrop>;
      positioner?: React.ComponentProps<typeof DialogUI.Positioner>;
    };
  }
}

export const DialogHeader = (props: DialogHeader.Props) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Header
      {...props}
      className={styles.header({ className: props.className })}
    />
  );
};

export const DialogBody = (props: DialogBody.Props) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Body
      {...props}
      className={styles.body({ className: props.className })}
    />
  );
};

export const DialogFooter = (props: DialogFooter.Props) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};

export const DialogCloseButton = (props: DialogCloseButton.Props) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.CloseButton>
      <IconButton
        label="Close Dialog"
        radius="full"
        size="sm"
        {...props}
        className={styles.closeButton({ className: props.className })}
      >
        <CloseIcon className="size-4" />
      </IconButton>
    </DialogUI.CloseButton>
  );
};

export const DialogCloseTrigger = (props: DialogCloseTrigger.Props) => {
  return <DialogUI.CloseTrigger {...props} />;
};

export const DialogPositioner = (props: DialogPositioner.Props) => {
  const { styles } = useDialogContext();
  return (
    <DialogUI.Positioner
      {...props}
      className={styles.positioner({ className: props.className })}
    />
  );
};

export namespace DialogTrigger {
  export interface Props extends DialogUI.Trigger {}
}

export namespace DialogHeader {
  export interface Props extends DialogUI.Header {}
}

export namespace DialogBody {
  export interface Props extends DialogUI.Body {}
}

export namespace DialogFooter {
  export interface Props extends DialogUI.Footer {}
}

export namespace DialogCloseButton {
  export interface Props extends Partial<IconButton.Props> {}
}

export namespace DialogCloseTrigger {
  export interface Props extends DialogUI.CloseTrigger {}
}

export namespace DialogPositioner {
  export interface Props extends DialogUI.Positioner {}
}
