"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDivider } from "./use-divider";

export const Divider = (props: Divider.Props) => {
  const ctx = useDivider(props);
  const { getRootProps, getDividerProps } = ctx;
  const { children } = props;

  const composedChildren = (
    <>
      <div {...getDividerProps({})} />
      {!!children && (
        <>
          {children}
          <div {...getDividerProps({})} />
        </>
      )}
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return renderElement;
};

export namespace Divider {
  export interface Props extends useDivider.Props {}
}
