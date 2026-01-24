"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { CardContextProvider } from "./card-context";
import { useCard } from "./use-card";

export const Card = (props: Card.Props) => {
  const ctx = useCard(props);

  const renderElement = useRenderElement("div", {
    props: ctx.getRootProps({}),
  });
  return <CardContextProvider ctx={ctx}>{renderElement}</CardContextProvider>;
};

export namespace Card {
  export interface Props extends useCard.Props {}
}
