import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addError: (state, { payload }) => {
      console.log(payload);
      state.list = payload;
    },
    removeError: (state, { payload }) => {
      state.list.splice(payload, 1);
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
