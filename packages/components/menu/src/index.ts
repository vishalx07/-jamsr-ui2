import { Menu as MenuRoot } from "./menu";
import { MenuArrow } from "./menu-arrow";
import { MenuBackdrop } from "./menu-backdrop";
import { MenuCheckboxItem } from "./menu-checkbox-item";
import { MenuPositioner } from "./menu-positioner";
import { MenuContent } from "./menu-content";
import { MenuGroup } from "./menu-group";
import { MenuGroupLabel } from "./menu-group-label";
import { MenuItem } from "./menu-item";
import { MenuItemIndicator } from "./menu-item-indicator";
import { MenuPortal } from "./menu-portal";
import { MenuRadioGroup } from "./menu-radio-group";
import { MenuRadioItem } from "./menu-radio-item";
import { MenuSeparator } from "./menu-separator";
import { SubmenuIndicator } from "./menu-submenu-indicator";
import { MenuTrigger } from "./menu-trigger";

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
  SubmenuIndicator: SubmenuIndicator,
  ItemIndicator: MenuItemIndicator,
  Arrow: MenuArrow,
  Positioner: MenuPositioner,
  Portal: MenuPortal,
  Backdrop: MenuBackdrop,
});

export namespace Menu {
  export interface Props extends MenuRoot.Props {}
  export interface CheckboxItem extends MenuCheckboxItem.Props {}
  export interface RadioItem extends MenuRadioItem.Props {}
  export interface RadioGroup extends MenuRadioGroup.Props {}
  export interface Item extends MenuItem.Props {}
  export interface Group extends MenuGroup.Props {}
  export interface GroupLabel extends MenuGroupLabel.Props {}
  export interface Separator extends MenuSeparator.Props {}
  export interface Trigger extends MenuTrigger.Props {}
  export interface Content extends MenuContent.Props {}
  export interface ItemIndicator extends MenuItemIndicator.Props {}
  export interface Arrow extends MenuArrow.Props {}
  export interface Positioner extends MenuPositioner.Props {}
}
