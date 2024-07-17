import { configureStore } from "@reduxjs/toolkit";
import { CounterSlices } from "./slices/counterSlices";

export default configureStore({
  reducer: {
    counter: CounterSlices.reducer,
  },
});
