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
import type { Text } from "@jamsrui/text";
import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { AlertDialogBody } from "./alert-dialog-body";
import type { AlertDialogCancel } from "./alert-dialog-cancel";
import type { AlertDialogPositioner } from "./alert-dialog-container";
import type { AlertDialogContent } from "./alert-dialog-content";
import type { AlertDialogFooter } from "./alert-dialog-footer";
import type { AlertDialogTitle } from "./alert-dialog-title";

export const useAlertDialog = (props: useAlertDialog.Props) => {
  const {
    defaultOpen,
    isDismissible = false,
    isKeyboardDismissible = true,
    isOpen: isOpenProp,
    onOpenChange,
    ...restProps
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

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getPositionerProps: PropGetter<AlertDialogPositioner.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": "container",
        ref: setFloating,
        ...getFloatingProps(),
      }),
      [getFloatingProps, setFloating],
    );

  const getContentProps: PropGetter<AlertDialogContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getBodyProps: PropGetter<AlertDialogBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "body",
    }),
    [],
  );

  const getFooterProps: PropGetter<AlertDialogFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "footer",
    }),
    [],
  );

  const getTitleProps: PropGetter<AlertDialogTitle.Props> = useCallback(
    (props) => ({
      variant: "h6",
      "data-slot": "title",
      ...props,
    }),
    [],
  );

  const getDescriptionProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      variant: "paragraph2",
      "data-slot": "description",
      ...props,
    }),
    [],
  );

  const getTriggerProps = useCallback(
    (props: Partial<ComponentProps<"button">>): ComponentProps<"button"> => ({
      ...props,
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, setReference],
  );

  const getCancelProps: PropGetter<AlertDialogCancel.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onClick: handleTriggerClose,
      }),
    }),
    [handleTriggerClose],
  );

  const getOverlayProps = useCallback(
    (): ComponentProps<typeof FloatingOverlay> => ({
      lockScroll: true,
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
      getPositionerProps,
      getContentProps,
      getBodyProps,
      getFooterProps,
      getTitleProps,
      getDescriptionProps,
      getTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      getCancelProps,
      isOpen,
    }),
    [
      getPositionerProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getTitleProps,
      getDescriptionProps,
      getTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      getCancelProps,
      isOpen,
    ],
  );
};

export namespace useAlertDialog {
  export interface Props {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
  }
}
