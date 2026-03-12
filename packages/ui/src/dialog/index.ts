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
  export interface Trigger extends DialogTrigger.Props {}
  export interface Content extends DialogContent.Props {}
  export interface Header extends DialogHeader.Props {}
  export interface Body extends DialogBody.Props {}
  export interface Footer extends DialogFooter.Props {}
  export interface CloseButton extends DialogCloseButton.Props {}
  export interface CloseTrigger extends DialogCloseTrigger.Props {}
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
