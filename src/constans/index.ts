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
          },
          {
            id: uuid(),
            fileName: "new.tsx",
            isFolder: false,
          },
          {
            id: uuid(),
            fileName: "app.js",
            isFolder: false,
          },
          {
            id: uuid(),
            fileName: "style.scss",
            isFolder: false,
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
              },
              {
                id: uuid(),
                fileName: "Modal.tsx",
                isFolder: false,
              },
              {
                id: uuid(),
                fileName: "ProductDetails.jsx",
                isFolder: false,
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
          },
        ],
      },
      {
        id: uuid(),
        fileName: "index.html",
        isFolder: false,
      },
      {
        id: uuid(),
        fileName: "main.ts",
        isFolder: false,
      },
      {
        id: uuid(),
        fileName: "index.css",
        isFolder: false,
      },
      {
        id: uuid(),
        fileName: "App.tsx",
        isFolder: false,
      },
      {
        id: uuid(),
        fileName: "test.tsxs",
        isFolder: false,
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
