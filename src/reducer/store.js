import { configureStore } from "@reduxjs/toolkit";
import incrementSlides from "./toggleSlide";
import controlSlide from "./controlSlide";

export default configureStore({
  reducer: {
    slide: incrementSlides,
    discoSlide: controlSlide,
  },
});
