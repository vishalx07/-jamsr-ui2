"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import { useCopyToClipboard } from "./use-copy-to-clipboard";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { ClipboardButton } from "./clipboard-button";

export const useClipboard = (props: useClipboard.Props) => {
  const {
    hideCopyButton,
    text,
    message,
    onCopySuccess,
    onCopyError,
    ctx,
    timeout,
    ...elementProps
  } = props;

  const { isCopied, onCopy } = useCopyToClipboard({
    text,
    onCopyError,
    onCopySuccess,
    ctx,
    message,
    timeout,
  });

  const getRootProps = useCallback(
    () => ({
      ...elementProps,
      onClick: onCopy,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("clipboard"),
    }),
    [elementProps, onCopy],
  );

  const getButtonProps: PropGetter<ClipboardButton.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "button",
    }),
    [],
  );

  const getIconProps: PropGetter<UIProps<"svg">> = useCallback(
    (props) => ({
      "data-slot": dataAttrDev("icon"),
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getButtonProps,
      getIconProps,
      hideCopyButton,
      isCopied,
    }),
    [getButtonProps, getIconProps, getRootProps, hideCopyButton, isCopied],
  );
};

export namespace useClipboard {
  export interface Props extends UIProps<"label">, useCopyToClipboard.Props {
    hideCopyButton?: boolean;
  }
}
