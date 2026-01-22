"use client";

import {
  OtpInput as OtpInputUI,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { otpInputStyles } from "./styles";

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
  const { radius, size, className, ...rest } = props;
  const styles = otpInputStyles({ radius, size });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <OtpInputContext value={value}>
      <OtpInputUI {...rest} className={styles.root({ className })} />
    </OtpInputContext>
  );
};

export namespace OtpInput {
  export interface Props extends OtpInputUI.Props, OtpInputVariants {}
}

export const OtpInputGroup = (props: OtpInputUI.Group) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return <OtpInputUI.Group {...rest} className={styles.group({ className })} />;
};

export const OtpInputSlot = (props: OtpInputUI.Slot) => {
  const { styles } = useOtpInputContext();
  const { className, ...rest } = props;
  return <OtpInputUI.Slot {...rest} className={styles.slot({ className })} />;
};

export const OtpInputSeparator = (props: OtpInputUI.Separator) => {
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
