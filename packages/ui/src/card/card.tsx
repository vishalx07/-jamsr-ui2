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

export const CardHeader = (props: CardHeader.Props) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Header
      {...props}
      className={styles.header({ className: props.className })}
    />
  );
};

export const CardTitle = (props: CardTitle.Props) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Title
      {...props}
      className={styles.title({ className: props.className })}
    />
  );
};

export const CardDescription = (props: CardDescription.Props) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Description
      {...props}
      className={styles.description({ className: props.className })}
    />
  );
};

export const CardContent = (props: CardContent.Props) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Content
      {...props}
      className={styles.content({ className: props.className })}
    />
  );
};

export const CardFooter = (props: CardFooter.Props) => {
  const { styles } = useCardContext();
  return (
    <CardUI.Footer
      {...props}
      className={styles.footer({ className: props.className })}
    />
  );
};

export namespace CardHeader {
  export interface Props extends CardUI.Header {}
}

export namespace CardTitle {
  export interface Props extends CardUI.Title {}
}

export namespace CardDescription {
  export interface Props extends CardUI.Description {}
}

export namespace CardContent {
  export interface Props extends CardUI.Content {}
}

export namespace CardFooter {
  export interface Props extends CardUI.Footer {}
}
