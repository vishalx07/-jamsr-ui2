import { ChevronUpIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuColors = () => {
  return (
    <Menu>
      <Menu.Trigger
        render={
          <Button>
            <ChevronUpIcon />
            Open Me
          </Button>
        }
      />
      <Menu.Content>
        <Menu.Item color="default">Add to Library</Menu.Item>
        <Menu.Item color="primary">Add to Playlist</Menu.Item>
        <Menu.Item color="secondary">Play Next</Menu.Item>
        <Menu.Item color="success">Play Last</Menu.Item>
        <Menu.Item color="warning">Share</Menu.Item>
        <Menu.Item color="danger">Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
