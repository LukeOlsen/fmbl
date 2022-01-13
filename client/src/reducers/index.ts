import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import teamReducer from "./teamReducer";
import cacheReducer from "./cacheReducer";

export const rootReducer = combineReducers({
  general: generalReducer,
  team: teamReducer,
  cache: cacheReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
