import { IFile } from "../interfaces";

export const files: IFile[] = [
  {
    fileName: "vs-code",
    isFolder: true,
    children: [
      {
        fileName: "node_modules",
        isFolder: true,
        children: [
          {
            fileName: "react.tsx",
            isFolder: false,
          },
          {
            fileName: "new.tsx",
            isFolder: false,
          },
        ],
      },
      {
        fileName: "src",
        isFolder: true,
        children: [
          {
            fileName: "components",
            isFolder: true,
            children: [
              {
                fileName: "Navbar.tsx",
                isFolder: false,
              },
              {
                fileName: "Modal.tsx",
                isFolder: false,
              },
              {
                fileName: "ProductDetails.jsx",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        fileName: "index.html",
        isFolder: false,
      },
      {
        fileName: "main.ts",
        isFolder: false,
      },
      {
        fileName: "index.css",
        isFolder: false,
      },
      {
        fileName: "App.tsx",
        isFolder: false,
      },
    ],
  },
];
