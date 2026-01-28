import { Clipboard as ClipboardUI } from "@jamsrui/react";

import { clipboardStyles } from "./styles";

const styles = clipboardStyles();

export const ClipboardIcon = (props: ClipboardUI.Icon) => {
  const { className, ...rest } = props;
  return <ClipboardUI.Icon {...rest} className={styles.icon({ className })} />;
};

export const Clipboard = (props: Clipboard.Props) => {
  return (
    <ClipboardUI
      {...props}
      className={styles.root({ className: props.className })}
    />
  );
};

export namespace Clipboard {
  export interface Props extends ClipboardUI.Props {}
}
