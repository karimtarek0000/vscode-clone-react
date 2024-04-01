import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fileTreeSlice from "./slices/fileTree";

const store = configureStore({
  reducer: {
    tree: fileTreeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
