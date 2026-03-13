import { Accordion as AccordionBaseUI } from "@base-ui/react/accordion";

import { AccordionContent } from "./accordion-content";
import { AccordionIndicator } from "./accordion-indicator";

export const Accordion = Object.assign(AccordionBaseUI.Root, {
  Item: AccordionBaseUI.Item,
  Trigger: AccordionBaseUI.Trigger,
  Panel: AccordionBaseUI.Panel,
  Heading: AccordionBaseUI.Header,
  Content: AccordionContent,
  Indicator: AccordionIndicator,
});

export namespace Accordion {
  export interface Props extends AccordionBaseUI.Root.Props {}
  export interface Item extends AccordionBaseUI.Item.Props {}
  export interface Trigger extends AccordionBaseUI.Trigger.Props {}
  export interface Panel extends AccordionBaseUI.Panel.Props {}
  export interface Heading extends AccordionBaseUI.Header.Props {}
  export interface Content extends AccordionContent.Props {}
  export interface Indicator extends AccordionIndicator.Props {}
}
