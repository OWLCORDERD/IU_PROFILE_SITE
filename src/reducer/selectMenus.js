import { createSlice } from "@reduxjs/toolkit";

export const selectMenus = createSlice({
  name: "select",
  initialState: {
    menu: "",
  },
  reducers: {
    selectMenu: (state, action) => {
      state.menu = action.payload.menu;
    },
  },
});

export const { selectMenu } = selectMenus.actions;
export default selectMenus.reducer;
