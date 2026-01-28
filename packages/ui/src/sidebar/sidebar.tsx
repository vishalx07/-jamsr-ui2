import {
  Sidebar as SidebarUI,
  useSidebarContext,
  useSidebarState,
} from "@jamsrui/react";

import { sidebarStyles } from "./styles";

const styles = sidebarStyles();

export const SidebarWrapper = (props: SidebarUI.Wrapper) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Wrapper {...rest} className={styles.wrapper({ className })} />
  );
};

export const Sidebar = (props: SidebarUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI {...rest} className={styles.sidebar({ className })} />;
};

export const SidebarContainer = (props: SidebarUI.Container) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Container
      {...rest}
      className={styles.container({ className })}
    />
  );
};

export const SidebarContent = (props: SidebarUI.Content) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Content {...rest} className={styles.content({ className })} />
  );
};

export const SidebarHeader = (props: SidebarUI.Header) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Header {...rest} className={styles.header({ className })} />
  );
};

export const SidebarBody = (props: SidebarUI.Body) => {
  const { className, ...rest } = props;
  return <SidebarUI.Body {...rest} className={styles.body({ className })} />;
};

export const SidebarFooter = (props: SidebarUI.Footer) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Footer {...rest} className={styles.footer({ className })} />
  );
};

export const SidebarGroup = (props: SidebarUI.Group) => {
  const { className, ...rest } = props;
  return <SidebarUI.Group {...rest} className={styles.group({ className })} />;
};

export const SidebarGroupLabel = (props: SidebarUI.GroupLabel) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.GroupLabel
      {...rest}
      className={styles.groupLabel({ className })}
    />
  );
};

export const SidebarMenu = (props: SidebarUI.Menu) => {
  const { className, ...rest } = props;
  return <SidebarUI.Menu {...rest} className={styles.menu({ className })} />;
};

export const SidebarMenuItem = (props: SidebarUI.MenuItem) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.MenuItem {...rest} className={styles.menuItem({ className })} />
  );
};

export const SidebarMenuItemButton = (props: SidebarUI.MenuItemButton) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.MenuItemButton
      {...rest}
      className={styles.menuItemButton({ className })}
    />
  );
};

export const SidebarInset = (props: SidebarUI.Inset) => {
  const { className, ...rest } = props;
  return <SidebarUI.Inset {...rest} className={styles.inset({ className })} />;
};

export const SidebarBackdrop = (props: SidebarUI.Backdrop) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Backdrop {...rest} className={styles.backdrop({ className })} />
  );
};

export const SidebarToggle = (props: SidebarUI.Toggle) => {
  return <SidebarUI.Toggle {...props} />;
};

export { useSidebarContext, useSidebarState };
export const SidebarStateProvider: typeof SidebarUI.StateProvider =
  SidebarUI.StateProvider;
