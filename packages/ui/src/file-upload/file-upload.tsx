import { FileUpload as FileUploadUI, formatBytes } from "@jamsrui/react";
import { fileUploadStyles } from "./styles";

export const FileUpload = (props: FileUpload.Props) => {
  const { className, ...rest } = props;
  const styles = fileUploadStyles();
  return <FileUploadUI {...rest} className={styles.root({ className })} />;
};

export { formatBytes };

export namespace FileUpload {
  export interface Props extends FileUploadUI.Props {}
}
