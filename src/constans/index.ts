import { v4 as uuid } from "uuid";
import { IFile } from "../interfaces";

export const files: IFile[] = [
  {
    id: uuid(),
    fileName: "vs-code",
    isFolder: true,
    children: [
      {
        id: uuid(),
        fileName: "node_modules",
        isFolder: true,
        children: [
          {
            id: uuid(),
            fileName: "react.tsx",
            isFolder: false,
            fileContent: "",
          },
          {
            id: uuid(),
            fileName: "new.tsx",
            isFolder: false,
            fileContent: "",
          },
          {
            id: uuid(),
            fileName: "app.js",
            isFolder: false,
            fileContent: "",
          },
          {
            id: uuid(),
            fileName: "style.scss",
            isFolder: false,
            fileContent: "",
          },
        ],
      },
      {
        id: uuid(),
        fileName: "src",
        isFolder: true,
        children: [
          {
            id: uuid(),
            fileName: "components",
            isFolder: true,
            children: [
              {
                id: uuid(),
                fileName: "Navbar.tsx",
                isFolder: false,
                fileContent: "",
              },
              {
                id: uuid(),
                fileName: "Modal.tsx",
                isFolder: false,
                fileContent: "",
              },
              {
                id: uuid(),
                fileName: "ProductDetails.jsx",
                isFolder: false,
                fileContent: "",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        fileName: "data",
        isFolder: true,
        children: [
          {
            id: uuid(),
            fileName: "main.css",
            isFolder: false,
            fileContent: "",
          },
        ],
      },
      {
        id: uuid(),
        fileName: "index.html",
        isFolder: false,
        fileContent: "",
      },
      {
        id: uuid(),
        fileName: "main.ts",
        isFolder: false,
        fileContent: `export interface IFile {
    id: string | null;
    fileName: string;
    isFolder: boolean;
    children?: IFile[];
    fileContent?: string;
}`,
      },
      {
        id: uuid(),
        fileName: "index.css",
        isFolder: false,
        fileContent: "",
      },
      {
        id: uuid(),
        fileName: "App.tsx",
        isFolder: false,
        fileContent: "",
      },
      {
        id: uuid(),
        fileName: "test.tsxs",
        isFolder: false,
        fileContent: "",
      },
    ],
  },
];

export const extFolders = new Map([
  ["node_modules", "node_modules"],
  ["src", "src"],
  ["components", "components"],
]);

export const extFiles = [
  "js",
  "jsx",
  "ts",
  "tsx",
  "sass",
  "scss",
  "html",
  "css",
];
