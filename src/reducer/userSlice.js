import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    isLogin: null,
  },

  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.email;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
