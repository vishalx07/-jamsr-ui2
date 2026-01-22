"use client";

import { Button } from "@jamsrui/button";
import { dataAttr, mergeProps, UIProps } from "@jamsrui/utils";
import { useMemo } from "react";
import { ClipboardContext } from "./clipboard-context";
import { useCopyToClipboard } from "./use-copy-to-clipboard";

export const Clipboard = (props: Clipboard.Props) => {
  const { text, onCopyError, onCopySuccess, timeout, ...restProps } = props;
  const { isCopied, onCopy } = useCopyToClipboard({
    text,
    onCopyError,
    onCopySuccess,
    timeout,
  });

  const value: ClipboardContext.Props = useMemo(
    () => ({ isCopied }),
    [isCopied],
  );
  return (
    <ClipboardContext value={value}>
      <Button
        data-slot="root"
        data-component="clipboard"
        data-copied={dataAttr(isCopied)}
        {...mergeProps(restProps, {
          onClick: onCopy,
        })}
      />
    </ClipboardContext>
  );
};

export namespace Clipboard {
  export interface Props extends useCopyToClipboard.Props, UIProps<"button"> {}
}
