export interface FileInfo {
  name: string;
}

export interface IFile {
  id: string | null;
  fileName: string;
  isFolder: boolean;
  children?: IFile[];
  fileContent?: string;
}

export interface IRenderFileIcon {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

export interface IOpenedFileTab {
  file: IFile;
  idx: number;
}
