import { ACTION_TYPES } from "./types";

export type Action = { type: string };
export const increamentCouter = () => {
  return {
    type: ACTION_TYPES.EXAMPLE_INCREAMENT_COUNTER,
  };
};
export const decreamentCouter = () => {
  return {
    type: ACTION_TYPES.EXAMPLE_DECREAMENT_COUNTER,
  };
};
