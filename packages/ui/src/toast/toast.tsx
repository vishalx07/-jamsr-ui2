import { Toast as ToastUI, Toaster, useToast, toast } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { toastStyles } from "./styles";

type ToastVariants = VariantProps<typeof toastStyles>;

export const Toast = (props: Toast.Props) => {
  const { variant, className, ...rest } = props;
  const styles = toastStyles({ variant });
  return <ToastUI {...rest} className={cn(styles.root(), className)} />;
};

export { Toaster, useToast, toast };

export namespace Toast {
  export interface Props extends ToastUI.Props, ToastVariants {}
}
