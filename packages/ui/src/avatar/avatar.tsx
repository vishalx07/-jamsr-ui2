import { Avatar as AvatarUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { avatarStyles } from "./styles";

type AvatarVariants = VariantProps<typeof avatarStyles>;

export const Avatar = (props: Avatar.Props) => {
  const { size, color, isBordered, radius, className, ...restProps } = props;
  const styles = avatarStyles({ size, color, isBordered, radius });
  return <AvatarUI {...restProps} className={cn(styles.root(), className)} />;
};

export namespace Avatar {
  export interface Props extends AvatarUI.Props, AvatarVariants {}
}

export const AvatarImage = (props: AvatarUI.Image) => {
  const styles = avatarStyles();
  return (
    <AvatarUI.Image {...props} className={cn(styles.img(), props.className)} />
  );
};

export const AvatarFallback = (props: AvatarUI.Fallback) => {
  const styles = avatarStyles();
  return (
    <AvatarUI.Fallback
      {...props}
      className={cn(styles.fallback(), props.className)}
    />
  );
};

export const AvatarIndicator = (props: AvatarUI.Indicator) => {
  const styles = avatarStyles();
  return (
    <AvatarUI.Indicator
      {...props}
      className={cn(styles.indicator(), props.className)}
    />
  );
};
