import { combineReducers } from "redux";
import { exampleReducer } from "./modules/example/reducer";
const rootReducer = combineReducers({ exampleReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
