"use client";

import { useHover, useMergeRefs, useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import { dataAttr, type UIProps } from "@jamsrui/utils";

export const SelectTrigger = (props: SelectTrigger.Props) => {
  const { ref, ...restProps } = props;
  const { getTriggerProps, isDisabled } = useSelectContext();
  const { isHovered, ref: hoverRef } = useHover<HTMLButtonElement>({
    isDisabled,
  });
  const refs = useMergeRefs([ref, hoverRef]);

  const renderElement = useRenderElement("button", {
    props: [
      getTriggerProps(restProps),
      {
        "data-hovered": dataAttr(isHovered),
        ref: refs,
      },
    ],
  });
  return renderElement;
};

export namespace SelectTrigger {
  export interface Props extends UIProps<"button"> {}
}
