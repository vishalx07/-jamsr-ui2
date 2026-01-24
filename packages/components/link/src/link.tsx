"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { useLink } from "./use-link";

export const Link = (props: Link.Props) => {
  const ctx = useLink(props);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("a", {
    props: [getRootProps({})],
  });
  return renderElement;
};

export namespace Link {
  export interface Props extends useLink.Props {}
}
