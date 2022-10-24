import { SET_CACHE } from "../constants";

const initialState = {
  teams: [],
};

const cacheReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CACHE:
      return {
        ...action.cache,
      };
    default:
      return state;
  }
};

export default cacheReducer;
