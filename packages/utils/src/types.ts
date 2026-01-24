import type { ComponentPropsWithRef } from "react";

export type DataAttributes = Record<
  `data-${string}`,
  string | boolean | undefined
>;

export type UIProps<ElementType extends React.ElementType> = Omit<
  ComponentPropsWithRef<ElementType>,
  "className" | "defaultChecked" | "color" | "defaultValue" | "size" | "slot"
> &
  DataAttributes & {
    className?: string;
    render?: React.ReactElement;
  };

export type PropGetter<P = Record<string, unknown>> = (props: P) => P;
