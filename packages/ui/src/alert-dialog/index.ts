import {
  AlertDialog as AlertDialogRoot,
  AlertDialogAction,
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
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
});

export namespace AlertDialog {
  export interface Props extends AlertDialogRoot.Props {}
}
