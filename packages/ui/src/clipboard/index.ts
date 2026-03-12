import { Clipboard as ClipboardRoot, ClipboardIcon } from "./clipboard";

export const Clipboard = Object.assign(ClipboardRoot, {
  Icon: ClipboardIcon,
});

export namespace Clipboard {
  export interface Props extends ClipboardRoot.Props {}
  export interface Icon extends ClipboardIcon.Props {}
}

export { ClipboardIcon };
