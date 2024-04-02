import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";
import type { RootState } from "../store";

interface IClickedFile {
  id: string | null;
  fileName: string;
  fileContent: string | undefined;
}

interface IFileTree {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IFileTree = {
  openedFiles: [],
  clickedFile: {
    id: null,
    fileName: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles(state, action: PayloadAction<IFile>) {
      const exist = state.openedFiles.find(
        (file) => file.id === action.payload.id
      );

      if (!exist) {
        state.openedFiles = [...state.openedFiles, action.payload];
      }
    },
    setClickedFile(state, action: PayloadAction<IClickedFile>) {
      state.clickedFile = action.payload;
    },
    removeTabActive(state, action: PayloadAction<number>) {
      const idx = action.payload;
      let activeTab!: IFile;

      state.openedFiles.splice(idx, 1);

      if (!idx && !state.openedFiles.length) {
        state.clickedFile = {} as IClickedFile;
        return;
      }

      if (idx) activeTab = state.openedFiles[idx - 1];
      if (!idx) activeTab = state.openedFiles[0];

      state.clickedFile = {
        id: activeTab.id,
        fileName: activeTab.fileName,
        fileContent: activeTab.fileContent,
      };
    },
  },
});

export const { setOpenedFiles, setClickedFile, removeTabActive } =
  fileTreeSlice.actions;
export const selectFileTree = (state: RootState) => state.tree;
export default fileTreeSlice.reducer;
