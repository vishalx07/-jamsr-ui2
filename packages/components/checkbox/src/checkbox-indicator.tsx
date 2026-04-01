"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { CheckboxIcon } from "./checkbox-icon";

import type { CheckboxIndicatorState } from "@base-ui/react/checkbox";

export const CheckboxIndicator = (props: CheckboxIndicator.Props) => {
  const {
    children = (props: CheckboxIndicatorState) => <CheckboxIcon {...props} />,
    ...restProps
  } = props;
  return (
    <CheckboxPrimitive.Indicator
      keepMounted
      render={(props, state) => {
        return (
          <CheckboxPrimitive.Indicator keepMounted {...props}>
            {typeof children === "function" ? children(state) : children}
          </CheckboxPrimitive.Indicator>
        );
      }}
      {...restProps}
    />
  );
};

export namespace CheckboxIndicator {
  export interface Props extends Omit<
    CheckboxPrimitive.Indicator.Props,
    "children"
  > {
    children?:
      | React.ReactNode
      | ((state: CheckboxIndicatorState) => React.ReactNode);
  }
}
