"use client";

import { createContext, use, useMemo } from "react";

import { Card as CardUI } from "@jamsrui/react";

import { cardStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type CardVariants = VariantProps<typeof cardStyles>;

const CardContext = createContext<{
  styles: ReturnType<typeof cardStyles>;
} | null>(null);

const useCardContext = () => {
  const ctx = use(CardContext);
  if (!ctx) {
    throw new Error("useCardContext must be used within a Card");
  }
  return ctx;
};

export const Card = (props: Card.Props) => {
  const { bg, isBordered, isElevated, radius, className, ...restProps } = props;
  const styles = cardStyles({ bg, isBordered, isElevated, radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <CardContext value={value}>
      <CardUI {...restProps} className={styles.root({ className })} />
    </CardContext>
  );
};

export namespace Card {
  export interface Props extends CardUI.Props, CardVariants {}
}

export const CardHeader = (props: CardUI.Header) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Header
      {...props}
      className={styles.header({ className: props.className })}
    />
  );
};

export const CardTitle = (props: CardUI.Title) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Title
      {...props}
      className={styles.title({ className: props.className })}
    />
  );
};

export const CardDescription = (props: CardUI.Description) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Description
      {...props}
      className={styles.description({ className: props.className })}
    />
  );
};

export const CardContent = (props: CardUI.Content) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};

export const CardFooter = (props: CardUI.Footer) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};
