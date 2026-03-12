"use client";
import { FloatingFocusManager, FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useAutocompleteContext } from "./autocomplete-context";

import type { UIProps } from "@jamsrui/utils";

export const AutocompletePositioner = (props: AutocompletePositioner.Props) => {
  const { getPositionerProps, isOpen, getFocusManagerProps } =
    useAutocompleteContext();
  const renderElement = useRenderElement("button", {
    props: [getPositionerProps(props)],
  });
  return isOpen ? (
    <FloatingPortal>
      <FloatingFocusManager {...getFocusManagerProps()}>
        {renderElement}
      </FloatingFocusManager>
    </FloatingPortal>
  ) : null;
};

export namespace AutocompletePositioner {
  export interface Props extends UIProps<"button"> {}
}
