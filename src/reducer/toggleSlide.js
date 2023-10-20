import { createAction } from "@reduxjs/toolkit";

export const increments = createAction("INCREMENTS");
export const decrements = createAction("DECREMENTS");
export const reset = createAction("RESET");

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
        count: state.count - 1,
      };
    case reset.type:
      return {
        count: 0,
      };
    default:
      return state;
  }
}

export default incrementSlides;
