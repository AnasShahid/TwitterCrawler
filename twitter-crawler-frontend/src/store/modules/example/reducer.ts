import { Action } from "../../../interfaces";
import { ACTION_TYPES, LAZY_LOAD_TYPE } from "./types";
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
    case ACTION_TYPES.EXAMPLE_INCREAMENT_COUNTER:
      return {
        ...state,
        example: {
          count: count + 1,
        },
      };

    case ACTION_TYPES.EXAMPLE_DECREAMENT_COUNTER:
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

export const LazyLoadReducer = (state: any, action: any) => {
  switch (action.type) {
    case LAZY_LOAD_TYPE.SET_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LAZY_LOAD_TYPE.ON_GRAB_DATA: {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1,
      };
    }
    default:
      return state;
  }
};
