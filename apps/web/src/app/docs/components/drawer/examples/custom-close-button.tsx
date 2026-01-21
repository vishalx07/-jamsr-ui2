import { Button } from "jamsrui/button";
import { Drawer } from "jamsrui/drawer";
import { Text } from "jamsrui/text";

export const DrawerCustomCloseBtn = () => {
  return (
    <Drawer>
      <Drawer.Trigger>
        <Button>Click Me!</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>Product Filter</Drawer.Header>
        <Drawer.Body>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum optio quo reiciendis odio facilis quos adipisci unde eum
            vero perspiciatis, minima iste doloribus voluptatibus officia dicta,
            maxime, placeat qui.
          </Text>
        </Drawer.Body>
        <Drawer.Footer>
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
