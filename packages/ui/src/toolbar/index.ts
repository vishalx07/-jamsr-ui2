import {
  Toolbar as ToolbarRoot,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
} from "./toolbar";

export const Toolbar = Object.assign(ToolbarRoot, {
  Button: ToolbarButton,
  Link: ToolbarLink,
  Separator: ToolbarSeparator,
  Group: ToolbarGroup,
  Input: ToolbarInput,
});

export namespace Toolbar {
  export interface Props extends ToolbarRoot.Props {}
}
