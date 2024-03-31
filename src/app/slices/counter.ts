import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface CounterState {
  value: number;
  name: string;
}

const initialState: CounterState = {
  value: 0,
  name: "new",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
