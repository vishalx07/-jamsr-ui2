import { RHFCheckbox } from "./rhf-checkbox";
import { RHFField as RHFFieldRoot } from "./rhf-field";
import { RHFFieldError } from "./rhf-field-error";
import { RHFInput } from "./rhf-input";
import { RHFNumberField } from "./rhf-number-field";
import { RHFOtpInput } from "./rhf-otp-input";
import { RHFRadioGroup } from "./rhf-radio-group";
import { RHFSelect } from "./rhf-select";
import { RHFSwitch } from "./rhf-switch";
import { RHFTextField } from "./rhf-text-field";
import { RHFTextarea } from "./rhf-textarea";

export const RHFField = Object.assign(RHFFieldRoot, {
  Root: RHFFieldRoot,
  FieldError: RHFFieldError,
  Input: RHFInput,
  Textarea: RHFTextarea,
  Switch: RHFSwitch,
  Checkbox: RHFCheckbox,
  NumberField: RHFNumberField,
  RadioGroup: RHFRadioGroup,
  Select: RHFSelect,
  OtpInput: RHFOtpInput,
  TextField: RHFTextField,
});

export namespace RHFField {
  export interface Props extends RHFFieldRoot.Props {}
  export interface FieldError extends RHFFieldError.Props {}
  export interface Input extends RHFInput.Props {}
  export interface Textarea extends RHFTextarea.Props {}
  export interface Switch extends RHFSwitch.Props {}
  export interface Checkbox extends RHFCheckbox.Props {}
  export interface NumberField extends RHFNumberField.Props {}
  export interface RadioGroup extends RHFRadioGroup.Props {}
  export interface Select extends RHFSelect.Props {}
  export interface OtpInput extends RHFOtpInput.Props {}
  export interface TextField extends RHFTextField.Props {}
}
