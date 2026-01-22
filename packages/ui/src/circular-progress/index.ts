import {
  CircularProgressLabel,
  CircularProgressProgress,
  CircularProgress as CircularProgressRoot,
  CircularProgressTrack,
} from "./circular-progress";

export const CircularProgress = Object.assign(CircularProgressRoot, {
  Label: CircularProgressLabel,
  Track: CircularProgressTrack,
  Progress: CircularProgressProgress,
});

export {
  CircularProgressLabel,
  CircularProgressTrack,
  CircularProgressProgress,
};

export namespace CircularProgress {
  export interface Props extends CircularProgressRoot.Props {}
}
