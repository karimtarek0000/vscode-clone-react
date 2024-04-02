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
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;
export const selectFileTree = (state: RootState) => state.tree;
export default fileTreeSlice.reducer;
