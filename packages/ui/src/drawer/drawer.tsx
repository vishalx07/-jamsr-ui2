"use client";

import { createContext, use, useMemo } from "react";

import { CloseIcon } from "@jamsrui/icons";
import { Drawer as DrawerUI } from "@jamsrui/react";

import { IconButton } from "../icon-button";
import { drawerStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

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

export const DrawerTrigger = (props: DrawerTrigger.Props) => {
  return <DrawerUI.Trigger {...props} />;
};

export const DrawerContent = (props: DrawerContent.Props) => {
  const { styles } = useDrawerContext();
  const { slotProps, ...restProps } = props;
  return (
    <DrawerUI.Portal {...slotProps?.portal}>
      <DrawerUI.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: slotProps?.backdrop?.className,
        })}
      >
        <DrawerUI.Positioner
          {...slotProps?.positioner}
          className={styles.positioner({
            className: slotProps?.positioner?.className,
          })}
        >
          <DrawerUI.Content
            {...restProps}
            className={styles.content({ className: restProps.className })}
          />
        </DrawerUI.Positioner>
      </DrawerUI.Backdrop>
    </DrawerUI.Portal>
  );
};
export namespace DrawerContent {
  export interface Props extends DrawerUI.Content {
    slotProps?: {
      portal?: React.ComponentProps<typeof DrawerUI.Portal>;
      backdrop?: React.ComponentProps<typeof DrawerUI.Backdrop>;
      positioner?: React.ComponentProps<typeof DrawerUI.Positioner>;
    };
  }
}

export const DrawerHeader = (props: DrawerHeader.Props) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Header
      {...props}
      className={styles.header({ className: props.className })}
    />
  );
};

export const DrawerBody = (props: DrawerBody.Props) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Body
      {...props}
      className={styles.body({ className: props.className })}
    />
  );
};

export const DrawerFooter = (props: DrawerFooter.Props) => {
  const { styles } = useDrawerContext();
  return (
    <DrawerUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};

export const DrawerCloseButton = (props: DrawerCloseButton.Props) => {
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

export const DrawerCloseTrigger = (props: DrawerCloseTrigger.Props) => {
  return <DrawerUI.CloseTrigger {...props} />;
};

export namespace DrawerTrigger {
  export interface Props extends DrawerUI.Trigger {}
}

export namespace DrawerHeader {
  export interface Props extends DrawerUI.Header {}
}

export namespace DrawerBody {
  export interface Props extends DrawerUI.Body {}
}

export namespace DrawerFooter {
  export interface Props extends DrawerUI.Footer {}
}

export namespace DrawerCloseButton {
  export interface Props extends IconButton.Props {}
}

export namespace DrawerCloseTrigger {
  export interface Props extends DrawerUI.CloseTrigger {}
}
