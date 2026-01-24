"use client";

import { Avatar as AvatarUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { avatarStyles } from "./styles";

type AvatarVariants = VariantProps<typeof avatarStyles>;

const AvatarContext = createContext<{
  styles: ReturnType<typeof avatarStyles>;
} | null>(null);

const useAvatarContext = () => {
  const ctx = use(AvatarContext);
  if (!ctx) {
    throw new Error("useAvatarContext must be used within an Avatar");
  }
  return ctx;
};

export const Avatar = (props: Avatar.Props) => {
  const { size, color, isBordered, radius, className, ...restProps } = props;
  const styles = avatarStyles({ size, color, isBordered, radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AvatarContext value={value}>
      <AvatarUI {...restProps} className={styles.root({ className })} />
    </AvatarContext>
  );
};

export namespace Avatar {
  export interface Props extends AvatarUI.Props, AvatarVariants {}
}

export const AvatarImage = (props: AvatarUI.Image) => {
  const { styles } = useAvatarContext();
  return (
    <AvatarUI.Image
      {...props}
      className={styles.img({ className: props.className })}
    />
  );
};

export const AvatarFallback = (props: AvatarUI.Fallback) => {
  const { styles } = useAvatarContext();
  return (
    <AvatarUI.Fallback
      {...props}
      className={styles.fallback({ className: props.className })}
    />
  );
};

export const AvatarIndicator = (props: AvatarUI.Indicator) => {
  const { styles } = useAvatarContext();
  return (
    <AvatarUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};
