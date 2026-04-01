"use client";

import { cloneElement, isValidElement } from "react";

import { useDialogContext } from "./dialog-context";

import type { ComponentProps } from "react";

export const DialogCloseButton = (props: DialogCloseButton.Props) => {
  const { children } = props;
  const { getCloseButtonProps } = useDialogContext();

  if (isValidElement<ComponentProps<"button">>(children)) {
    return cloneElement(children, getCloseButtonProps(children.props));
  }

  console.warn("Invalid children passed to DialogCloseTrigger");
  return null;
};
export namespace DialogCloseButton {
  export interface Props {
    children: React.ReactElement;
  }
}
