import { Alert as AlertUI } from "@jamsrui/react";
import type { VariantProps } from "@jamsrui/utils";
import { tv } from "@jamsrui/utils";
import { cn } from "tailwind-variants";

const alertStyles = tv({
  base: "relative flex gap-2 px-4 py-1.5 text-sm ring-1 ring-inset rounded-lg",
  variants: {
    variant: {
      bordered: "border",
      solid: "font-medium",
      soft: "",
    },
    status: {
      success: "ring-success-border",
      warning: "ring-warning-border",
      error: "ring-danger-border",
      info: "ring-primary-border",
      neutral: "ring-default-border",
    },
  },
  compoundVariants: [
    // solid
    {
      status: "error",
      variant: "solid",
      className: "bg-danger text-danger-foreground",
    },
    {
      status: "success",
      variant: "solid",
      className: "bg-success text-success-foreground",
    },
    {
      status: "info",
      variant: "solid",
      className: "bg-primary text-primary-foreground",
    },
    {
      status: "warning",
      variant: "solid",
      className: "bg-warning text-warning-foreground",
    },
    {
      status: "neutral",
      variant: "solid",
      className: "bg-default text-default-foreground",
    },
    // flat
    {
      status: "success",
      variant: "soft",
      className: "bg-success-soft text-success",
    },
    {
      status: "info",
      variant: "soft",
      className: "bg-primary-soft text-primary",
    },
    {
      status: "warning",
      variant: "soft",
      className: "bg-warning-soft text-warning",
    },
    {
      status: "error",
      variant: "soft",
      className: "bg-danger-soft text-danger",
    },
    {
      status: "neutral",
      variant: "soft",
      className: "bg-default-soft text-foreground",
    },
    // bordered
    {
      status: "error",
      variant: "bordered",
      className: "border-danger-stroke text-danger",
    },
    {
      status: "success",
      variant: "bordered",
      className: "border-success-stroke text-success",
    },
    {
      status: "info",
      variant: "bordered",
      className: "border-primary-stroke text-primary",
    },
    {
      status: "warning",
      variant: "bordered",
      className: "border-warning-stroke text-warning",
    },
    {
      status: "neutral",
      variant: "bordered",
      className: "border-default-stroke text-foreground",
    },
  ],
  defaultVariants: {
    status: "success",
    variant: "soft",
    radius: "md",
  },
});

type AlertVariants = VariantProps<typeof alertStyles>;

export const Alert = (props: Alert.Props) => {
  const { variant, status, className, ...restProps } = props;
  return (
    <AlertUI
      {...restProps}
      status={status}
      className={alertStyles({ variant, status, className })}
    />
  );
};

const AlertContent = (props: AlertUI.Content) => {
  return (
    <AlertUI.Content
      {...props}
      className={cn("flex flex-col grow py-2 gap-1", props.className)}
    />
  );
};

const AlertIcon = (props: AlertUI.Icon) => {
  return (
    <AlertUI.Icon {...props} className={cn("shrink-0 py-2", props.className)} />
  );
};

Alert.Icon = AlertIcon;
Alert.Title = AlertUI.Title;
Alert.Description = AlertUI.Description;
Alert.Content = AlertContent;

export namespace Alert {
  export interface Props extends AlertUI.Props, AlertVariants {}
}
