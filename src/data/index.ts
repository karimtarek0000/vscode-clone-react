import { v4 as uuid } from "uuid";
import { components, data, nodeModules, root } from "../constens";
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
            fileName: "app.js",
            isFolder: false,
            fileContent: nodeModules.appjs,
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
                fileContent: components.navbar,
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
            fileContent: data.maincss,
          },
        ],
      },
      {
        id: uuid(),
        fileName: "index.html",
        isFolder: false,
        fileContent: root.indexhtml,
      },
      {
        id: uuid(),
        fileName: "main.ts",
        isFolder: false,
        fileContent: root.maints,
      },
      {
        id: uuid(),
        fileName: "index.css",
        isFolder: false,
        fileContent: root.indexcss,
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
