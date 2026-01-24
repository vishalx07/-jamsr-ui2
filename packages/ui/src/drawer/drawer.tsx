"use client";

import { CloseIcon } from "@jamsrui/icons";
import { Drawer as DrawerUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { IconButton } from "../icon-button";
import { drawerStyles } from "./styles";

type DrawerVariants = VariantProps<typeof drawerStyles>;

const DrawerContext = createContext<{
  styles: ReturnType<typeof drawerStyles>;
} | null>(null);

const useDrawerContext = () => {
  const ctx = use(DrawerContext);
  if (!ctx) {
    throw new Error("useDrawerContext must be used within a DrawerContext");
  }
  return ctx;
};

export const Drawer = (props: Drawer.Props) => {
  const {
    anchor,
    size,
    isBordered,
    scrollBehavior,
    backdrop,
    radius,
    ...restProps
  } = props;
  const styles = drawerStyles({
    anchor,
    size,
    isBordered,
    scrollBehavior,
    backdrop,
    radius,
  });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <DrawerContext value={value}>
      <DrawerUI {...restProps} anchor={anchor} />
    </DrawerContext>
  );
};

export namespace Drawer {
  export interface Props extends DrawerUI.Props, DrawerVariants {}
}

export const DrawerTrigger = (props: DrawerUI.Trigger) => {
  return <DrawerUI.Trigger {...props} />;
};

export const DrawerContent = (props: DrawerUI.Content) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Portal>
      <DrawerUI.Backdrop className={styles.backdrop()}>
        <DrawerUI.Popover className={styles.popover()}>
          <DrawerUI.Content
            {...props}
            className={styles.content({ className: props.className })}
          />
        </DrawerUI.Popover>
      </DrawerUI.Backdrop>
    </DrawerUI.Portal>
  );
};

export const DrawerHeader = (props: DrawerUI.Header) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Header
      {...props}
      className={styles.header({ className: props.className })}
    />
  );
};

export const DrawerBody = (props: DrawerUI.Body) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Body
      {...props}
      className={styles.body({ className: props.className })}
    />
  );
};

export const DrawerFooter = (props: DrawerUI.Footer) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};

export const DrawerCloseButton = (props: IconButton.Props) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.CloseTrigger>
      <IconButton
        {...props}
        className={styles.closeButton({ className: props.className })}
      >
        <CloseIcon />
      </IconButton>
    </DrawerUI.CloseTrigger>
  );
};

export const DrawerCloseTrigger = (props: DrawerUI.CloseTrigger) => {
  return <DrawerUI.CloseTrigger {...props} />;
};
