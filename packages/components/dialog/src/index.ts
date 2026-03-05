import { Dialog as DialogRoot } from "./dialog";
import { DialogBackdrop } from "./dialog-backdrop";
import { DialogBody } from "./dialog-body";
import { DialogCloseButton } from "./dialog-close-button";
import { DialogCloseTrigger } from "./dialog-close-trigger";
import { DialogContent } from "./dialog-content";
import { DialogFooter } from "./dialog-footer";
import { DialogHeader } from "./dialog-header";
import { DialogPortal } from "./dialog-portal";
import { DialogPositioner } from "./dialog-positioner";
import { DialogTrigger } from "./dialog-trigger";

export const Dialog = Object.assign(DialogRoot, {
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  CloseButton: DialogCloseButton,
  Positioner: DialogPositioner,
  Content: DialogContent,
  Footer: DialogFooter,
  Header: DialogHeader,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
});

export namespace Dialog {
  export interface Props extends DialogRoot.Props {}
  export interface Body extends DialogBody.Props {}
  export interface Footer extends DialogFooter.Props {}
  export interface Header extends DialogHeader.Props {}
  export interface Trigger extends DialogTrigger.Props {}
  export interface CloseTrigger extends DialogCloseTrigger.Props {}
  export interface Positioner extends DialogPositioner.Props {}
  export interface Content extends DialogContent.Props {}
}
