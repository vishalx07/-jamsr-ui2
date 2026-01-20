import { Card, CardContent, Tabs } from "jamsrui";

export const TabsUsage = () => {
  return (
    <Tabs defaultValue="photos">
      <Tabs.List>
        <Tabs.Tab value="photos">
          Photos
          <Tabs.Indicator />
        </Tabs.Tab>
        <Tabs.Tab value="music">
          Music
          <Tabs.Indicator />
        </Tabs.Tab>
        <Tabs.Tab value="videos">
          Videos
          <Tabs.Indicator />
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="photos">
        <Card>
          <CardContent>
            📸 <strong>12 new photos</strong> from your weekend trip to Yosemite
            have been uploaded. Don't forget to tag your friends and add them to
            the shared album!
          </CardContent>
        </Card>
      </Tabs.Panel>
      <Tabs.Panel value="music">
        <Card>
          <CardContent>
            🎵 You’ve got a new playlist: <em>“Lo-Fi Evenings”</em>. Featuring
            artists like Jinsang, Eevee, and Idealism. Perfect for focusing or
            unwinding.
          </CardContent>
        </Card>
      </Tabs.Panel>
      <Tabs.Panel value="videos">
        <Card>
          <CardContent>
            🎬 Your recent video, <em>“How I Built a Web App in 7 Days”</em>,
            just hit <strong>10k views</strong> on YouTube! Check your channel
            insights for more stats.
          </CardContent>
        </Card>
      </Tabs.Panel>
    </Tabs>
  );
};
