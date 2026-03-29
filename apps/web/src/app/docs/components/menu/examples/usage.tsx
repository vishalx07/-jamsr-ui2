import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuUsage = () => {
  return (
    <Menu>
      <Menu.Trigger render={<Button>Open Me</Button>} />
      <Menu.Content>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Item>Add to Playlist</Menu.Item>
        <Menu.Item>Play Next</Menu.Item>
        <Menu.Item>Play Last</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Favorite</Menu.Item>
        <Menu.Item disabled>Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
