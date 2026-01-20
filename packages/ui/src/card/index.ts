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
}

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
