import { Progress } from "jamsrui/progress";

export const ProgressUsage = () => {
  return (
    <Progress value={24}>
      <Progress.Label>Export data</Progress.Label>
      <Progress.Value />
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress>
  );
};
