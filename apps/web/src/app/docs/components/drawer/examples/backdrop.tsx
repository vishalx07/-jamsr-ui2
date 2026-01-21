import { Button, Drawer } from "jamsrui";

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

export const DrawerBackdrop = () => {
  const backdrops: NonNullable<Drawer.Props["backdrop"]>[] = [
    "transparent",
    "opaque",
    "blur",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => (
        <DrawerItem
          btnText={`backdrop ${backdrop}`}
          key={backdrop}
          backdrop={backdrop}
        />
      ))}
    </div>
  );
};
