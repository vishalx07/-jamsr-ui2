"use client";

import { useTooltipContext } from "./tooltip-context";

import { FloatingPortal, FloatingPortalProps } from "@floating-ui/react";

export const TooltipPortal = (props: TooltipPortal.Props) => {
  const { isOpen } = useTooltipContext();
  if (!isOpen) return null;
  return <FloatingPortal {...props} />;
};

export namespace TooltipPortal {
  export interface Props extends FloatingPortalProps {}
}
