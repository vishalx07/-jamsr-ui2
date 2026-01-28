"use client";
import { useCallback, useMemo } from "react";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Alert } from "./alert";
import type { AlertContent } from "./alert-content";
import type { AlertDescription } from "./alert-description";
import type { AlertIcon } from "./alert-icon";
import type { AlertTitle } from "./alert-title";
import { iconMappingDefault } from "./icons";

export const useAlert = (props: useAlert.Props) => {
  const { status = "neutral", ...rootProps } = props;
  const icon = iconMappingDefault[status];

  const getRootProps: PropGetter<Alert.Props> = useCallback(
    (props) => ({
      "data-slot": "root",
      role: "alert",
      ...rootProps,
      ...props,
    }),
    [rootProps],
  );

  const getTitleProps: PropGetter<AlertTitle.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "title",
      variant: "h6",
    }),
    [],
  );

  const getDescriptionProps: PropGetter<AlertDescription.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "description",
    }),
    [],
  );

  const getContentProps: PropGetter<AlertContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getIconProps: PropGetter<AlertIcon.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "icon",
    }),
    [],
  );

  return useMemo(
    () => ({
      icon,
      getRootProps,
      getTitleProps,
      getDescriptionProps,
      getContentProps,
      getIconProps,
    }),
    [
      getContentProps,
      getDescriptionProps,
      getRootProps,
      getTitleProps,
      icon,
      getIconProps,
    ],
  );
};

export namespace useAlert {
  export interface Props extends UIProps<"div"> {
    status?: Alert.Status;
  }
}
