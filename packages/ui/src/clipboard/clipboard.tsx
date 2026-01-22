import { Clipboard as ClipboardUI } from "@jamsrui/react";
import { clipboardStyles } from "./styles";

const styles = clipboardStyles();

export const ClipboardButton = (props: ClipboardUI.Button) => {
  const { className, ...rest } = props;
  return (
    <ClipboardUI.Button {...rest} className={styles.button({ className })} />
  );
};

export const Clipboard = (props: Clipboard.Props) => {
  const { className, children, ...rest } = props;
  return (
    <ClipboardUI {...rest} className={styles.root({ className })}>
      {children}
      <ClipboardButton />
    </ClipboardUI>
  );
};

export namespace Clipboard {
  export interface Props extends ClipboardUI.Props {}
}
