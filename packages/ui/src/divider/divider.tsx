import { Divider as DividerUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { dividerStyles } from "./styles";

type DividerVariants = VariantProps<typeof dividerStyles>;

export const Divider = (props: Divider.Props) => {
  const { orientation, variant, className, children, ...restProps } = props;
  const styles = dividerStyles({ orientation, variant });

  const composedChildren = (
    <>
      <div data-slot="divider" className={styles.divider()} />
      {!!children && (
        <>
          {children}
          <div data-slot="divider" className={styles.divider()} />
        </>
      )}
    </>
  );

  return (
    <DividerUI {...restProps} className={cn(styles.root(), className)}>
      {composedChildren}
    </DividerUI>
  );
};

export namespace Divider {
  export interface Props extends DividerUI.Props, DividerVariants {}
}
