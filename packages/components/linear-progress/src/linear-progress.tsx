"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { LinearProgressContext } from "./linear-progress-context";
import { useLinearProgress } from "./use-linear-progress";

export const LinearProgress = (props: LinearProgress.Props) => {
  const ctx = useLinearProgress(props);
  const { getRootProps } = ctx;
  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
  });
  return (
    <LinearProgressContext value={ctx}>{renderElement}</LinearProgressContext>
  );
};

export namespace LinearProgress {
  export interface Props extends useLinearProgress.Props {}
}
