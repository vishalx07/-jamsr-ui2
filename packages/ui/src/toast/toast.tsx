import { toast, Toast as ToastUI, Toaster, useToast } from "@jamsrui/react";

import { toastStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";


type ToastVariants = VariantProps<typeof toastStyles>;

export const Toast = (props: Toast.Props) => {
  const { variant, className, ...rest } = props;
  const styles = toastStyles({ variant });
  return <ToastUI {...rest} className={styles.root({ className })} />;
};

export { toast, Toaster, useToast };

export namespace Toast {
  export interface Props extends ToastUI.Props, ToastVariants {}
}
