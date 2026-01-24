import { Card as CardRoot } from "./card";
import { CardContent } from "./card-content";
import { useCardContext } from "./card-context";
import { CardDescription } from "./card-description";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardTitle } from "./card-title";

export { useCardContext };

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
});

export namespace Card {
  export interface Props extends CardRoot.Props {}
  export interface Content extends CardContent.Props {}
  export interface Description extends CardDescription.Props {}
  export interface Footer extends CardFooter.Props {}
  export interface Header extends CardHeader.Props {}
  export interface Title extends CardTitle.Props {}
}
