import {
  Clipboard as ClipboardUI,
  ClipboardButton as ClipboardButtonUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { clipboardStyles } from "./styles";

const styles = clipboardStyles();

export const ClipboardButton = (props: ClipboardButtonUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ClipboardButtonUI {...rest} className={cn(styles.button(), className)} />
  );
};

export const Clipboard = (props: Clipboard.Props) => {
  const { className, children, ...rest } = props;
  return (
    <ClipboardUI {...rest} className={cn(styles.root(), className)}>
      {children}
      <ClipboardButton />
    </ClipboardUI>
  );
};

export namespace Clipboard {
  export interface Props extends ClipboardUI.Props {}
}
