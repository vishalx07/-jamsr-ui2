import { Toast as ToastRoot, Toaster, useToast, toast } from "./toast";

export const Toast = Object.assign(ToastRoot, {});

export namespace Toast {
  export interface Props extends ToastRoot.Props {}
}

export { Toaster, useToast, toast };
