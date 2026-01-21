import {
  OtpInput as OtpInputRoot,
  OtpInputGroup,
  OtpInputSeparator,
  OtpInputSlot,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "./otp-input";

export const OtpInput = Object.assign(OtpInputRoot, {
  Group: OtpInputGroup,
  Slot: OtpInputSlot,
  Separator: OtpInputSeparator,
});

export namespace OtpInput {
  export interface Props extends OtpInputRoot.Props {}
}

export {
  OtpInputGroup,
  OtpInputSeparator,
  OtpInputSlot,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
};
