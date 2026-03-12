"use client";

import { createContext, use, useMemo } from "react";

import {
  OtpInput as OtpInputUI,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@jamsrui/react";

import { otpInputStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type OtpInputVariants = VariantProps<typeof otpInputStyles>;

const OtpInputContext = createContext<{
  styles: ReturnType<typeof otpInputStyles>;
} | null>(null);

const useOtpInputContext = () => {
  const ctx = use(OtpInputContext);
  if (!ctx) {
    throw new Error("useOtpInputContext must be used within an OtpInput");
  }
  return ctx;
};

export const OtpInput = (props: OtpInput.Props) => {
  const { radius, size, className, children, ...rest } = props;
  const styles = otpInputStyles({ radius, size });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <OtpInputContext value={value}>
      <OtpInputUI {...rest} className={styles.root({ className })}>
        <OtpInputUI.Input className={styles.input()} />
        {children}
      </OtpInputUI>
    </OtpInputContext>
  );
};

export namespace OtpInput {
  export interface Props extends OtpInputUI.Props, OtpInputVariants {}
}

export const OtpInputGroup = (props: OtpInputGroup.Props) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return <OtpInputUI.Group {...rest} className={styles.group({ className })} />;
};

const SlotContent = (props: OtpInputUI.SlotRenderProps) => {
  const { char, isActive, placeholderChar } = props;
  const { styles } = useOtpInputContext();
  if (char) return char;
  if (placeholderChar) return placeholderChar;
  if (isActive) return <OtpInputUI.Caret className={styles.caret()} />;
  return null;
};

export const OtpInputSlot = (props: OtpInputSlot.Props) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return (
    <OtpInputUI.Slot {...rest} className={styles.slot({ className })}>
      {({ char, isActive, placeholderChar }) => (
        <SlotContent
          char={char}
          isActive={isActive}
          placeholderChar={placeholderChar}
        />
      )}
    </OtpInputUI.Slot>
  );
};

export const OtpInputSeparator = (props: OtpInputSeparator.Props) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return (
    <OtpInputUI.Separator
      {...rest}
      className={styles.separator({ className })}
    />
  );
};

export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };

export namespace OtpInputGroup {
  export interface Props extends OtpInputUI.Group {}
}

export namespace OtpInputSlot {
  export interface Props extends Omit<OtpInputUI.Slot, "children"> {}
}

export namespace OtpInputSeparator {
  export interface Props extends OtpInputUI.Separator {}
}
