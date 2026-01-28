import { toast, Toast as ToastRoot, Toaster, useToast } from "./toast";

export const Toast = Object.assign(ToastRoot, {});

export namespace Toast {
  export interface Props extends ToastRoot.Props {}
}

export { toast, Toaster, useToast };
