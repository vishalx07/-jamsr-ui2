import { Tabs } from "jamsrui/tabs";

export const TabVariants = () => {
  const variants = ["underlined", "bordered", "solid", "light"] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs
          key={variant}
          defaultValue="photos"
          variant={variant}
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
