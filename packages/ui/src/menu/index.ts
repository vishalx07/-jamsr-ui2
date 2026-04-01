import {
  Menu as MenuRoot,
  MenuArrow,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuSeparator,
  MenuSubmenuContent,
  MenuSubmenuIndicator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "./menu";

export const Menu = Object.assign(MenuRoot, {
  Group: MenuGroup,
  Item: MenuItem,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  RadioGroup: MenuRadioGroup,
  Separator: MenuSeparator,
  Trigger: MenuTrigger,
  GroupLabel: MenuGroupLabel,
  Content: MenuContent,
  SubmenuIndicator: MenuSubmenuIndicator,
  Arrow: MenuArrow,
  SubmenuContent: MenuSubmenuContent,
  SubmenuRoot: MenuSubmenuRoot,
  SubmenuTrigger: MenuSubmenuTrigger,
});

export namespace Menu {
  export interface Props extends MenuRoot.Props {}
}
