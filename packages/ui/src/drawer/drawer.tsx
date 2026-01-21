import { Drawer as DrawerUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { drawerStyles } from "./styles";

type DrawerVariants = VariantProps<typeof drawerStyles>;

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
  return <DrawerUI {...restProps} anchor={anchor} />;
};

export namespace Drawer {
  export interface Props extends DrawerUI.Props, DrawerVariants {}
}

export const DrawerTrigger = (props: DrawerUI.Trigger) => {
  return <DrawerUI.Trigger {...props} />;
};

export const DrawerContent = (props: DrawerUI.Content) => {
  const styles = drawerStyles();
  return (
    <DrawerUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};

export const DrawerHeader = (props: DrawerUI.Header) => {
  const styles = drawerStyles();
  return (
    <DrawerUI.Header
      {...props}
      className={cn(styles.header(), props.className)}
    />
  );
};

export const DrawerBody = (props: DrawerUI.Body) => {
  const styles = drawerStyles();
  return (
    <DrawerUI.Body {...props} className={cn(styles.body(), props.className)} />
  );
};

export const DrawerFooter = (props: DrawerUI.Footer) => {
  const styles = drawerStyles();
  return (
    <DrawerUI.Footer
      {...props}
      className={cn(styles.footer(), props.className)}
    />
  );
};

export const DrawerCloseButton = (props: DrawerUI.CloseButton) => {
  const styles = drawerStyles();
  return (
    <DrawerUI.CloseButton
      {...props}
      className={cn(styles.closeButton(), props.className)}
    />
  );
};

export const DrawerCloseTrigger = (props: DrawerUI.CloseTrigger) => {
  return <DrawerUI.CloseTrigger {...props} />;
};
