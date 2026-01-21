import {
  Slider as SliderUI,
  SliderControl as SliderControlUI,
  SliderIndicator as SliderIndicatorUI,
  SliderThumb as SliderThumbUI,
  SliderTrack as SliderTrackUI,
  SliderValue as SliderValueUI,
} from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { sliderStyles } from "./styles";

type SliderVariants = VariantProps<typeof sliderStyles>;

export const SliderControl = (props: SliderControlUI.Props) => {
  const styles = sliderStyles();
  const { className, ...rest } = props;
  return (
    <SliderControlUI {...rest} className={cn(styles.control(), className)} />
  );
};

export const SliderTrack = (props: SliderTrackUI.Props) => {
  const styles = sliderStyles();
  const { className, ...rest } = props;
  return <SliderTrackUI {...rest} className={cn(styles.track(), className)} />;
};

export const SliderIndicator = (props: SliderIndicatorUI.Props) => {
  const styles = sliderStyles();
  const { className, ...rest } = props;
  return (
    <SliderIndicatorUI
      {...rest}
      className={cn(styles.indicator(), className)}
    />
  );
};

export const SliderThumb = (props: SliderThumbUI.Props) => {
  const styles = sliderStyles();
  const { className, ...rest } = props;
  return <SliderThumbUI {...rest} className={cn(styles.thumb(), className)} />;
};

export const SliderValue = (props: SliderValueUI.Props) => {
  const styles = sliderStyles();
  const { className, ...rest } = props;
  return <SliderValueUI {...rest} className={cn(styles.value(), className)} />;
};

export const Slider = (props: Slider.Props) => {
  const { orientation, isDisabled, className, ...rest } = props;
  const styles = sliderStyles({ orientation, isDisabled });
  return <SliderUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Slider {
  export interface Props extends SliderUI.Props, SliderVariants {}
}
