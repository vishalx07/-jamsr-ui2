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
}
