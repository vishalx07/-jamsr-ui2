"use client";

import { CheckIcon, CopyIcon } from "@jamsrui/icons";
import { useClipboardContext } from "./clipboard-context";

export const ClipboardIcon = (props: ClipboardIcon.Props) => {
  const { ...rest } = props;
  const { isCopied } = useClipboardContext();
  return isCopied ? <CheckIcon {...rest} /> : <CopyIcon {...rest} />;
};

export namespace ClipboardIcon {
  export interface Props extends React.SVGProps<SVGSVGElement> {}
}
