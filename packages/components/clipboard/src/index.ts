import { Clipboard as ClipboardRoot } from "./clipboard";
import { ClipboardButton } from "./clipboard-button";

export const Clipboard = Object.assign(ClipboardRoot, {
  Button: ClipboardButton,
});

export namespace Clipboard {
  export interface Props extends ClipboardRoot.Props {}
  export interface Button extends ClipboardButton.Props {}
}
