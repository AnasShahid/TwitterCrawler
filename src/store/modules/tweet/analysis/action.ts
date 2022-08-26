import { User } from "../../../../interfaces/components/tweet-card";
import { ACTION_TYPES } from "./types";
export const addUserToAnalysis = (payload: User) => {
  return {
    type: ACTION_TYPES.ADD_USER_TO_ANALYSIS,
    payload,
  };
};
