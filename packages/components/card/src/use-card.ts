"use client";
import { useCallback, useMemo } from "react";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Card } from "./card";
import type { CardContent } from "./card-content";
import type { CardDescription } from "./card-description";
import type { CardFooter } from "./card-footer";
import type { CardHeader } from "./card-header";
import type { CardTitle } from "./card-title";

export const useCard = (props: useCard.Props) => {
  const { className, ...baseProps } = props;

  const getRootProps: PropGetter<Card.Props> = useCallback(
    () => ({
      "data-slot": "root",
      ...baseProps,
      className,
    }),
    [baseProps, className],
  );

  const getHeaderProps: PropGetter<CardHeader.Props> = useCallback(
    (props) => ({
      "data-slot": "header",
      ...props,
    }),
    [],
  );

  const getTitleProps: PropGetter<CardTitle.Props> = useCallback(
    (props) => ({
      "data-slot": "title",
      ...props,
      variant: "h5",
    }),
    [],
  );

  const getDescriptionProps: PropGetter<CardDescription.Props> = useCallback(
    (props) => ({
      "data-slot": "description",
      variant: "caption",
      ...props,
    }),
    [],
  );

  const getContentProps: PropGetter<CardContent.Props> = useCallback(
    (props) => ({
      "data-slot": "content",
      ...props,
    }),
    [],
  );

  const getFooterProps: PropGetter<CardFooter.Props> = useCallback(
    (props) => ({
      "data-slot": "footer",
      ...props,
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getHeaderProps,
      getTitleProps,
      getDescriptionProps,
      getContentProps,
      getFooterProps,
    }),
    [
      getContentProps,
      getDescriptionProps,
      getFooterProps,
      getHeaderProps,
      getRootProps,
      getTitleProps,
    ],
  );
};

export namespace useCard {
  export interface Props extends UIProps<"div"> {}
}
