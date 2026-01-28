"use client";
import { useCallback, useMemo } from "react";

import { useSidebarState } from "./sidebar-state-provider";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Sidebar } from "./sidebar";
import type { SidebarBackdrop } from "./sidebar-backdrop";
import type { SidebarContent } from "./sidebar-content";
import type { SidebarFooter } from "./sidebar-footer";
import type { SidebarGroup } from "./sidebar-group";
import type { SidebarGroupLabel } from "./sidebar-group-label";
import type { SidebarHeader } from "./sidebar-header";
import { SidebarInset } from "./sidebar-inset";
import type { SidebarMenu } from "./sidebar-menu";
import type { SidebarMenuItem } from "./sidebar-menu-item";
import type { SidebarMenuItemButton } from "./sidebar-menu-item-button";
import { SidebarWrapper } from "./sidebar-wrapper";
import { SidebarContainer } from "./sidebar-container";

export const useSidebar = (props: useSidebar.Props) => {
  const { width = 250, ...elementProps } = props;
  const { toggleSidebar } = useSidebarState();

  const getWrapperProps = useCallback(
    (): SidebarWrapper.Props => ({
      ...elementProps,
      style: {
        ...elementProps.style,
        "--width": `${width}px`,
      } as React.CSSProperties,
      "data-slot": "wrapper",
    }),
    [width, elementProps],
  );

  const getSidebarProps: PropGetter<Sidebar.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "root",
    }),
    [],
  );

  const getHeaderProps: PropGetter<SidebarHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "header",
    }),
    [],
  );

  const getContentProps: PropGetter<SidebarContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getBodyProps: PropGetter<SidebarContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "body",
    }),
    [],
  );

  const getGroupProps: PropGetter<SidebarGroup.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "group",
    }),
    [],
  );

  const getGroupLabelProps: PropGetter<SidebarGroupLabel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "group-label",
    }),
    [],
  );

  const getMenuProps: PropGetter<SidebarMenu.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "menu",
    }),
    [],
  );

  const getMenuItemProps: PropGetter<SidebarMenuItem.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "menu-item",
    }),
    [],
  );

  const getFooterProps: PropGetter<SidebarFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "footer",
    }),
    [],
  );

  const getMenuItemButtonProps: PropGetter<SidebarMenuItemButton.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": "menu-item-button",
      }),
      [],
    );

  const getBackdropProps: PropGetter<SidebarBackdrop.Props> = useCallback(
    (props) => ({
      ...props,
      onClick: () => toggleSidebar(),
      "data-slot": "backdrop",
    }),
    [toggleSidebar],
  );

  const getInsetProps: PropGetter<SidebarInset.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "inset",
    }),
    [],
  );

  const getContainerProps: PropGetter<SidebarContainer.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "container",
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps: getSidebarProps,
      getHeaderProps,
      getContentProps,
      getGroupProps,
      getGroupLabelProps,
      getMenuProps,
      getMenuItemProps,
      getFooterProps,
      getMenuItemButtonProps,
      getBackdropProps,
      getBodyProps,
      getInsetProps,
      getWrapperProps,
      getContainerProps,
    }),
    [
      getSidebarProps,
      getHeaderProps,
      getContentProps,
      getGroupProps,
      getGroupLabelProps,
      getMenuProps,
      getMenuItemProps,
      getFooterProps,
      getMenuItemButtonProps,
      getBackdropProps,
      getBodyProps,
      getInsetProps,
      getWrapperProps,
      getContainerProps,
    ],
  );
};

export namespace useSidebar {
  export interface Props extends UIProps<"div"> {
    width?: number;
  }
}
