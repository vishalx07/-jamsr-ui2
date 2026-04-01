import { Tabs } from "jamsrui/tabs";

export const TabRadius = () => {
  const radii = ["none", "sm", "md", "lg", "full"] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {radii.map((radius) => (
        <Tabs
          key={radius}
          defaultValue="photos"
          radius={radius}
          aria-label="Tabs variants"
        >
          <Tabs.List>
            <Tabs.Tab value="photos">Photos</Tabs.Tab>
            <Tabs.Tab value="music">Music</Tabs.Tab>
            <Tabs.Tab value="videos">Videos</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
        </Tabs>
      ))}
    </div>
  );
};
