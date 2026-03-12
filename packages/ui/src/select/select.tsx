"use client";

import { createContext, use } from "react";

import { Select as SelectUI } from "@jamsrui/react";

import { selectStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type SelectVariants = VariantProps<typeof selectStyles>;

const SelectContext = createContext<{
  styles: ReturnType<typeof selectStyles>;
} | null>(null);

const useSelectContext = () => {
  const ctx = use(SelectContext);
  if (!ctx)
    throw new Error("useSelectContext must be used within SelectContext");
  return ctx;
};

export const Select = (props: Select.Props) => {
  const { color, radius, size, isInvalid, className, ...restProps } = props;
  const styles = selectStyles({ color, radius, size, isInvalid });

  return (
    <SelectContext.Provider value={{ styles }}>
      <SelectUI {...restProps} className={styles.root({ className })} />
    </SelectContext.Provider>
  );
};

export namespace Select {
  export interface Props extends SelectUI.Props, SelectVariants {}
}

export const SelectTrigger = (props: SelectUI.Trigger) => {
  const { styles } = useSelectContext();
  const {
    children = (
      <>
        <SelectValue />
        <SelectIndicator />
      </>
    ),
    className,
    ...restProps
  } = props;
  return (
    <SelectUI.Trigger {...restProps} className={styles.trigger({ className })}>
      {children}
    </SelectUI.Trigger>
  );
};

export const SelectValue = (props: SelectUI.Value) => {
  const { styles } = useSelectContext();
  return (
    <SelectUI.Value
      {...props}
      className={styles.value({ className: props.className })}
    />
  );
};

export const SelectIndicator = (props: SelectUI.Indicator) => {
  const { styles } = useSelectContext();
  return (
    <SelectUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const SelectContent = (props: SelectContent.Props) => {
  const { styles } = useSelectContext();
  const { slotProps, ...restProps } = props;
  return (
    <SelectUI.Positioner
      {...slotProps?.positioner}
      className={styles.positioner({
        className: slotProps?.positioner?.className,
      })}
    >
      <SelectUI.Content
        {...restProps}
        className={styles.content({ className: restProps.className })}
      />
    </SelectUI.Positioner>
  );
};
export namespace SelectContent {
  export interface Props extends SelectUI.Content {
    slotProps?: {
      positioner?: React.ComponentProps<typeof SelectUI.Positioner>;
    };
  }
}

export const SelectItem = (props: SelectUI.Item) => {
  const { styles } = useSelectContext();
  return (
    <SelectUI.Item
      {...props}
      className={styles.selectItem({ className: props.className })}
    />
  );
};

export const SelectItemIndicator = (props: SelectUI.ItemIndicator) => {
  const { styles } = useSelectContext();
  return (
    <SelectUI.ItemIndicator
      {...props}
      className={styles.itemIndicator({ className: props.className })}
    />
  );
};
