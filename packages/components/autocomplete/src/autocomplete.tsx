"use client";
import { useRenderElement } from "@jamsrui/hooks";
import { Input } from "@jamsrui/input";

import { AutocompleteContent } from "./autocomplete-content";
import { AutocompleteContext } from "./autocomplete-context";
import { AutocompletePositioner } from "./autocomplete-positioner";
import { useAutocomplete } from "./use-autocomplete";

export const Autocomplete = (props: Autocomplete.Props) => {
  const { children } = props;
  const ctx = useAutocomplete(props);
  const { getRootProps, getInputProps } = ctx;

  const composedChildren = (
    <>
      <Input {...getInputProps({})} />
      <AutocompletePositioner>
        <AutocompleteContent>{children}</AutocompleteContent>
      </AutocompletePositioner>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <AutocompleteContext value={ctx}>{renderElement}</AutocompleteContext>;
};

export namespace Autocomplete {
  export interface Props extends useAutocomplete.Props {}
}
