import {
  Alert as AlertRoot,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "./alert";

export const Alert = Object.assign(AlertRoot, {
  Content: AlertContent,
  Icon: AlertIcon,
  Title: AlertTitle,
  Description: AlertDescription,
});

export namespace Alert {
  export interface Props extends AlertRoot.Props {}
  export interface Content extends AlertContent.Props {}
  export interface Icon extends AlertIcon.Props {}
  export interface Title extends AlertTitle.Props {}
  export interface Description extends AlertDescription.Props {}
}

export { AlertContent, AlertDescription, AlertIcon, AlertTitle };
