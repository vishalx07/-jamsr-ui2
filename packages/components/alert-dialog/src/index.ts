import { AlertDialog as AlertDialogRoot } from "./alert-dialog";
import { AlertDialogBackdrop } from "./alert-dialog-backdrop";
import { AlertDialogBody } from "./alert-dialog-body";
import { AlertDialogCancel } from "./alert-dialog-cancel";
import { AlertDialogPositioner } from "./alert-dialog-container";
import { AlertDialogContent } from "./alert-dialog-content";
import { AlertDialogDescription } from "./alert-dialog-description";
import { AlertDialogFooter } from "./alert-dialog-footer";
import { AlertDialogTitle } from "./alert-dialog-title";
import { AlertDialogTrigger } from "./alert-dialog-trigger";

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Positioner: AlertDialogPositioner,
  Cancel: AlertDialogCancel,
  Backdrop: AlertDialogBackdrop,
});

export namespace AlertDialog {
  export interface Props extends AlertDialogRoot.Props {}
  export interface Trigger extends AlertDialogTrigger.Props {}
  export interface Content extends AlertDialogContent.Props {}
  export interface Body extends AlertDialogBody.Props {}
  export interface Footer extends AlertDialogFooter.Props {}
  export interface Title extends AlertDialogTitle.Props {}
  export interface Description extends AlertDialogDescription.Props {}
  export interface Positioner extends AlertDialogPositioner.Props {}
  export interface ContentInner extends AlertDialogContent.Props {}
  export interface Cancel extends AlertDialogCancel.Props {}
  export interface Backdrop extends AlertDialogBackdrop.Props {}
}
