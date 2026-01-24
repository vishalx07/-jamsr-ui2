import { Button } from "jamsrui/button";
import { Drawer } from "jamsrui/drawer";
import { Text } from "jamsrui/text";

export const DrawerCustomized = () => {
  return (
    <Drawer>
      <Drawer.Trigger>
        <Button>Click Me!</Button>
      </Drawer.Trigger>
      <Drawer.Content className="border-2 border-red-950">
        <Drawer.Header className="bg-red-500">Product Filter</Drawer.Header>
        <Drawer.Body className="bg-content2">
          <Text className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum optio quo reiciendis odio facilis quos adipisci unde eum
            vero perspiciatis, minima iste doloribus voluptatibus officia dicta,
            maxime, placeat qui.
          </Text>
        </Drawer.Body>
        <Drawer.Footer className="bg-content3">
          <Drawer.CloseTrigger>
            <Button variant="light">Cancel</Button>
          </Drawer.CloseTrigger>
          <Drawer.CloseTrigger>
            <Button color="success">Apply</Button>
          </Drawer.CloseTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
};
