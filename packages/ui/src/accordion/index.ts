import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionIndicator,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Indicator: AccordionIndicator,
});

export namespace Accordion {
  export interface Props extends AccordionRoot.Props {}
  export interface Item extends AccordionItem.Props {}
  export interface Trigger extends AccordionTrigger.Props {}
  export interface Content extends AccordionContent.Props {}
  export interface Indicator extends AccordionIndicator.Props {}
}
