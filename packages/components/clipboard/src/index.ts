import { Clipboard as ClipboardRoot } from "./clipboard";
import { ClipboardIcon } from "./clipboard-icon";

export const Clipboard = Object.assign(ClipboardRoot, {
  Icon: ClipboardIcon,
});
export { useCopyToClipboard } from "./use-copy-to-clipboard";

export namespace Clipboard {
  export interface Props extends ClipboardRoot.Props {}
  export interface Icon extends ClipboardIcon.Props {}
}
