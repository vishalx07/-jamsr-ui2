"use client";
import { useCallback, useId, useMemo } from "react";

import { useCompositeItem } from "@jamsrui/composite";
import { cn, dataAttr, mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { AccordionContent } from "./accordion-content";
import type { AccordionHeading } from "./accordion-heading";
import type { AccordionIndicator } from "./accordion-indicator";
import type { AccordionItem } from "./accordion-item";
import { AccordionPanel } from "./accordion-panel";
import type { AccordionTrigger } from "./accordion-trigger";

export const useAccordionItem = (props: useAccordionItem.Props) => {
  const { handleAccordionOpen, value } = useAccordionContext();
  const { index } = useCompositeItem({});
  const indexValue = (index + 1).toString();
  const {
    value: itemValue = indexValue,
    disabled: isDisabled,
    ...elementProps
  } = props;
  const isOpen = useMemo(() => value.includes(itemValue), [value, itemValue]);
  const triggerId = useId();
  const contentId = useId();

  const getItemProps: PropGetter<AccordionItem.Props> = useCallback(
    (props) => ({
      ...elementProps,
      ...props,
      "data-slot": "accordion-item",
      className: cn(elementProps.className, props?.className),
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
    }),
    [elementProps, isDisabled],
  );

  const getPanelProps: PropGetter<AccordionPanel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "panel",
      role: "region",
      "aria-labelledby": triggerId,
      id: contentId,
    }),
    [triggerId, contentId],
  );

  const getContentProps: PropGetter<AccordionContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
    }),
    [],
  );

  const getTriggerProps: PropGetter<AccordionTrigger.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onClick: () => {
          handleAccordionOpen(itemValue);
        },
        disabled: isDisabled,
        "aria-disabled": isDisabled,
        "data-disabled": isDisabled,
      }),
      "data-slot": "trigger",
      id: triggerId,
      "aria-expanded": isOpen,
      "aria-controls": contentId,
    }),
    [isDisabled, triggerId, isOpen, contentId, handleAccordionOpen, itemValue],
  );

  const getIndicatorProps: PropGetter<AccordionIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "indicator",
      "data-opened": dataAttr(isOpen),
    }),
    [isOpen],
  );

  const getHeadingProps: PropGetter<AccordionHeading.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "heading",
    }),
    [],
  );

  return useMemo(
    () => ({
      getItemProps,
      getContentProps,
      getTriggerProps,
      getIndicatorProps,
      isOpen,
      isDisabled,
      getHeadingProps,
      getPanelProps,
    }),
    [
      getItemProps,
      getContentProps,
      getTriggerProps,
      getIndicatorProps,
      getHeadingProps,
      isOpen,
      isDisabled,
      getPanelProps,
    ],
  );
};

export namespace useAccordionItem {
  export interface Props extends UIProps<"div"> {
    value?: string;
    disabled?: boolean;
  }
}
