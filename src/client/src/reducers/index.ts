import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import teamReducer from "./teamReducer";
import cacheReducer from "./cacheReducer";
import linesReducer from "./linesReducer";

export const rootReducer = combineReducers({
  general: generalReducer,
  team: teamReducer,
  cache: cacheReducer,
  lines: linesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
