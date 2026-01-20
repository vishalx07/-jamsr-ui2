import { AlertDialog as AlertDialogRoot } from "./alert-dialog";
import { AlertDialogAction } from "./alert-dialog-action";
import { AlertDialogBackdrop } from "./alert-dialog-backdrop";
import { AlertDialogBody } from "./alert-dialog-body";
import { AlertDialogCancel } from "./alert-dialog-cancel";
import { AlertDialogContainer } from "./alert-dialog-container";
import { AlertDialogContent } from "./alert-dialog-content";
import {
  AlertDialogContext,
  useAlertDialogContext,
} from "./alert-dialog-context";
import { AlertDialogDescription } from "./alert-dialog-description";
import { AlertDialogFooter } from "./alert-dialog-footer";
import { AlertDialogTitle } from "./alert-dialog-title";
import { AlertDialogTrigger } from "./alert-dialog-trigger";
import { useAlertDialog } from "./use-alert-dialog";

export {
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContainer,
  AlertDialogContent,
  AlertDialogContext,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  useAlertDialog,
  useAlertDialogContext,
  AlertDialogBackdrop,
};

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Container: AlertDialogContainer,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
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
  export interface Container extends AlertDialogContainer.Props {}
  export interface ContentInner extends AlertDialogContent.Props {}
  export interface Cancel extends AlertDialogCancel.Props {}
  export interface Action extends AlertDialogAction.Props {}
  export interface Backdrop extends AlertDialogBackdrop.Props {}
}
