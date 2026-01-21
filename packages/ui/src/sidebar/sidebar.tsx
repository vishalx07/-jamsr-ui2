import {
  Sidebar as SidebarUI,
  SidebarBackdrop as SidebarBackdropUI,
  SidebarBody as SidebarBodyUI,
  SidebarContainer as SidebarContainerUI,
  SidebarContent as SidebarContentUI,
  SidebarFooter as SidebarFooterUI,
  SidebarGroup as SidebarGroupUI,
  SidebarGroupLabel as SidebarGroupLabelUI,
  SidebarHeader as SidebarHeaderUI,
  SidebarInset as SidebarInsetUI,
  SidebarMenu as SidebarMenuUI,
  SidebarMenuItem as SidebarMenuItemUI,
  SidebarMenuItemButton as SidebarMenuItemButtonUI,
  SidebarStateProvider,
  SidebarToggle as SidebarToggleUI,
  SidebarWrapper as SidebarWrapperUI,
  useSidebarContext,
  useSidebarState,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { sidebarStyles } from "./styles";

const styles = sidebarStyles();

export const SidebarWrapper = (props: SidebarWrapperUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarWrapperUI {...rest} className={cn(styles.wrapper(), className)} />
  );
};

export const Sidebar = (props: SidebarUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI {...rest} className={cn(styles.sidebar(), className)} />;
};

export const SidebarContainer = (props: SidebarContainerUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarContainerUI
      {...rest}
      className={cn(styles.container(), className)}
    />
  );
};

export const SidebarContent = (props: SidebarContentUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarContentUI {...rest} className={cn(styles.content(), className)} />
  );
};

export const SidebarHeader = (props: SidebarHeaderUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarHeaderUI {...rest} className={cn(styles.header(), className)} />
  );
};

export const SidebarBody = (props: SidebarBodyUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarBodyUI {...rest} className={cn(styles.body(), className)} />;
};

export const SidebarFooter = (props: SidebarFooterUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarFooterUI {...rest} className={cn(styles.footer(), className)} />
  );
};

export const SidebarGroup = (props: SidebarGroupUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarGroupUI {...rest} className={cn(styles.group(), className)} />;
};

export const SidebarGroupLabel = (props: SidebarGroupLabelUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarGroupLabelUI
      {...rest}
      className={cn(styles.groupLabel(), className)}
    />
  );
};

export const SidebarMenu = (props: SidebarMenuUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarMenuUI {...rest} className={cn(styles.menu(), className)} />;
};

export const SidebarMenuItem = (props: SidebarMenuItemUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarMenuItemUI {...rest} className={cn(styles.menuItem(), className)} />
  );
};

export const SidebarMenuItemButton = (props: SidebarMenuItemButtonUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarMenuItemButtonUI
      {...rest}
      className={cn(styles.menuItemButton(), className)}
    />
  );
};

export const SidebarInset = (props: SidebarInsetUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarInsetUI {...rest} className={cn(styles.inset(), className)} />;
};

export const SidebarBackdrop = (props: SidebarBackdropUI.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarBackdropUI {...rest} className={cn(styles.backdrop(), className)} />
  );
};

export const SidebarToggle = (props: SidebarToggleUI.Props) => {
  return <SidebarToggleUI {...props} />;
};

export { SidebarStateProvider, useSidebarContext, useSidebarState };
