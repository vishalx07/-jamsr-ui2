import { FileUpload as FileUploadRoot } from "./file-upload";

export { useFileUpload } from "./use-file-upload";
export { formatBytes } from "./utils";

export const FileUpload = Object.assign(FileUploadRoot, {});

export namespace FileUpload {
  export interface Props extends FileUploadRoot.Props {}
}
