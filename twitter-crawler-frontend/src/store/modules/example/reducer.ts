import { Action } from "../../../interfaces";
import { ACTION_TYPES } from "./types";
const intitialState = {
  example: {
    count: 0,
  },
};
export const exampleReducer = (state = intitialState, action: Action) => {
  const {
    example: { count },
  } = state;
  switch (action.type) {
    case ACTION_TYPES.EXAMPLE_INCREMENT_COUNTER:
      return {
        ...state,
        example: {
          count: count + 1,
        },
      };

    case ACTION_TYPES.EXAMPLE_DECREMENT_COUNTER:
      if (count > 0) {
        return {
          ...state,
          example: {
            count: count - 1,
          },
        };
      }
      return { ...state };

    default:
      return { ...state };
  }
};
