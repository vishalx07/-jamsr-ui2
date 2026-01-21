"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { ClipboardButton } from "./clipboard-button";
import { ClipboardContext } from "./clipboard-context";
import { useClipboard } from "./use-clipboard";

export const Clipboard = (props: Clipboard.Props) => {
  const ctx = useClipboard(props);
  const { getRootProps } = ctx;

  const { children } = props;
  const composedChildren = (
    <>
      {children}
      <ClipboardButton />
    </>
  );

  const renderElement = useRenderElement("label", {
    props: [getRootProps(), { children: composedChildren }],
  });
  return <ClipboardContext value={ctx}>{renderElement}</ClipboardContext>;
};

export namespace Clipboard {
  export interface Props extends useClipboard.Props {}
}
