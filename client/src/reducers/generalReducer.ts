import { LOADING, DONE_LOADING } from "../constants/constants";

const initialState = {
  loading: false,
  error: false,
};

const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DONE_LOADING:
      return {
        loading: false,
        error: false,
      };
    case LOADING:
      return {
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};

export default generalReducer;
