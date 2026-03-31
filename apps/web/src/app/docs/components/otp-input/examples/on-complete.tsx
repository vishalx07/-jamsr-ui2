"use client";

import { toastManager } from "@/app/provider/toast";
import { OtpInput } from "jamsrui/otp-input";

export const OtpInputOnComplete = () => {
  return (
    <OtpInput
      maxLength={4}
      onComplete={(value) => {
        toastManager.add({
          title: "OTP Completed",
          description: `You entered: ${value}`,
          type: "success",
        });
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
