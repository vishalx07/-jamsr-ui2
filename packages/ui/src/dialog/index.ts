import {
  Dialog as DialogRoot,
  DialogBody,
  DialogCloseButton,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogTrigger,
} from "./dialog";

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  CloseButton: DialogCloseButton,
  CloseTrigger: DialogCloseTrigger,
});

export namespace Dialog {
  export interface Props extends DialogRoot.Props {}
}

export {
  DialogBody,
  DialogCloseButton,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogTrigger,
};
