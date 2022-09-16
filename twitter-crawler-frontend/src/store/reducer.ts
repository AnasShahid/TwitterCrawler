import { combineReducers } from "redux";
import { exampleReducer } from "./modules/example/reducer";
import { analysisReducer } from "./modules/tweet/analysis/reducer";
const rootReducer = combineReducers({ exampleReducer, analysisReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
