import { ClipboardIcon, Clipboard as ClipboardRoot } from "./clipboard";

export const Clipboard = Object.assign(ClipboardRoot, {
  Icon: ClipboardIcon,
});

export namespace Clipboard {
  export interface Props extends ClipboardRoot.Props {}
}

export { ClipboardIcon };
