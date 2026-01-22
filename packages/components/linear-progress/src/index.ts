import { LinearProgress as LinearProgressRoot } from "./linear-progress";
import { LinearProgressBar } from "./linear-progress-bar";

export const LinearProgress = Object.assign(LinearProgressRoot, {
  Root: LinearProgressRoot,
  Bar: LinearProgressBar,
});

export namespace LinearProgress {
  export interface Props extends LinearProgressRoot.Props {}
  export interface Bar extends LinearProgressBar.Props {}
}
