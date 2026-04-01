import { AlertDialog } from "jamsrui/alert-dialog";
import { Button } from "jamsrui/button";

export const AlertDialogUsage = () => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button>Click to delete!</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description>
          You won't be able to revert this!
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Confirm</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
