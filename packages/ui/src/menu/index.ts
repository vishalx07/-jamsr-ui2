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
  export interface Group extends MenuGroup.Props {}
  export interface Item extends MenuItem.Props {}
  export interface CheckboxItem extends MenuCheckboxItem.Props {}
  export interface RadioItem extends MenuRadioItem.Props {}
  export interface RadioGroup extends MenuRadioGroup.Props {}
  export interface Separator extends MenuSeparator.Props {}
  export interface Trigger extends MenuTrigger.Props {}
  export interface GroupLabel extends MenuGroupLabel.Props {}
  export interface Content extends MenuContent.Props {}
  export interface SubmenuIndicator extends MenuSubmenuIndicator.Props {}
  export interface ItemIndicator extends MenuItemIndicator.Props {}
  export interface Arrow extends MenuArrow.Props {}
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
