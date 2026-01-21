"use client";
import { ComponentProps, useCallback, useMemo } from "react";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev } from "@jamsrui/utils";

import type {
  FloatingFocusManagerProps,
  FloatingOverlay,
  FloatingOverlayProps,
} from "@floating-ui/react";
import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { DrawerBody } from "./drawer-body";
import type { DrawerContent } from "./drawer-content";
import type { DrawerFooter } from "./drawer-footer";
import type { DrawerHeader } from "./drawer-header";
import type { DrawerPopover } from "./drawer-popover";

type Anchor = "left" | "right" | "top" | "bottom";

export const useDrawer = (props: useDrawer.Props) => {
  const {
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange,
    isDismissible,
    isKeyboardDismissible,
    hideCloseButton = false,
    anchor = "right",
  } = props;

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

  const {
    context,
    refs: { setFloating, setReference },
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context, {
    enabled: true,
  });
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePressEvent: "click",
    outsidePress: isDismissible,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getFloatingProps, getReferenceProps } = interactions;

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getHeaderProps: PropGetter<DrawerHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("header"),
    }),
    [],
  );

  const getFooterProps: PropGetter<DrawerFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("footer"),
    }),
    [],
  );

  const getBodyProps: PropGetter<DrawerBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
    }),
    [],
  );

  const getPopoverProps: PropGetter<DrawerPopover.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("popover"),
      ref: setFloating,
      ...getFloatingProps(),
    }),
    [getFloatingProps, setFloating],
  );

  const getContentProps: PropGetter<DrawerContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      initial: {
        opacity: 0,
        x: "100%",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 30,
          mass: 0.9,
        },
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.2,
        },
      },
      exit: {
        opacity: 0,
        x: "100%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.6,
        },
      },
    }),
    [],
  );

  const getBackdropProps = useCallback(
    (
      props: ComponentProps<typeof FloatingOverlay>,
    ): FloatingOverlayProps & UIProps<"div"> => ({
      lockScroll: true,
      "data-slot": dataAttrDev("backdrop"),
      ...props,
    }),
    [],
  );

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: true,
    }),
    [context],
  );

  const getTriggerProps = useCallback(
    () => ({
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, setReference],
  );

  const getTriggerCloseProps = useCallback(
    () => ({
      onClick: handleTriggerClose,
    }),
    [handleTriggerClose],
  );

  return useMemo(
    () => ({
      getHeaderProps,
      getFooterProps,
      getBodyProps,
      getContentProps,
      getBackdropProps,
      getFocusManagerProps,
      getTriggerProps,
      getTriggerCloseProps,
      isOpen,
      getPopoverProps,
      hideCloseButton,
      anchor,
    }),
    [
      getHeaderProps,
      getFooterProps,
      getBodyProps,
      getContentProps,
      getBackdropProps,
      getFocusManagerProps,
      getTriggerProps,
      getTriggerCloseProps,
      isOpen,
      getPopoverProps,
      hideCloseButton,
      anchor,
    ],
  );
};

export namespace useDrawer {
  export interface Props {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
    hideCloseButton?: boolean;
    anchor?: Anchor;
  }
}
