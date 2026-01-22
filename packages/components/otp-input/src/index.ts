import { OtpInput as OtpInputRoot } from "./otp-input";
import { OtpInputCaret } from "./otp-input-caret";
import { OtpInputGroup } from "./otp-input-group";
import { OtpInputInput } from "./otp-input-input";
import { OtpInputSeparator } from "./otp-input-separator";
import { OtpInputSlot } from "./otp-input-slot";
import { useOtpInput } from "./use-otp-input";

export {
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "./regexp";
export { useOtpInput };

export const OtpInput = Object.assign(OtpInputRoot, {
  Slot: OtpInputSlot,
  Separator: OtpInputSeparator,
  Group: OtpInputGroup,
  Caret: OtpInputCaret,
  Input: OtpInputInput,
});

export namespace OtpInput {
  export interface Props extends OtpInputRoot.Props {}
  export interface Group extends OtpInputGroup.Props {}
  export interface Separator extends OtpInputSeparator.Props {}
  export interface Slot extends OtpInputSlot.Props {}
  export interface SlotRenderProps extends OtpInputSlot.RenderProps {}
}
