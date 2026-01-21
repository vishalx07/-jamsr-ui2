import { Button, Drawer } from "jamsrui";

export const DrawerUsage = () => {
  return (
    <Drawer>
      <Drawer.Trigger>
        <Button>Press Me!</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>Product Filter</Drawer.Header>
        <Drawer.Body>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum optio quo reiciendis odio facilis quos adipisci unde eum
            vero perspiciatis, minima iste doloribus voluptatibus officia dicta,
            maxime, placeat qui.
          </p>
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
