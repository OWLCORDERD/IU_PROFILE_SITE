import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: 0,
};

export const controlSlide = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    incrementToggle: (state) => {
      state.toggle += 1;
    },
    decrementToggle: (state) => {
      state.toggle -= 1;
    },
  },
});

export const { incrementToggle, decrementToggle } = controlSlide.actions;
export default controlSlide.reducer;
