import { DataGridConfig } from '@jamsrui/data-grid';
import { EditorConfig } from '@jamsrui/editor';
import { IconButtonConfig } from '@jamsrui/icon-button';
import { RippleConfig } from '@jamsrui/ripple';

type Props = {
  children: React.ReactNode;
  dataGrid?: DataGridConfig.Props;
  editor?: EditorConfig.Props;
  iconButton?: IconButtonConfig.Props;
  ripple?: RippleConfig.Props;
};

export const JamsrUIConfig = (props: Props) => {
  const { children } = props;
  return (
  <DataGridConfig {...props.dataGrid}>
  <EditorConfig {...props.editor}>
  <IconButtonConfig {...props.iconButton}>
  <RippleConfig {...props.ripple}>
    {children}
  </RippleConfig>
  </IconButtonConfig>
  </EditorConfig>
  </DataGridConfig>
  );
};
