import {
  AlertDialog as AlertDialogRoot,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
});

export namespace AlertDialog {
  export interface Props extends AlertDialogRoot.Props {}
  export interface Trigger extends AlertDialogTrigger.Props {}
  export interface Content extends AlertDialogContent.Props {}
  export interface Body extends AlertDialogBody.Props {}
  export interface Footer extends AlertDialogFooter.Props {}
  export interface Title extends AlertDialogTitle.Props {}
  export interface Description extends AlertDialogDescription.Props {}
  export interface Cancel extends AlertDialogCancel.Props {}
  export interface Action extends AlertDialogAction.Props {}
}

export {
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
};
