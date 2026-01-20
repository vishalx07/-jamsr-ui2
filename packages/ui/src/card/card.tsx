import { Card as CardUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { cardStyles } from "./styles";

type CardVariants = VariantProps<typeof cardStyles>;

export const Card = (props: Card.Props) => {
  const { bg, isBordered, isElevated, radius, className, ...restProps } = props;
  const styles = cardStyles({ bg, isBordered, isElevated, radius });
  return <CardUI {...restProps} className={cn(styles.root(), className)} />;
};

export namespace Card {
  export interface Props extends CardUI.Props, CardVariants {}
}

export const CardHeader = (props: CardUI.Header) => {
  const styles = cardStyles();
  return (
    <CardUI.Header
      {...props}
      className={cn(styles.header(), props.className)}
    />
  );
};

export const CardTitle = (props: CardUI.Title) => {
  const styles = cardStyles();
  return (
    <CardUI.Title {...props} className={cn(styles.title(), props.className)} />
  );
};

export const CardDescription = (props: CardUI.Description) => {
  const styles = cardStyles();
  return (
    <CardUI.Description
      {...props}
      className={cn(styles.description(), props.className)}
    />
  );
};

export const CardContent = (props: CardUI.Content) => {
  const styles = cardStyles();
  return (
    <CardUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};

export const CardFooter = (props: CardUI.Footer) => {
  const styles = cardStyles();
  return (
    <CardUI.Footer
      {...props}
      className={cn(styles.footer(), props.className)}
    />
  );
};
