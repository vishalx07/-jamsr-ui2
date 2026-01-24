"use client";

import { AlertDialogContext } from "./alert-dialog-context";
import { useAlertDialog } from "./use-alert-dialog";

export const AlertDialog = (props: AlertDialog.Props) => {
  const ctx = useAlertDialog(props);
  return <AlertDialogContext value={ctx}>{props.children}</AlertDialogContext>;
};

export namespace AlertDialog {
  export interface Props extends useAlertDialog.Props {
    children: React.ReactNode;
  }
}
