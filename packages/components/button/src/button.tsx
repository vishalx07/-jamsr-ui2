"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { ButtonContext } from "./button-context";
import { useButton } from "./use-button";

export const ButtonRoot = (props: ButtonRoot.Props) => {
  const ctx = useButton(props);
  const { getButtonProps } = ctx;

  const button = useRenderElement("button", {
    props: [getButtonProps({}), { children: props.children }],
  });
  return <ButtonContext value={ctx}>{button}</ButtonContext>;
};

export namespace ButtonRoot {
  export interface Props extends useButton.Props {}
}
