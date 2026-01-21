import { Skeleton as SkeletonUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { skeletonStyles } from "./styles";

type SkeletonVariants = VariantProps<typeof skeletonStyles>;

const SkeletonContent = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const styles = skeletonStyles();
  return (
    <div className={cn(styles.content(), props.className)}>
      {props.children}
    </div>
  );
};

export const Skeleton = (props: Skeleton.Props) => {
  const { disableAnimation, className, children, isLoading, ...restProps } =
    props;
  const styles = skeletonStyles({ disableAnimation });

  return (
    <SkeletonUI
      {...restProps}
      isLoading={isLoading}
      className={cn(styles.root(), className)}
    >
      <SkeletonContent>{children}</SkeletonContent>
    </SkeletonUI>
  );
};

export namespace Skeleton {
  export interface Props extends SkeletonUI.Props, SkeletonVariants {}
}
