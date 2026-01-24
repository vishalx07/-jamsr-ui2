import { Alert as AlertRoot } from "./alert";
import { AlertContent } from "./alert-content";
import { AlertDescription } from "./alert-description";
import { AlertIcon } from "./alert-icon";
import { AlertTitle } from "./alert-title";

export const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
  Content: AlertContent,
  Icon: AlertIcon,
});

export namespace Alert {
  export interface Props extends AlertRoot.Props {}
  export interface Title extends AlertTitle.Props {}
  export interface Description extends AlertDescription.Props {}
  export interface Content extends AlertContent.Props {}
  export interface Icon extends AlertIcon.Props {}
}
