import { Meter } from "jamsrui/meter";

export const MeterUsage = () => {
  return (
    <Meter value={24}>
      <Meter.Label>Label</Meter.Label>
      <Meter.Value />
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  );
};
