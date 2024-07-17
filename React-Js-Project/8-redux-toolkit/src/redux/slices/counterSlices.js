import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const CounterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlices.actions;
export default CounterSlices.reducer;
