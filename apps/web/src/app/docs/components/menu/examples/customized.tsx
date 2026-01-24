import { Avatar } from "jamsrui/avatar";
import { Menu } from "jamsrui/menu";
import { type Variants } from "motion/react";

const motionVariants: Variants = {
  initial: { scale: 0.97 },
  animate: { scale: 1 },
  exit: { scale: 0.97 },
};

export const MenuCustomized = () => {
  return (
    <Menu radius="2xl">
      <Menu.Trigger>
        <button>
          <Avatar>
            <Avatar.Image src="https://i.pravatar.cc/150" alt="JamsrUI" />
          </Avatar>
        </button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item textValue="Undo">Undo</Menu.Item>
        <Menu.Item textValue="Info">Info</Menu.Item>
        <Menu.Item textValue="Search">Search</Menu.Item>
        <Menu.Item textValue="Cut">Cut</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
