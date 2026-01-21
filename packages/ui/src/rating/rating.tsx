import { Rating as RatingUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { ratingStyles } from "./styles";

type RatingVariants = VariantProps<typeof ratingStyles>;

export const Rating = (props: Rating.Props) => {
  const { size, isReadOnly, className, ...rest } = props;
  const styles = ratingStyles({ size, isReadOnly });

  return <RatingUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Rating {
  export interface Props extends RatingUI.Props, RatingVariants {}
}
