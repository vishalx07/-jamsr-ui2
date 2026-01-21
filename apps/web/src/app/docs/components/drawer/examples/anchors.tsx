import { Button } from "jamsrui/button";
import { Drawer } from "jamsrui/drawer";

const DrawerItem = (props: Partial<Drawer.Props> & { btnText: string }) => {
  const { btnText, ...restProps } = props;
  return (
    <Drawer {...restProps}>
      <Drawer.Trigger>
        <Button>{btnText}</Button>
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

export const DrawerAnchors = () => {
  const anchors: NonNullable<Drawer.Props["anchor"]>[] = [
    "left",
    "right",
    "top",
    "bottom",
  ];
  return (
    <div className="flex gap-4">
      {anchors.map((anchor) => (
        <DrawerItem key={anchor} anchor={anchor} btnText={anchor} />
      ))}
    </div>
  );
};
