"use client";

import { Accordion as AccordionUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { accordionStyles } from "./styles";

type AccordionVariants = VariantProps<typeof accordionStyles>;

export const Accordion = (props: Accordion.Props) => {
  const { variant, radius, className, ...restProps } = props;
  const styles = accordionStyles({ variant, radius });
  return (
    <AccordionUI {...restProps} className={cn(styles.root(), className)} />
  );
};
export namespace Accordion {
  export interface Props extends AccordionUI.Props, AccordionVariants {}
}

export const AccordionItem = (props: AccordionUI.Item) => {
  const styles = accordionStyles();
  return (
    <AccordionUI.Item
      {...props}
      className={cn(styles.item(), props.className)}
    />
  );
};

const AccordionHeading = (props: AccordionUI.Heading) => {
  const styles = accordionStyles();
  return (
    <AccordionUI.Heading
      {...props}
      className={cn(styles.heading(), props.className)}
    />
  );
};

export const AccordionTrigger = (props: AccordionUI.Trigger) => {
  const styles = accordionStyles();
  return (
    <AccordionHeading>
      <AccordionUI.Trigger
        {...props}
        className={cn(styles.trigger(), props.className)}
      />
    </AccordionHeading>
  );
};

const AccordionPanel = (props: AccordionUI.Panel) => {
  const styles = accordionStyles();
  return (
    <AccordionUI.Panel
      {...props}
      className={cn(styles.panel(), props.className)}
    />
  );
};

export const AccordionContent = (props: AccordionUI.Content) => {
  const styles = accordionStyles();
  return (
    <AccordionPanel>
      <AccordionUI.Content
        {...props}
        className={cn(styles.content(), props.className)}
      />
    </AccordionPanel>
  );
};

export const AccordionIndicator = (props: AccordionUI.Indicator) => {
  const styles = accordionStyles();
  return (
    <AccordionUI.Indicator
      {...props}
      className={cn(styles.indicator(), props.className)}
    />
  );
};
