import {
  Dialog as DialogRoot,
  DialogBody,
  DialogCancel,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./dialog";

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
  Cancel: DialogCancel,
});

export namespace Dialog {
  export interface Props extends DialogRoot.Props {}
}
