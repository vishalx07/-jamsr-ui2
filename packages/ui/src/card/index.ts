import {
  Card as CardRoot,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export namespace Card {
  export interface Props extends CardRoot.Props {}
  export interface Header extends CardHeader.Props {}
  export interface Title extends CardTitle.Props {}
  export interface Description extends CardDescription.Props {}
  export interface Content extends CardContent.Props {}
  export interface Footer extends CardFooter.Props {}
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
