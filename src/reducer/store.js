import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import incrementSlides from "./toggleSlide";
import selectMenus from "./selectMenus";

export default configureStore({
  reducer: {
    slide: incrementSlides,
    user: userSlice,
    select: selectMenus,
  },
});
