export interface FileInfo {
  name: string;
}

export interface IFile {
  fileName: string;
  isFolder: boolean;
  children?: IFile[];
}
