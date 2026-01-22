"use client";

import { OtpInputContext } from "./otp-input-context";
import { OtpInputRoot } from "./otp-input-root";
import { useOtpInput } from "./use-otp-input";

export const OtpInput = (props: OtpInput.Props) => {
  const ctx = useOtpInput(props);
  return (
    <OtpInputContext value={ctx}>
      <OtpInputRoot>{props.children}</OtpInputRoot>
    </OtpInputContext>
  );
};

export namespace OtpInput {
  export interface Props extends useOtpInput.Props {}
}
