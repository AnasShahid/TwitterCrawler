import { Action } from "../../../../interfaces";
import { UserAnalysis } from "../../../../interfaces/redux/reducer";
import { ACTION_TYPES } from "./types";

const intitialState: UserAnalysis = {
  analysis: {
    users: [],
  },
};

export const analysisReducer = (state = intitialState, action: Action) => {
  const {
    analysis: { users },
  } = state;
  switch (action.type) {
    case ACTION_TYPES.ADD_USER_TO_ANALYSIS:
      users.push(action.payload);
      return { ...state };
    default:
      return { ...state };
  }
};
