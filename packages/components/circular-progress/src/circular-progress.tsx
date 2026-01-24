"use client";

import { CircularProgressContext } from "./circular-progress-context";
import { useCircularProgress } from "./use-circular-progress";

export const CircularProgress = (props: CircularProgress.Props) => {
  const ctx = useCircularProgress(props);
  const { getRootProps } = ctx;
  return (
    <CircularProgressContext value={ctx}>
      <svg {...getRootProps({})} />
    </CircularProgressContext>
  );
};

export namespace CircularProgress {
  export interface Props extends useCircularProgress.Props {}
}
