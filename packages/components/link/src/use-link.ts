"use client";
import { useCallback, useMemo } from "react";
import { cn, dataAttrDev } from "@jamsrui/utils";
import type { PropGetter, UIProps } from "@jamsrui/utils";
import type { Link } from "./link";

export const useLink = (props: useLink.Props) => {
  const getRootProps: PropGetter<Link.Props> = useCallback(
    () => ({
      ...props,
      "data-component": dataAttrDev("link"),
      className: cn(props.className),
    }),
    [props],
  );

  return useMemo(
    () => ({
      getRootProps,
    }),
    [getRootProps],
  );
};

export namespace useLink {
  export interface Props extends UIProps<"a"> {}
}
