import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import teamReducer from "./teamReducer";

export const rootReducer = combineReducers({
  general: generalReducer,
  team: teamReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
