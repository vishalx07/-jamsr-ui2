import {
  Dialog as DialogRoot,
  DialogBody,
  DialogCloseButton,
  DialogCloseTrigger,
  DialogContainer,
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
  CloseButton: DialogCloseButton,
  CloseTrigger: DialogCloseTrigger,
  Container: DialogContainer,
});

export namespace Dialog {
  export interface Props extends DialogRoot.Props {}
}

export {
  DialogBody,
  DialogCloseButton,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
};
