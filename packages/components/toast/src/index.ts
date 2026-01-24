import { Toast as ToastRoot } from "./toast";

export { toast, Toaster, useSonner as useToast } from "sonner";

export const Toast = Object.assign(ToastRoot, {});

export namespace Toast {
  export interface Props extends ToastRoot.Props {}
}
