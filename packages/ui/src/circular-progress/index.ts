import {
  CircularProgress as CircularProgressRoot,
  CircularProgressLabel,
  CircularProgressProgress,
  CircularProgressTrack,
} from "./circular-progress";

export const CircularProgress = Object.assign(CircularProgressRoot, {
  Label: CircularProgressLabel,
  Track: CircularProgressTrack,
  Progress: CircularProgressProgress,
});

export {
  CircularProgressLabel,
  CircularProgressProgress,
  CircularProgressTrack,
};

export namespace CircularProgress {
  export interface Props extends CircularProgressRoot.Props {}
}
