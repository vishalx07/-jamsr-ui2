"use client";

import { createContext, use, useMemo } from "react";

import { Accordion as AccordionUI } from "@jamsrui/react";

import { accordionStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

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

export const AccordionItem = (props: AccordionItem.Props) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionUI.Item
      {...props}
      className={styles.item({ className: props.className })}
    />
  );
};

export const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { styles } = useAccordionContext();
  const { slotProps, ...restProps } = props;
  return (
    <AccordionUI.Heading
      {...slotProps?.heading}
      className={styles.heading({ className: slotProps?.heading?.className })}
    >
      <AccordionUI.Trigger
        {...restProps}
        className={styles.trigger({ className: restProps.className })}
      />
    </AccordionUI.Heading>
  );
};
export namespace AccordionTrigger {
  export interface Props extends AccordionUI.Trigger {
    slotProps?: {
      heading?: AccordionUI.Heading;
    };
  }
}

export const AccordionContent = (props: AccordionContent.Props) => {
  const { styles } = useAccordionContext();
  const { slotProps, ...restProps } = props;
  return (
    <AccordionUI.Panel
      {...slotProps?.panel}
      className={styles.panel({ className: slotProps?.panel?.className })}
    >
      <AccordionUI.Content
        {...restProps}
        className={styles.content({ className: restProps.className })}
      />
    </AccordionUI.Panel>
  );
};
export namespace AccordionContent {
  export interface Props extends AccordionUI.Content {
    slotProps?: {
      panel?: AccordionUI.Panel;
    };
  }
}

export const AccordionIndicator = (props: AccordionIndicator.Props) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionUI.Indicator
      {...props}
      className={styles.indicator({ className: props.className })}
    />
  );
};

export namespace AccordionItem {
  export interface Props extends AccordionUI.Item {}
}

export namespace AccordionIndicator {
  export interface Props extends AccordionUI.Indicator {}
}
