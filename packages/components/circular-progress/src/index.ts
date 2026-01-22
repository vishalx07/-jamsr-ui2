import { CircularProgress as CircularProgressRoot } from "./circular-progress";
import { CircularProgressLabel } from "./circular-progress-label";
import { CircularProgressProgress } from "./circular-progress-progress";
import { CircularProgressTrack } from "./circular-progress-track";

export const CircularProgress = Object.assign(CircularProgressRoot, {
  Root: CircularProgressRoot,
  Label: CircularProgressLabel,
  Progress: CircularProgressProgress,
  Track: CircularProgressTrack,
});

export namespace CircularProgress {
  export interface Props extends CircularProgressRoot.Props {}
  export interface Label extends CircularProgressLabel.Props {}
  export interface Progress extends CircularProgressProgress.Props {}
  export interface Track extends CircularProgressTrack.Props {}
}
