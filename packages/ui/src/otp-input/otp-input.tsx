import {
  OtpInput as OtpInputUI,
  OtpInputGroup as OtpInputGroupUI,
  OtpInputSlot as OtpInputSlotUI,
  OtpInputSeparator as OtpInputSeparatorUI,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { otpInputStyles } from "./styles";

type OtpInputVariants = VariantProps<typeof otpInputStyles>;

export const OtpInputGroup = (props: OtpInputGroupUI.Props) => {
  const styles = otpInputStyles();
  const { className, ...rest } = props;
  return (
    <OtpInputGroupUI {...rest} className={cn(styles.group(), className)} />
  );
};

export const OtpInputSlot = (props: OtpInputSlotUI.Props) => {
  const styles = otpInputStyles();
  const { className, ...rest } = props;
  return <OtpInputSlotUI {...rest} className={cn(styles.slot(), className)} />;
};

export const OtpInputSeparator = (props: OtpInputSeparatorUI.Props) => {
  const styles = otpInputStyles();
  const { className, ...rest } = props;
  return (
    <OtpInputSeparatorUI
      {...rest}
      className={cn(styles.separator(), className)}
    />
  );
};

export const OtpInput = (props: OtpInput.Props) => {
  const { radius, size, className, ...rest } = props;
  const styles = otpInputStyles({ radius, size });
  return <OtpInputUI {...rest} className={cn(styles.root(), className)} />;
};

export { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };

export namespace OtpInput {
  export interface Props extends OtpInputUI.Props, OtpInputVariants {}
}
