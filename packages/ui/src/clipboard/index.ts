import { Clipboard as ClipboardRoot, ClipboardButton } from "./clipboard";

export const Clipboard = Object.assign(ClipboardRoot, {
  Button: ClipboardButton,
});

export namespace Clipboard {
  export interface Props extends ClipboardRoot.Props {}
}

export { ClipboardButton };
