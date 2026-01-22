"use client";

import { useMemo } from "react";

import { useRenderElement } from "@jamsrui/hooks";
import { dataAttr } from "@jamsrui/utils";

import { useOtpInputContext } from "./otp-input-context";

import type { UIProps } from "@jamsrui/utils";

export const OtpInputSlot = (props: OtpInputSlot.Props) => {
  const { slots } = useOtpInputContext();
  const { index, children: childrenProp, ...restProps } = props;

  const slot = slots[props.index];
  const isActive = slot?.isActive ?? false;
  const char = slot?.char ?? "";
  const placeholderChar = slot?.placeholderChar ?? "";

  const children = useMemo(() => {
    return childrenProp({ char, isActive, placeholderChar });
  }, [char, placeholderChar, isActive]);

  const renderElement = useRenderElement("div", {
    props: [
      {
        "data-slot": "slot",
        "data-active": dataAttr(isActive),
        children,
      },
      restProps,
    ],
  });
  return renderElement;
};

export namespace OtpInputSlot {
  export interface RenderProps {
    char: string | null;
    placeholderChar: string | undefined;
    isActive: boolean;
  }

  export interface Props extends Omit<UIProps<"div">, "children"> {
    index: number;
    children: (props: RenderProps) => React.ReactNode;
  }
}
