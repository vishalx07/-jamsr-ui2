import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import {
  ToastArrow,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./toast";

export const Toast = Object.assign(ToastRoot, {
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Content: ToastContent,
  Portal: ToastPortal,
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Arrow: ToastArrow,
  createToastManager: ToastPrimitive.createToastManager,
  useToastManager: ToastPrimitive.useToastManager,
});

export namespace Toast {
  export interface Props {}
}
