"use client";

import { Accordion as AccordionUI } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { accordionStyles } from "./styles";

type AccordionVariants = VariantProps<typeof accordionStyles>;

const AccordionContext = createContext<{
  styles: ReturnType<typeof accordionStyles>;
} | null>(null);

const useAccordionContext = () => {
  const ctx = use(AccordionContext);
  if (!ctx) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return ctx;
};

export const Accordion = (props: Accordion.Props) => {
  const { variant, radius, className, ...restProps } = props;
  const styles = accordionStyles({ variant, radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AccordionContext value={value}>
      <AccordionUI {...restProps} className={styles.root({ className })} />
    </AccordionContext>
  );
};
export namespace Accordion {
  export interface Props extends AccordionUI.Props, AccordionVariants {}
}

export const AccordionItem = (props: AccordionUI.Item) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionUI.Item
      {...props}
      className={styles.item({ className: props.className })}
    />
  );
};

const AccordionHeading = (props: AccordionUI.Heading) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionUI.Heading
      {...props}
      className={styles.heading({ className: props.className })}
    />
  );
};

export const AccordionTrigger = (props: AccordionUI.Trigger) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionHeading>
      <AccordionUI.Trigger
        {...props}
        className={styles.trigger({ className: props.className })}
      />
    </AccordionHeading>
  );
};

const AccordionPanel = (props: AccordionUI.Panel) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionUI.Panel
      {...props}
      className={styles.panel({ className: props.className })}
    />
  );
};

export const AccordionContent = (props: AccordionUI.Content) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionPanel>
      <AccordionUI.Content
        {...props}
        className={styles.content({ className: props.className })}
      />
    </AccordionPanel>
  );
};

export const AccordionIndicator = (props: AccordionUI.Indicator) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};
