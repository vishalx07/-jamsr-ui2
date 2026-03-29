import { Field as FieldPrimitive } from "@base-ui/react/field";
import { cn } from "tailwind-variants";

export const FieldRoot = (props: FieldRoot.Props) => {
  const { className, orientation = "vertical", ...restProps } = props;
  return (
    <FieldPrimitive.Root
      className={cn(
        orientation === "vertical"
          ? "flex w-full group max-w-64 flex-col items-start gap-1"
          : "flex w-full group max-w-64 flex-row items-center gap-1",
        className,
      )}
      {...restProps}
    />
  );
};
export namespace FieldRoot {
  export interface Props extends FieldPrimitive.Root.Props {
    orientation?: "vertical" | "horizontal";
  }
}

export const FieldControl = (props: FieldPrimitive.Control.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Control className={cn("", className)} {...restProps} />
  );
};

export const FieldError = (props: FieldPrimitive.Error.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Error
      className={cn("text-sm text-danger", className)}
      {...restProps}
    />
  );
};

export const FieldDescription = (props: FieldPrimitive.Description.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Description
      className={cn("text-sm text-foreground-secondary", className)}
      {...restProps}
    />
  );
};

export const FieldLabel = (props: FieldPrimitive.Label.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Label
      className={cn(
        "text-sm font-medium text-foreground group-data-disabled:status-disabled",
        className,
      )}
      {...restProps}
    />
  );
};
