"use client";
import { useCallback, useMemo, useState } from "react";

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";

import type { Delay, FloatingArrowProps, Placement } from "@floating-ui/react";
import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps, PropsWithChildren } from "react";

import type { TooltipContent } from "./tooltip-content";
import { TooltipPositioner } from "./tooltip-positioner";

export const useTooltip = (props: useTooltip.Props) => {
  const {
    delay: delayProp,
    offset: offsetProp = 4,
    placement = "top",
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange,
    disabled: isDisabled = false,
    ...restProps
  } = props;
  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const [arrowEl, setArrowEl] = useState<SVGSVGElement | null>(null);
  const showArrow = !!arrowEl;
  const arrowHeight = showArrow ? 7 : 0;

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetProp + arrowHeight),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      arrow({ element: arrowEl }),
    ],
  });

  const { delay: delayGroup } = useDelayGroup(context);

  let openDelay = 400;
  let closeDelay = 100;
  if (typeof delayProp === "number") {
    openDelay = delayProp;
    closeDelay = delayProp;
  } else if (typeof delayProp === "object") {
    openDelay = delayProp.open ?? openDelay;
    closeDelay = delayProp.close ?? closeDelay;
  }
  if (typeof delayGroup === "number" && delayGroup > 0) {
    openDelay = delayGroup;
    closeDelay = delayGroup;
  } else if (typeof delayGroup === "object") {
    openDelay = delayGroup.open ?? openDelay;
    closeDelay = delayGroup.close ?? closeDelay;
  }

  const hover = useHover(context, {
    move: false,
    handleClose: safePolygon({ blockPointerEvents: true }),
    delay: {
      close: closeDelay,
      open: openDelay,
    },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const getPositionerProps: PropGetter<TooltipPositioner.Props> = useCallback(
    (props) => ({
      ...props,
      style: floatingStyles,
      ref: refs.setFloating,
      ...getFloatingProps(),
    }),
    [floatingStyles, getFloatingProps, refs.setFloating],
  );

  const getContentProps: PropGetter<TooltipContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getArrowProps = useCallback(
    (props: Partial<FloatingArrowProps>): FloatingArrowProps => ({
      tipRadius: 4,
      ...props,
      context,
      ref: setArrowEl,
    }),
    [context],
  );

  const getTriggerProps = useCallback(
    (props: ComponentProps<"button">) => ({
      ...props,
      ...getReferenceProps({
        ref: refs.setReference,
      }),
    }),
    [getReferenceProps, refs.setReference],
  );

  return useMemo(
    () => ({
      getContentProps,
      getArrowProps,
      getPositionerProps,
      isOpen,
      showArrow,
      getTriggerProps,
      isDisabled,
    }),
    [
      getContentProps,
      getArrowProps,
      getPositionerProps,
      isOpen,
      showArrow,
      getTriggerProps,
      isDisabled,
    ],
  );
};

export namespace useTooltip {
  export interface Props extends PropsWithChildren {
    placement?: Placement;
    disabled?: boolean;
    offset?: number;
    delay?: Delay;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
  }
}
