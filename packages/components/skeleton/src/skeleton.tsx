"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { SkeletonContent } from "./skeleton-content";
import { SkeletonContext } from "./skeleton-context";
import { useSkeleton } from "./use-skeleton";

export const Skeleton = (props: Skeleton.Props) => {
  const ctx = useSkeleton(props);
  const { getRootProps } = ctx;
  const { children } = props;

  const composedChildren = (
    <>
      <SkeletonContent>{children}</SkeletonContent>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <SkeletonContext value={ctx}>{renderElement}</SkeletonContext>;
};

export namespace Skeleton {
  export interface Props extends useSkeleton.Props {}
}
