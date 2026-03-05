import {
  Menu as MenuRoot,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenuIndicator,
  MenuTrigger,
} from "./menu";

export const Menu = Object.assign(MenuRoot, {
  Group: MenuGroup,
  Item: MenuItem,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  RadioGroup: MenuRadioGroup,
  Separator: MenuSeparator,
  Trigger: MenuTrigger,
  GroupLabel: MenuGroupLabel,
  Content: MenuContent,
  SubmenuIndicator: MenuSubmenuIndicator,
  ItemIndicator: MenuItemIndicator,
  Arrow: MenuArrow,
});

export namespace Menu {
  export interface Props extends MenuRoot.Props {}
}

export {
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenuIndicator,
  MenuTrigger,
};
