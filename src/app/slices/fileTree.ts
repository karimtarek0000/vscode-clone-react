import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";
import type { RootState } from "../store";

interface IClickedFile {
  fileName: string;
  fileContent: string;
}

interface IFileTree {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IFileTree = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles(state, action: PayloadAction<IFile>) {
      state.openedFiles = [
        ...state.openedFiles.filter((file) => file.id !== action.payload.id),
        action.payload,
      ];
    },
    setClickedFile(state, action: PayloadAction<IClickedFile>) {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;
export const selectFileTree = (state: RootState) => state.tree;
export default fileTreeSlice.reducer;
