import {
  Sidebar as SidebarRoot,
  SidebarBackdrop,
  SidebarBody,
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
  SidebarToggle,
  SidebarWrapper,
  useSidebarContext,
  useSidebarState,
} from "./sidebar";

export const Sidebar = Object.assign(SidebarRoot, {
  Backdrop: SidebarBackdrop,
  Body: SidebarBody,
  Container: SidebarContainer,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuItemButton: SidebarMenuItemButton,
  StateProvider: SidebarStateProvider,
  Toggle: SidebarToggle,
  Wrapper: SidebarWrapper,
});

export namespace Sidebar {
  export interface Props extends SidebarRoot.Props {}
  export interface Backdrop extends SidebarBackdrop.Props {}
  export interface Body extends SidebarBody.Props {}
  export interface Container extends SidebarContainer.Props {}
  export interface Content extends SidebarContent.Props {}
  export interface Footer extends SidebarFooter.Props {}
  export interface Group extends SidebarGroup.Props {}
  export interface GroupLabel extends SidebarGroupLabel.Props {}
  export interface Header extends SidebarHeader.Props {}
  export interface Inset extends SidebarInset.Props {}
  export interface Menu extends SidebarMenu.Props {}
  export interface MenuItem extends SidebarMenuItem.Props {}
  export interface MenuItemButton extends SidebarMenuItemButton.Props {}
  export interface StateProvider extends SidebarStateProvider.Props {}
  export interface Toggle extends SidebarToggle.Props {}
  export interface Wrapper extends SidebarWrapper.Props {}
}

export {
  SidebarBackdrop,
  SidebarBody,
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
  SidebarStateProvider,
  SidebarToggle,
  SidebarWrapper,
  useSidebarContext,
  useSidebarState,
};
