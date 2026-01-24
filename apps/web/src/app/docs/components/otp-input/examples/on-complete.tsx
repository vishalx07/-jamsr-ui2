"use client";

import { OtpInput } from "jamsrui/otp-input";
import { toast } from "jamsrui/toast";

export const OtpInputOnComplete = () => {
  return (
    <OtpInput
      maxLength={4}
      onComplete={(value) => {
        toast.success(`OTP Completed. You entered: ${value}`);
      }}
    >
      <OtpInput.Group>
        <OtpInput.Slot index={0} />
        <OtpInput.Slot index={1} />
        <OtpInput.Slot index={2} />
        <OtpInput.Slot index={3} />
      </OtpInput.Group>
    </OtpInput>
  );
};
