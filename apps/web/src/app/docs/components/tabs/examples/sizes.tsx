import { Tabs } from "jamsrui/tabs";

export const TabSizes = () => {
  const sizes = ["sm", "md", "lg"] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {sizes.map((size) => (
        <Tabs
          key={size}
          defaultValue="photos"
          size={size}
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
