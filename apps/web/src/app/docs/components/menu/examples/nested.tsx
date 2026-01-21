import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuNested = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Open Me</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item textValue="Undo">Undo</Menu.Item>
        <Menu.Item textValue="Info">Info</Menu.Item>
        <Menu.Item textValue="Search">Search</Menu.Item>
        <Menu>
          <Menu.Trigger>
            <Menu.Item textValue="Search">
              Search <Menu.SubmenuIndicator />
            </Menu.Item>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item textValue="Undo">Undo</Menu.Item>
            <Menu.Item textValue="Info">Info</Menu.Item>
            <Menu.Item textValue="Search">Search</Menu.Item>
            <Menu>
              <Menu.Trigger>
                <Menu.Item textValue="Search">
                  Search <Menu.SubmenuIndicator />
                </Menu.Item>
              </Menu.Trigger>
              <Menu.Content>
                <Menu.Item textValue="Undo">Undo</Menu.Item>
                <Menu.Item textValue="Info">Info</Menu.Item>
                <Menu.Item textValue="Search">Search</Menu.Item>
              </Menu.Content>
            </Menu>
          </Menu.Content>
        </Menu>
      </Menu.Content>
    </Menu>
  );
};
