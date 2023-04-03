import { createAction } from "@reduxjs/toolkit";

export const increments = createAction("INCREMENTS");
export const decrements = createAction("DECREMENTS");

const initialState = {
  count: 0,
};

function incrementSlides(state = initialState, action) {
  switch (action.type) {
    case increments.type:
      return {
        count: state.count + 1,
      };
    case decrements.type:
      return {
        count: state.count - 2,
      };
    default:
      return state;
  }
}

export default incrementSlides;
