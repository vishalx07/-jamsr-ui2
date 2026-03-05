"use client";
import { useCallback, useMemo } from "react";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import type {
  FloatingFocusManagerProps,
  FloatingOverlay,
} from "@floating-ui/react";
import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { DialogBody } from "./dialog-body";
import type { DialogContainer } from "./dialog-container";
import type { DialogContent } from "./dialog-content";
import type { DialogFooter } from "./dialog-footer";
import type { DialogHeader } from "./dialog-header";

export const useDialog = (props: useDialog.Props) => {
  const {
    defaultOpen,
    disableAnimation = false,
    isDismissible = true,
    isKeyboardDismissible = true,
    isOpen: isOpenProp,
    onOpenChange,
    hideCloseButton,
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
  const click = useClick(context, {});
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePress: isDismissible,
    outsidePressEvent: "click",
    enabled: true,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getReferenceProps, getFloatingProps } = interactions;

  const getBackdropProps = useCallback(() => {}, []);

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getHeaderProps: PropGetter<DialogHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "header",
    }),
    [],
  );

  const getBodyProps: PropGetter<DialogBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "body",
    }),
    [],
  );

  const getPositionerProps: PropGetter<DialogContainer.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "container",
      ref: setFloating,
      ...getFloatingProps(),
    }),
    [getFloatingProps, setFloating],
  );

  const getContentProps: PropGetter<DialogContent.Props> = useCallback(
    (props) => ({
      initial: { scale: 0.9, opacity: 0, filter: "blur(4px)" },
      animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
      exit: { scale: 0.9, opacity: 0, filter: "blur(4px)" },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getFooterProps: PropGetter<DialogFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "footer",
    }),
    [],
  );

  const getCloseButtonProps: PropGetter<ComponentProps<"button">> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "close-button",
      onClick: handleTriggerClose,
    }),
    [handleTriggerClose],
  );

  const getCloseTriggerProps: PropGetter<ComponentProps<"button">> =
    useCallback(
      (props) =>
        mergeProps<ComponentProps<"button">>(props, {
          onClick: handleTriggerClose,
        }),
      [handleTriggerClose],
    );

  const getTriggerProps = useCallback(
    () => ({
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, setReference],
  );

  const getOverlayProps = useCallback(
    (
      props: ComponentProps<typeof FloatingOverlay>,
    ): ComponentProps<typeof FloatingOverlay> => ({
      lockScroll: true,
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

  return useMemo(
    () => ({
      getBackdropProps,
      getHeaderProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getTriggerProps,
      getCloseTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      isOpen,
      hideCloseButton,
      getPositionerProps,
      getCloseButtonProps,
    }),
    [
      getBackdropProps,
      getHeaderProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getTriggerProps,
      getCloseTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      isOpen,
      hideCloseButton,
      getPositionerProps,
      getCloseButtonProps,
    ],
  );
};

export namespace useDialog {
  export interface Props {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
    disableAnimation?: boolean;
    hideCloseButton?: boolean;
  }
}
