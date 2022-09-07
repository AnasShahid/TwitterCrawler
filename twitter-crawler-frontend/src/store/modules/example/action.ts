import { ACTION_TYPES } from "./types";
export const incrementCounter = () => {
  return {
    type: ACTION_TYPES.EXAMPLE_INCREMENT_COUNTER,
  };
};
export const decrementCounter = () => {
  return {
    type: ACTION_TYPES.EXAMPLE_DECREMENT_COUNTER,
  };
};
