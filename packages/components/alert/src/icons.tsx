"use client";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "@jamsrui/icons";
import { Alert } from "./alert";

export type IconMapping = Record<NonNullable<Alert.Status>, React.ReactNode>;

export const iconMappingDefault: IconMapping = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  neutral: <InfoIcon />,
};
