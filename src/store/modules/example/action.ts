import { EXAMPLE_REQUEST_TYPES } from "./types";

export type Action = { type: string };
export const increamentCouter = () => {
  return {
    type: EXAMPLE_REQUEST_TYPES.EXAMPLE_INCREAMENT_COUNTER,
  };
};
export const decreamentCouter = () => {
  return {
    type: EXAMPLE_REQUEST_TYPES.EXAMPLE_DECREAMENT_COUNTER,
  };
};
