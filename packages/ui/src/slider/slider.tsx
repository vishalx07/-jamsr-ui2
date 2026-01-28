"use client";

import { createContext, use, useMemo } from "react";

import { Slider as SliderUI } from "@jamsrui/react";

import { sliderStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";


type SliderVariants = VariantProps<typeof sliderStyles>;

const SliderContext = createContext<{
  styles: ReturnType<typeof sliderStyles>;
} | null>(null);

const useSliderContext = () => {
  const ctx = use(SliderContext);
  if (!ctx) {
    throw new Error("useSliderContext must be used within a Slider");
  }
  return ctx;
};

export const Slider = (props: Slider.Props) => {
  const { orientation, isDisabled, className, ...rest } = props;
  const styles = sliderStyles({ orientation, isDisabled });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <SliderContext value={value}>
      <SliderUI
        {...rest}
        className={styles.root({ className })}
        orientation={orientation}
      />
    </SliderContext>
  );
};

export namespace Slider {
  export interface Props extends SliderUI.Props, SliderVariants {}
}

export const SliderControl = (props: SliderUI.Control) => {
  const { styles } = useSliderContext();
  return (
    <SliderUI.Control
      {...props}
      className={styles.control({ className: props.className })}
    />
  );
};

export const SliderTrack = (props: SliderUI.Track) => {
  const { styles } = useSliderContext();
  return (
    <SliderUI.Track
      {...props}
      className={styles.track({ className: props.className })}
    />
  );
};

export const SliderIndicator = (props: SliderUI.Indicator) => {
  const { styles } = useSliderContext();
  return (
    <SliderUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export const SliderThumb = (props: SliderUI.Thumb) => {
  const { styles } = useSliderContext();
  return (
    <SliderUI.Thumb
      {...props}
      className={styles.thumb({ className: props.className })}
    />
  );
};

export const SliderValue = (props: SliderUI.Value) => {
  const { styles } = useSliderContext();
  return (
    <SliderUI.Value
      {...props}
      className={styles.value({ className: props.className })}
    />
  );
};
