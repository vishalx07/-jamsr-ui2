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

import type { Sidebar as SidebarUI } from "@jamsrui/react";


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
  export interface Props extends SidebarUI.Props {}
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
