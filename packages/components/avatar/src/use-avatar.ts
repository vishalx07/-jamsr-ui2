"use client";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

import { dataAttrDev } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { AvatarFallback } from "./avatar-fallback";
import type { AvatarImage } from "./avatar-image";
import type { AvatarRoot } from "./avatar-root";

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

export const useAvatar = (props: useAvatar.Props) => {
  const { className, ...elementProps } = props;
  const [status, setStatus] = useState<ImageLoadingStatus>("idle");
  const imageRef = useRef<HTMLImageElement>(null);

  const handleOnError = useCallback(() => {
    setStatus("error");
  }, [setStatus]);

  const handleOnLoad = useCallback(() => {
    setStatus("loaded");
  }, [setStatus]);

  const getRootProps = useCallback(
    (): AvatarRoot.Props => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("avatar"),
      "data-status": dataAttrDev(status),
      className,
    }),
    [elementProps, className, status],
  );

  useLayoutEffect(() => {
    const img = imageRef.current;
    if (img?.complete) {
      if (img.naturalWidth === 0) {
        setStatus("error");
      } else {
        setStatus("loaded");
      }
    } else {
      setStatus("loading");
    }
  }, []);

  const getImgProps: PropGetter<AvatarImage.Props> = useCallback(
    (props) => ({
      ...props,
      ref: imageRef,
      "data-slot": dataAttrDev("img"),
      onError: handleOnError,
      onLoad: handleOnLoad,
    }),
    [handleOnError, handleOnLoad],
  );

  const getFallbackProps: PropGetter<AvatarFallback.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("fallback"),
    }),
    [],
  );

  const getIndicatorProps: PropGetter<AvatarFallback.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("indicator"),
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getImgProps,
      getFallbackProps,
      getIndicatorProps,
      status,
    }),
    [getFallbackProps, getImgProps, getIndicatorProps, getRootProps, status],
  );
};
export namespace useAvatar {
  export interface Props extends AvatarRoot.Props {}
}
