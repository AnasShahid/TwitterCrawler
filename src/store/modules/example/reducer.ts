import { Action } from "./action";
import { EXAMPLE_REQUEST_TYPES } from "./types";

export const exampleReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case EXAMPLE_REQUEST_TYPES.EXAMPLE_INCREAMENT_COUNTER:
      return state + 1;

    case EXAMPLE_REQUEST_TYPES.EXAMPLE_DECREAMENT_COUNTER:
      if (state > 0) state = state - 1;
      return state;

    default:
      return state;
  }
};
