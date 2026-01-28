import {
  LinearProgress as LinearProgressRoot,
  LinearProgressBar,
} from "./linear-progress";

export const LinearProgress = Object.assign(LinearProgressRoot, {
  Bar: LinearProgressBar,
});

export namespace LinearProgress {
  export interface Props extends LinearProgressRoot.Props {}
}
