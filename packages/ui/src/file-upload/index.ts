import { FileUpload as FileUploadRoot, formatBytes } from "./file-upload";

export const FileUpload = Object.assign(FileUploadRoot, {});

export namespace FileUpload {
  export interface Props extends FileUploadRoot.Props {}
}

export { formatBytes };
